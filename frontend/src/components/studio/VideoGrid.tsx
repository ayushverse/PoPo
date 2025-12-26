'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { WebRTCStream } from '@/hooks/useWebRTC';

interface VideoGridProps {
    peers: WebRTCStream[];
}

export function VideoGrid({ peers }: VideoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full p-6">
            {peers.map((peer) => (
                <VideoPlayer key={peer.id} stream={peer.stream} isLocal={peer.isLocal} id={peer.id} />
            ))}
            {peers.length === 0 && (
                <div className="col-span-full flex items-center justify-center h-64 text-gray-400">
                    <p>Connecting to studio...</p>
                </div>
            )}
        </div>
    );
}

function VideoPlayer({ stream, isLocal, id }: { stream: MediaStream; isLocal?: boolean; id: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <Card className="relative overflow-hidden aspect-video p-0 bg-black border-none group">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted={isLocal} // Mute local to prevent feedback
                className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                {isLocal ? 'You' : `Peer ${id.substr(0, 4)}`}
            </div>
            {/* Audio Indicator (Simple visual) */}
            <div className="absolute top-4 right-4 bg-green-500/80 p-1.5 rounded-full" />
        </Card>
    );
}
