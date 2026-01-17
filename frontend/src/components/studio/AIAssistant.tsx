'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Cpu, FileText, Film, Loader2, Key } from 'lucide-react';
import { processVideoWithGemini, listGeminiModels } from '@/app/actions/gemini';

interface AIAssistantProps {
    recordedChunks: Blob[];
}

/**
 * AI Assistant component for video processing with Google Gemini API
 * Provides show notes generation and smart clip identification from recorded video
 */
export function AIAssistant({ recordedChunks }: AIAssistantProps) {
    const [apiKey, setApiKey] = useState('');
    const [showKeyInput, setShowKeyInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [model, setModel] = useState('gemini-1.5-flash-002');
    const [activeTab, setActiveTab] = useState<'summary' | 'clips'>('summary');
    const [availableModels, setAvailableModels] = useState<{ name: string, displayName: string }[]>([]);

    // Fetch available Gemini models when API key changes
    useEffect(() => {
        const key = apiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (key) {
            listGeminiModels(key).then(models => {
                if (models.length > 0) {
                    setAvailableModels(models);
                }
            });
        }
    }, [apiKey]);

    /**
     * Process video with Gemini AI for show notes or clip identification
     * @param type - 'summary' for show notes, 'clips' for viral clip suggestions
     */
    const handleAction = async (type: 'summary' | 'clips') => {
        // Ensure API key is available before processing
        if (!apiKey && !process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
            setShowKeyInput(true);
            return;
        }
        setLoading(true);
        setResult(null);
        setActiveTab(type);

        const key = apiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
        // Create appropriate prompt based on requested action type
        const prompt = type === 'summary'
            ? "Generate a catchy Title, a short abstract/summary for social media, and 5 hashtags for this video."
            : "Analyze this video and identify 3 potential viral highlight clips. Return JSON format with { start: 'MM:SS', end: 'MM:SS', description: 'string' } for each clip.";

        try {
            // Combine recorded chunks into a single video blob
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const formData = new FormData();
            formData.append('file', blob, 'recording.webm');

            // Send to Gemini API for processing
            const text = await processVideoWithGemini(formData, key, model, prompt);
            setResult(text);
        } catch (err: any) {
            setResult(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    <Cpu className="w-5 h-5 text-indigo-500" />
                    Neural Core
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowKeyInput(!showKeyInput)} className="text-xs text-gray-400">
                    <Key className="w-3 h-3 mr-1" /> {apiKey ? 'Key Set' : 'Set Key'}
                </Button>
            </div>

            {showKeyInput && (
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Enter Gemini API Key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="w-full p-2 text-sm rounded border dark:bg-zinc-800 dark:border-white/10"
                    />
                    <p className="text-[10px] text-gray-500 mt-1">
                        Key is used locally and sent to Google servers. Get one at aistudio.google.com
                    </p>
                </div>
            )}

            <div className="mb-4">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                    Model {availableModels.length > 0 ? `(${availableModels.length} available)` : ''}
                </label>
                <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full p-2 text-sm rounded border bg-white dark:bg-zinc-800 dark:border-white/10"
                >
                    {availableModels.length === 0 && (
                        <>
                            <option value="gemini-1.5-flash-002">Gemini 1.5 Flash (Fastest - 002)</option>
                            <option value="gemini-1.5-pro-002">Gemini 1.5 Pro (Smartest - 002)</option>
                            <option value="gemini-2.0-flash-exp">Gemini 2.0 Flash Exp (Experimental)</option>
                        </>
                    )}

                    {availableModels.map((m) => (
                        <option key={m.name} value={m.name}>
                            {m.displayName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex gap-2 mb-4">
                <Button
                    onClick={() => handleAction('summary')}
                    disabled={loading || recordedChunks.length === 0}
                    className="flex-1 bg-white dark:bg-zinc-800 text-indigo-600 shadow-sm border border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-50"
                >
                    <FileText className="w-4 h-4 mr-2" /> Show Notes
                </Button>
                <Button
                    onClick={() => handleAction('clips')}
                    disabled={loading || recordedChunks.length === 0}
                    className="flex-1 bg-white dark:bg-zinc-800 text-purple-600 shadow-sm border border-purple-100 dark:border-purple-900/50 hover:bg-purple-50"
                >
                    <Film className="w-4 h-4 mr-2" /> Find Clips
                </Button>
            </div>

            {loading && (
                <div className="py-8 text-center text-gray-500 flex flex-col items-center gap-2 animate-pulse">
                    <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
                    <p className="text-xs">Watching video & thinking...</p>
                </div>
            )}

            {result && !loading && (
                <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono max-h-60 overflow-y-auto border border-gray-100 dark:border-white/5">
                    {result}
                </div>
            )}
        </Card>
    );
}
