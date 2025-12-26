'use client';

import { useState, useEffect, useRef } from 'react';
import { useFFmpeg } from '@/hooks/useFFmpeg';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Play, Pause, Scissors, Download, Loader2 } from 'lucide-react';
import { AIAssistant } from './AIAssistant';

interface EditorProps {
    recordedChunks: Blob[];
}

export function Editor({ recordedChunks }: EditorProps) {
    const { ffmpeg, loaded, isLoading } = useFFmpeg();
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [recordedChunks]);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const processVideo = async () => {
        if (!loaded) return;

        try {
            const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
            const videoData = await videoBlob.arrayBuffer();

            // Write file to FFmpeg's virtual file system
            await ffmpeg.writeFile('input.webm', new Uint8Array(videoData));

            // Transcode to MP4 
            // -c:v copy: Copy video stream (likely VP9) to MP4 container.
            // -c:a aac: Re-encode audio to AAC for compatibility.
            // -strict experimental: Often needed for aac in some ffmpeg versions (though usually fine in recent ones).
            await ffmpeg.exec(['-i', 'input.webm', '-c:v', 'copy', '-c:a', 'aac', 'output.mp4']);

            // Read the result
            const data = await ffmpeg.readFile('output.mp4');

            // Download
            const url = URL.createObjectURL(new Blob([data as any], { type: 'video/mp4' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'record-final.mp4';
            a.click();

            // Cleanup
            await ffmpeg.deleteFile('input.webm');
            await ffmpeg.deleteFile('output.mp4');
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Processing failed", error);
        }
    };

    return (
        <Card className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Studio Editor</h3>
                {isLoading && <span className="text-sm text-yellow-500 flex gap-2 items-center"><Loader2 className="animate-spin w-4 h-4" /> Loading Engine...</span>}
                {loaded && <span className="text-sm text-green-500">Engine Ready</span>}
            </div>

            <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                {videoUrl ? (
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className="w-full h-full object-contain"
                        onEnded={() => setIsPlaying(false)}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        No Recording Yet
                    </div>
                )}
            </div>

            {/* Timeline / Controls */}
            <div className="flex items-center gap-4">
                <Button onClick={handlePlayPause} disabled={!videoUrl} size="sm" variant="secondary">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex-1 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg relative overflow-hidden">
                    {/* Mock Timeline Track */}
                    <div className="absolute inset-y-2 left-2 right-2 bg-indigo-500/20 rounded"></div>
                    {/* Playhead */}
                    <div className="absolute top-0 bottom-0 left-[10%] w-0.5 bg-red-500"></div>
                </div>
                <Button onClick={processVideo} disabled={!loaded || !videoUrl} size="sm" variant="secondary">
                    <Scissors className="w-4 h-4 mr-2" /> Trim
                </Button>
                <Button disabled={!videoUrl} size="sm" variant="primary">
                    <Download className="w-4 h-4 mr-2" /> Export
                </Button>
            </div>
            {/* AI Assistant */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                <AIAssistant recordedChunks={recordedChunks} />
            </div>
        </Card>
    );
}
