'use client';

import { useWebRTC } from '@/hooks/useWebRTC';
import { VideoGrid } from '@/components/studio/VideoGrid';
import { Editor } from '@/components/studio/Editor';
import { Chat } from '@/components/studio/Chat';
import { UsernameModal } from '@/components/studio/UsernameModal';
import { Button } from '@/components/ui/Button';
import { useRecorder } from '@/hooks/useRecorder';
import { Mic, Video, MonitorUp, PhoneOff, Circle, MicOff, VideoOff, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

/**
 * Main studio page for live podcast recording with WebRTC
 * Features: Multi-user video, screen sharing, recording, and real-time chat
 */
export default function StudioPage() {
    const router = useRouter();
    const [username, setUsername] = useState<string | null>(null);
    const [showChat, setShowChat] = useState(false);

    // Load saved username from localStorage on mount
    useEffect(() => {
        const savedUsername = localStorage.getItem('popo-username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleUsernameSubmit = (name: string) => {
        setUsername(name);
        localStorage.setItem('popo-username', name);
    };

    // Initialize WebRTC for real-time peer-to-peer connections
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
        isScreenSharing,
        chatMessages,
        sendMessage
    } = useWebRTC('main-studio', username || 'Anonymous');

    // Recorder hook for local recording of the stream
    const { isRecording, startRecording, stopRecording, recordedChunks } = useRecorder();

    // Show username modal if not set
    if (!username) {
        return <UsernameModal onSubmit={handleUsernameSubmit} />;
    }

    // Show error UI if media access failed
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

    // Toggle recording of local stream
    const handleRecordToggle = () => {
        if (isRecording) {
            stopRecording();
        } else {
            if (localStream) startRecording(localStream);
        }
    };

    const handleLeave = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] gap-4">
            <div className="flex items-center justify-between px-2">
                <div>
                    <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase">
                        Studio <span className="text-cyber-cyan">Interface</span>
                    </h1>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">[NODE: MAIN-STUDIO]</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="px-3 py-1 border border-cyber-pink/50 text-cyber-pink text-[10px] font-black uppercase tracking-[0.2em] animate-pulse bg-cyber-pink/10">
                        [TRANSMITTING]
                    </div>
                </div>
            </div>

            <div className="flex-1 flex gap-4 overflow-hidden">
                {/* Video Section */}
                <div className={`transition-all ${showChat ? 'flex-[3]' : 'flex-1'} bg-gray-100 dark:bg-zinc-900/50 rounded-3xl border border-white/20 overflow-hidden relative`}>
                    <VideoGrid peers={peers} />
                </div>

                {showChat && (
                    <div className="hidden md:flex md:flex-[1] h-full rounded-3xl overflow-hidden border border-white/20">
                        <Chat
                            messages={chatMessages}
                            onSendMessage={sendMessage}
                            currentUserId={socket?.id || ''}
                        />
                    </div>
                )}

                {showChat && (
                    <div className="md:hidden absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end">
                        <div className="w-full h-[70%] bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden">
                            <Chat
                                messages={chatMessages}
                                onSendMessage={sendMessage}
                                currentUserId={socket?.id || ''}
                            />
                            <button
                                onClick={() => setShowChat(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center justify-center gap-4 py-4">
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
                <Button
                    variant={showChat ? "primary" : "secondary"}
                    size="lg"
                    className="rounded-full shadow-md transition-all"
                    onClick={() => setShowChat(!showChat)}
                >
                    <MessageSquare className="w-5 h-5 md:mr-2" />
                    <span className="hidden md:inline">Chat</span>
                </Button>
                <Button variant="danger" size="lg" className="rounded-full shadow-md" onClick={handleLeave}>
                    <PhoneOff className="w-5 h-5 md:mr-2" /> <span className="hidden md:inline">Leave</span>
                </Button>
            </div>

            {!isRecording && recordedChunks.length > 0 && <Editor recordedChunks={recordedChunks} />}
        </div>
    );
}
