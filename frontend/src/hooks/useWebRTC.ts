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

export type ChatMessage = {
    id: string;
    userId: string;
    userName: string;
    message: string;
    timestamp: number;
};

export function useWebRTC(roomId: string, username: string) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [peers, setPeers] = useState<WebRTCStream[]>([]);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

    const peersRef = useRef<{ [key: string]: RTCPeerConnection }>({});
    const localStreamRef = useRef<MediaStream | null>(null);
    const socketRef = useRef<Socket | null>(null);

    const createPeer = useCallback((userId: string, initiator: boolean, stream: MediaStream, socket: Socket) => {
        const pc = new RTCPeerConnection(STUN_SERVERS);
        peersRef.current[userId] = pc;

        stream.getTracks().forEach(track => {
            pc.addTrack(track, stream);
        });

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('ice-candidate', {
                    roomId,
                    candidate: event.candidate,
                    to: userId,
                    from: socket.id
                });
            }
        };

        pc.ontrack = (event) => {
            console.log("Received remote track from", userId, "Track kind:", event.track.kind);
            setPeers(prev => {
                const existing = prev.find(p => p.id === userId);
                if (existing) {
                    console.log("Updating existing peer stream for", userId);
                    return prev.map(p => p.id === userId ? { ...p, stream: event.streams[0] } : p);
                }
                console.log("Adding new peer to state:", userId);
                return [...prev, { id: userId, stream: event.streams[0], isLocal: false }];
            });
        };

        if (initiator) {
            console.log('Creating OFFER for peer:', userId);
            pc.createOffer().then(offer => {
                console.log('Offer created, setting local description');
                return pc.setLocalDescription(offer);
            }).then(() => {
                console.log('Sending OFFER to:', userId);
                socket.emit('offer', {
                    roomId,
                    sdp: pc.localDescription,
                    to: userId,
                    from: socket.id
                });
            }).catch(err => {
                console.error('Error creating/sending offer:', err);
            });
        }

        return pc;
    }, [roomId]);

    const [error, setError] = useState<Error | null>(null);
    const [isConnected, setIsConnected] = useState(false);

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

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).then(stream => {
            if (!isMounted) {
                stream.getTracks().forEach(track => track.stop());
                return;
            }
            setLocalStream(stream);
            localStreamRef.current = stream;

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
                console.log('User disconnected:', userId);
                if (peersRef.current[userId]) {
                    peersRef.current[userId].close();
                    delete peersRef.current[userId];
                }
                setPeers(prev => prev.filter(p => p.id !== userId));
            });

            s.on('chat-message', (data: ChatMessage) => {
                console.log('Received chat message:', data);
                setChatMessages(prev => [...prev, data]);
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
            const screenTrack = localStreamRef.current.getVideoTracks()[0];
            if (screenTrack) {
                screenTrack.stop();
                localStreamRef.current.removeTrack(screenTrack);
            }

            try {
                const newStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                const newVideoTrack = newStream.getVideoTracks()[0];

                localStreamRef.current.addTrack(newVideoTrack);

                Object.values(peersRef.current).forEach(pc => {
                    const sender = pc.getSenders().find(s => s.track?.kind === 'video');
                    if (sender) {
                        sender.replaceTrack(newVideoTrack);
                    }
                });

                setIsScreenSharing(false);
                originalVideoTrackRef.current = null;

                setLocalStream(new MediaStream(localStreamRef.current.getTracks()));

            } catch (e) {
                console.error("Failed to restore camera", e);
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

    const sendMessage = useCallback((message: string) => {
        if (!socketRef.current) return;

        const chatMessage: ChatMessage = {
            id: Date.now().toString() + Math.random().toString(36),
            userId: socketRef.current.id || 'unknown',
            userName: username,
            message,
            timestamp: Date.now()
        };

        setChatMessages(prev => [...prev, chatMessage]);

        socketRef.current.emit('chat-message', { ...chatMessage, roomId });
    }, [roomId, username]);

    const allPeers = localStream
        ? [{ id: 'local', stream: localStream, isLocal: true }, ...peers]
        : peers;

    return {
        localStream,
        peers: allPeers,
        socket,
        error,
        toggleAudio,
        toggleVideo,
        isAudioEnabled,
        isVideoEnabled,
        shareScreen,
        stopScreenShare,
        isScreenSharing,
        isConnected,
        chatMessages,
        sendMessage
    };
}
