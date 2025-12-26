'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

const STUN_SERVERS = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478",
            ],
        },
    ],
};

export type WebRTCStream = {
    id: string;
    stream: MediaStream;
    isLocal?: boolean;
};

export function useWebRTC(roomId: string) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [peers, setPeers] = useState<WebRTCStream[]>([]);

    const peersRef = useRef<{ [key: string]: RTCPeerConnection }>({});
    const localStreamRef = useRef<MediaStream | null>(null);
    const socketRef = useRef<Socket | null>(null);

    // Helper to create a peer connection
    const createPeer = useCallback((userId: string, initiator: boolean, stream: MediaStream, socket: Socket) => {
        const pc = new RTCPeerConnection(STUN_SERVERS);
        peersRef.current[userId] = pc;

        // Add local tracks
        stream.getTracks().forEach(track => {
            pc.addTrack(track, stream);
        });

        // Handle ICE candidates
        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('ice-candidate', {
                    roomId,
                    candidate: event.candidate,
                    to: userId
                });
            }
        };

        // Handle remote stream
        pc.ontrack = (event) => {
            console.log("Received remote track from", userId, "Track kind:", event.track.kind);
            setPeers(prev => {
                const existing = prev.find(p => p.id === userId);
                if (existing) {
                    console.log("Updating existing peer stream for", userId);
                    // Update the existing peer with new stream
                    return prev.map(p => p.id === userId ? { ...p, stream: event.streams[0] } : p);
                }
                console.log("Adding new peer to state:", userId);
                return [...prev, { id: userId, stream: event.streams[0], isLocal: false }];
            });
        };

        // Create Offer
        if (initiator) {
            pc.createOffer().then(offer => {
                pc.setLocalDescription(offer);
                socket.emit('offer', {
                    roomId,
                    sdp: offer,
                    to: userId,
                    from: socket.id
                });
            });
        }

        return pc;
    }, [roomId]);

    const [error, setError] = useState<Error | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    // ... refs ...

    // Same createPeer ...

    useEffect(() => {
        let isMounted = true;
        const socketUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        console.log('Connecting to socket at:', socketUrl);

        const s = io(socketUrl, {
            path: '/socket.io',
            transports: ['websocket', 'polling']
        });
        setSocket(s);
        socketRef.current = s;

        // Socket Connection Handlers
        const onConnect = () => {
            console.log('Socket connected with ID:', s.id);
            console.log('Joining room:', roomId);
            setIsConnected(true);
            s.emit('join-room', roomId, s.id);
        };

        const onDisconnect = () => {
            console.log('Socket disconnected');
            setIsConnected(false);
        };

        if (s.connected) {
            onConnect();
        } else {
            s.on('connect', onConnect);
        }

        s.on('disconnect', onDisconnect);

        // Get Local Media
        // Try with simple constraints first
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true // Removed 1280x720 constraint to rule out hardware incompatibility
        }).then(stream => {
            if (!isMounted) {
                stream.getTracks().forEach(track => track.stop());
                return;
            }
            setLocalStream(stream);
            localStreamRef.current = stream;
            // ... (rest of logic same) ...

            // REMOVED: setPeers(prev => [...prev, { id: 'local', stream: stream, isLocal: true }]);
            // We shouldn't add local stream to 'peers' state to avoid duplicates and sync issues.
            // We will combine it in the hook return.

            // Handled by onConnect above

            // Socket Events
            s.on('user-connected', (userId: string) => {
                console.log('User connected event received for:', userId);
                console.log('I am initiator, creating peer...');
                createPeer(userId, true, stream, s);
            });

            s.on('offer', async (data) => {
                console.log('Received OFFER from:', data.from);
                const pc = createPeer(data.from, false, stream, s);
                await pc.setRemoteDescription(new RTCSessionDescription(data.sdp));
                console.log('Remote description set (Offer)');

                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                console.log('Sending ANSWER to:', data.from);
                s.emit('answer', { roomId, sdp: answer, to: data.from, from: s.id });
            });

            s.on('answer', async (data) => {
                console.log('Received ANSWER from:', data.from);
                const pc = peersRef.current[data.from];
                if (pc) {
                    await pc.setRemoteDescription(new RTCSessionDescription(data.sdp));
                    console.log('Remote description set (Answer)');
                } else {
                    console.warn('Received Answer for unknown peer:', data.from);
                }
            });

            s.on('ice-candidate', async (data) => {
                const pc = peersRef.current[data.from];
                if (pc && data.candidate) await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
            });

            s.on('user-disconnected', (userId: string) => {
                if (peersRef.current[userId]) {
                    peersRef.current[userId].close();
                    delete peersRef.current[userId];
                }
                setPeers(prev => prev.filter(p => p.id !== userId));
            });

        }).catch(err => {
            console.error("Failed to get local media", err);
            setError(err);
        });

        return () => {
            s.disconnect();
            localStreamRef.current?.getTracks().forEach(t => t.stop());
            Object.values(peersRef.current).forEach(pc => pc.close());
        };
    }, [roomId, createPeer]);

    const [isAudioEnabled, setIsAudioEnabled] = useState(true);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);

    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const originalVideoTrackRef = useRef<MediaStreamTrack | null>(null);

    const toggleAudio = useCallback(() => {
        if (localStreamRef.current) {
            const audioTrack = localStreamRef.current.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsAudioEnabled(audioTrack.enabled);
            }
        }
    }, []);

    const toggleVideo = useCallback(() => {
        if (localStreamRef.current) {
            const videoTrack = localStreamRef.current.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoEnabled(videoTrack.enabled);
            }
        }
    }, []);

    const stopScreenShare = useCallback(async () => {
        if (localStreamRef.current) {
            // 1. Stop the screen share track to ensure the browser UI updates
            const screenTrack = localStreamRef.current.getVideoTracks()[0];
            if (screenTrack) {
                screenTrack.stop();
                localStreamRef.current.removeTrack(screenTrack);
            }

            try {
                // 2. Re-acquire the camera stream
                const newStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                const newVideoTrack = newStream.getVideoTracks()[0];

                // 3. Add the new camera track to the local stream
                localStreamRef.current.addTrack(newVideoTrack);

                // 4. Update all peer connections to send the new track
                Object.values(peersRef.current).forEach(pc => {
                    const sender = pc.getSenders().find(s => s.track?.kind === 'video');
                    if (sender) {
                        sender.replaceTrack(newVideoTrack);
                    }
                });

                // 5. Update state
                setIsScreenSharing(false);
                originalVideoTrackRef.current = null;

                // 6. Force UI update by creating a new MediaStream reference
                // This ensures the video element srcObject gets refreshed
                setLocalStream(new MediaStream(localStreamRef.current.getTracks()));

            } catch (e) {
                console.error("Failed to restore camera", e);
                // Fallback: Just update state so UI isn't stuck in "sharing" mode
                setIsScreenSharing(false);
            }
        }
    }, [roomId]);


    const shareScreen = useCallback(async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: false
            });
            const screenTrack = screenStream.getVideoTracks()[0];

            if (localStreamRef.current) {
                const currentVideoTrack = localStreamRef.current.getVideoTracks()[0];
                if (currentVideoTrack) {
                    originalVideoTrackRef.current = currentVideoTrack;
                    currentVideoTrack.stop();
                    localStreamRef.current.removeTrack(currentVideoTrack);
                    localStreamRef.current.addTrack(screenTrack);

                    Object.values(peersRef.current).forEach(pc => {
                        const sender = pc.getSenders().find(s => s.track?.kind === 'video');
                        if (sender) {
                            sender.replaceTrack(screenTrack);
                        }
                    });

                    screenTrack.onended = () => {
                        stopScreenShare();
                    };

                    setIsScreenSharing(true);
                    setLocalStream(new MediaStream(localStreamRef.current.getTracks()));
                }
            }
        } catch (err) {
            console.error("Failed to share screen", err);
        }
    }, [stopScreenShare]);

    // Combine local stream with remote peers for the UI
    const allPeers = localStream
        ? [{ id: 'local', stream: localStream, isLocal: true }, ...peers]
        : peers;

    return { localStream, peers: allPeers, socket, error, toggleAudio, toggleVideo, isAudioEnabled, isVideoEnabled, shareScreen, stopScreenShare, isScreenSharing, isConnected };
}
