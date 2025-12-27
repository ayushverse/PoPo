'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { v4 as uuidv4 } from 'uuid';

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

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const tempPath = await saveToTemp(buffer);

        const uploadResult = await fileManager.uploadFile(tempPath, {
            mimeType: file.type || 'video/webm',
            displayName: "Studio Recording",
        });

        let fileState = await fileManager.getFile(uploadResult.file.name);
        while (fileState.state === 'PROCESSING') {
            await new Promise(resolve => setTimeout(resolve, 2000));
            fileState = await fileManager.getFile(uploadResult.file.name);
        }

        if (fileState.state === 'FAILED') {
            throw new Error("Video processing failed.");
        }

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

        await unlink(tempPath).catch(e => console.error("Temp cleanup failed", e));

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
