'use client';

import { useWebRTC } from '@/hooks/useWebRTC';
import { VideoGrid } from '@/components/studio/VideoGrid';
import { Editor } from '@/components/studio/Editor';
import { Button } from '@/components/ui/Button';
import { useRecorder } from '@/hooks/useRecorder';
import { Mic, Video, MonitorUp, PhoneOff, Circle, MicOff, VideoOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StudioPage() {
    const router = useRouter();
    // Hardcoded room for demo 'main-studio'
    // In real app, this would come from params
    const {
        localStream,
        peers,
        socket,
        error,
        toggleAudio,
        toggleVideo,
        isAudioEnabled,
        isVideoEnabled,
        shareScreen,
        stopScreenShare,
        isScreenSharing
    } = useWebRTC('main-studio');
    const { isRecording, startRecording, stopRecording, recordedChunks } = useRecorder();

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 space-y-4">
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
                    <Video className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold">Camera/Microphone Access Denied</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    We couldn't access your camera or microphone. This is usually because:
                </p>
                <ul className="text-left bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl space-y-2 border border-gray-200 dark:border-white/10">
                    <li className="flex items-center gap-2">1. You denied permission in the browser popup.</li>
                    <li className="flex items-center gap-2">2. Your operating system/settings have blocked access.</li>
                    <li className="flex items-center gap-2">3. Another application is using the camera.</li>
                </ul>
                <div className="text-xs text-red-500 font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded">
                    Error Details: {error.name}: {error.message}
                </div>
                <div className="flex gap-4 pt-4">
                    <Button onClick={() => window.location.reload()}>Try Again</Button>
                    <Button variant="ghost" onClick={() => router.push('/')}>Go Back</Button>
                </div>
            </div>
        );
    }

    const handleRecordToggle = () => {
        if (isRecording) {
            stopRecording();
        } else {
            if (localStream) startRecording(localStream);
        }
    };

    const handleLeave = () => {
        // Cleanup handled by hook unmount, just navigate away
        router.push('/');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] gap-4">
            {/* Header / Toolbar (optional specific to studio) */}
            <div className="flex items-center justify-between px-2">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                        Live Studio
                    </h1>
                    <p className="text-sm text-gray-500">Room: main-studio</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-semibold animate-pulse">
                        ● Live
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 bg-gray-100 dark:bg-zinc-900/50 rounded-3xl border border-white/20 overflow-hidden relative">
                <VideoGrid peers={peers} />
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-center gap-4 py-4">
                {/* ... existing controls ... */}
                <Button
                    variant={isAudioEnabled ? "secondary" : "danger"}
                    size="lg"
                    className="rounded-full shadow-md transition-all"
                    onClick={toggleAudio}
                >
                    {isAudioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </Button>
                <Button
                    variant={isVideoEnabled ? "secondary" : "danger"}
                    size="lg"
                    className="rounded-full shadow-md transition-all"
                    onClick={toggleVideo}
                >
                    {isVideoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>
                <Button
                    variant={isScreenSharing ? "danger" : "primary"}
                    size="lg"
                    className="rounded-full px-8 shadow-xl shadow-indigo-500/20"
                    onClick={isScreenSharing ? stopScreenShare : shareScreen}
                >
                    <MonitorUp className={`w-5 h-5 mr-2 ${isScreenSharing ? 'animate-pulse' : ''}`} />
                    {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
                </Button>
                <Button variant={isRecording ? 'danger' : 'secondary'} size="lg" className="rounded-full shadow-md transition-all" onClick={handleRecordToggle}>
                    <Circle className={`w-5 h-5 ${isRecording ? 'fill-current animate-pulse' : ''}`} />
                </Button>
                <Button variant="danger" size="lg" className="rounded-full shadow-md" onClick={handleLeave}>
                    <PhoneOff className="w-5 h-5 md:mr-2" /> <span className="hidden md:inline">Leave</span>
                </Button>
            </div>

            {/* Editor Section */}
            {!isRecording && recordedChunks.length > 0 && <Editor recordedChunks={recordedChunks} />}
        </div>
    );
}
