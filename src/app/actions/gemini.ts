'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { v4 as uuidv4 } from 'uuid';

// Helper to save buffer to temp file
async function saveToTemp(buffer: Buffer): Promise<string> {
    const filename = `upload-${uuidv4()}.webm`;
    const filepath = join(tmpdir(), filename);
    await writeFile(filepath, buffer);
    return filepath;
}

export async function processVideoWithGemini(formData: FormData, apiKey: string, modelName: string, prompt: string) {
    if (!apiKey) throw new Error("API Key is required");

    const file = formData.get('file') as File;
    if (!file) throw new Error("No file uploaded");

    try {
        const fileManager = new GoogleAIFileManager(apiKey);
        const genAI = new GoogleGenerativeAI(apiKey);

        // 1. Save to temp disk (FileManager needs local path)
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const tempPath = await saveToTemp(buffer);

        // 2. Upload to Google AI
        const uploadResult = await fileManager.uploadFile(tempPath, {
            mimeType: file.type || 'video/webm',
            displayName: "Studio Recording",
        });

        // 3. Wait for processing (Video takes time)
        let fileState = await fileManager.getFile(uploadResult.file.name);
        while (fileState.state === 'PROCESSING') {
            await new Promise(resolve => setTimeout(resolve, 2000));
            fileState = await fileManager.getFile(uploadResult.file.name);
        }

        if (fileState.state === 'FAILED') {
            throw new Error("Video processing failed.");
        }

        // 4. Generate Content
        const model = genAI.getGenerativeModel({ model: modelName || "gemini-1.5-flash-latest" });
        const result = await model.generateContent([
            prompt,
            {
                fileData: {
                    fileUri: uploadResult.file.uri,
                    mimeType: uploadResult.file.mimeType,
                },
            },
        ]);

        // Cleanup
        await unlink(tempPath).catch(e => console.error("Temp cleanup failed", e));
        // await fileManager.deleteFile(uploadResult.file.name); // Optional: keep for cache or delete

        return result.response.text();

    } catch (error: any) {
        console.error("Gemini Error:", error);
        throw new Error(error.message || "AI processing failed");
    }
}

export async function listGeminiModels(apiKey: string) {
    if (!apiKey) return [];

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        if (!response.ok) {
            console.error("Failed to list models", await response.text());
            return [];
        }

        const data = await response.json();
        if (!data.models) return [];

        // Filter for models that support content generation and are stable/latest
        return data.models
            .filter((m: any) => m.supportedGenerationMethods?.includes("generateContent"))
            .map((m: any) => ({
                name: m.name.replace('models/', ''),
                displayName: m.displayName
            }));
    } catch (error) {
        console.error("List Models Error:", error);
        return [];
    }
}
