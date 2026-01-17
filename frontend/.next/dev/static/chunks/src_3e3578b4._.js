(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useWebRTC.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebRTC",
    ()=>useWebRTC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const STUN_SERVERS = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478"
            ]
        }
    ]
};
function useWebRTC(roomId, username) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "a239db89b7941de5a4a267c82172191e3de4f59c9845280feda62f0cff76b697") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a239db89b7941de5a4a267c82172191e3de4f59c9845280feda62f0cff76b697";
    }
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localStream, setLocalStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [peers, setPeers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const peersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[4] !== roomId) {
        t3 = ({
            "useWebRTC[createPeer]": (userId, initiator, stream, socket_0)=>{
                const pc = new RTCPeerConnection(STUN_SERVERS);
                peersRef.current[userId] = pc;
                stream.getTracks().forEach({
                    "useWebRTC[createPeer > (anonymous)()]": (track)=>{
                        pc.addTrack(track, stream);
                    }
                }["useWebRTC[createPeer > (anonymous)()]"]);
                pc.onicecandidate = (event)=>{
                    if (event.candidate) {
                        socket_0.emit("ice-candidate", {
                            roomId,
                            candidate: event.candidate,
                            to: userId,
                            from: socket_0.id
                        });
                    }
                };
                pc.ontrack = (event_0)=>{
                    console.log("Received remote track from", userId, "Track kind:", event_0.track.kind);
                    setPeers({
                        "useWebRTC[createPeer > <anonymous> > setPeers()]": (prev)=>{
                            const existing = prev.find({
                                "useWebRTC[createPeer > <anonymous> > setPeers() > prev.find()]": (p)=>p.id === userId
                            }["useWebRTC[createPeer > <anonymous> > setPeers() > prev.find()]"]);
                            if (existing) {
                                console.log("Updating existing peer stream for", userId);
                                return prev.map({
                                    "useWebRTC[createPeer > <anonymous> > setPeers() > prev.map()]": (p_0)=>p_0.id === userId ? {
                                            ...p_0,
                                            stream: event_0.streams[0]
                                        } : p_0
                                }["useWebRTC[createPeer > <anonymous> > setPeers() > prev.map()]"]);
                            }
                            console.log("Adding new peer to state:", userId);
                            return [
                                ...prev,
                                {
                                    id: userId,
                                    stream: event_0.streams[0],
                                    isLocal: false
                                }
                            ];
                        }
                    }["useWebRTC[createPeer > <anonymous> > setPeers()]"]);
                };
                if (initiator) {
                    console.log("Creating OFFER for peer:", userId);
                    pc.createOffer().then({
                        "useWebRTC[createPeer > (anonymous)()]": (offer)=>{
                            console.log("Offer created, setting local description");
                            return pc.setLocalDescription(offer);
                        }
                    }["useWebRTC[createPeer > (anonymous)()]"]).then({
                        "useWebRTC[createPeer > (anonymous)()]": ()=>{
                            console.log("Sending OFFER to:", userId);
                            socket_0.emit("offer", {
                                roomId,
                                sdp: pc.localDescription,
                                to: userId,
                                from: socket_0.id
                            });
                        }
                    }["useWebRTC[createPeer > (anonymous)()]"]).catch(_useWebRTCCreatePeerAnonymous);
                }
                return pc;
            }
        })["useWebRTC[createPeer]"];
        $[4] = roomId;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const createPeer = t3;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    let t5;
    if ($[6] !== createPeer || $[7] !== roomId) {
        t4 = ({
            "useWebRTC[useEffect()]": ()=>{
                const socketUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
                console.log("Connecting to socket at:", socketUrl);
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(socketUrl, {
                    path: "/socket.io",
                    transports: [
                        "websocket",
                        "polling"
                    ]
                });
                setSocket(s);
                socketRef.current = s;
                const onConnect = {
                    "useWebRTC[useEffect() > onConnect]": ()=>{
                        console.log("Socket connected with ID:", s.id);
                        console.log("Joining room:", roomId);
                        setIsConnected(true);
                        s.emit("join-room", roomId, s.id);
                    }
                }["useWebRTC[useEffect() > onConnect]"];
                const onDisconnect = {
                    "useWebRTC[useEffect() > onDisconnect]": ()=>{
                        console.log("Socket disconnected");
                        setIsConnected(false);
                    }
                }["useWebRTC[useEffect() > onDisconnect]"];
                if (s.connected) {
                    onConnect();
                } else {
                    s.on("connect", onConnect);
                }
                s.on("disconnect", onDisconnect);
                navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                }).then({
                    "useWebRTC[useEffect() > (anonymous)()]": (stream_0)=>{
                        setLocalStream(stream_0);
                        localStreamRef.current = stream_0;
                        s.on("user-connected", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": (userId_0)=>{
                                console.log("User connected event received for:", userId_0);
                                console.log("I am initiator, creating peer...");
                                createPeer(userId_0, true, stream_0, s);
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                        s.on("offer", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": async (data)=>{
                                console.log("Received OFFER from:", data.from);
                                const pc_0 = createPeer(data.from, false, stream_0, s);
                                await pc_0.setRemoteDescription(new RTCSessionDescription(data.sdp));
                                console.log("Remote description set (Offer)");
                                const answer = await pc_0.createAnswer();
                                await pc_0.setLocalDescription(answer);
                                console.log("Sending ANSWER to:", data.from);
                                s.emit("answer", {
                                    roomId,
                                    sdp: answer,
                                    to: data.from,
                                    from: s.id
                                });
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                        s.on("answer", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": async (data_0)=>{
                                console.log("Received ANSWER from:", data_0.from);
                                const pc_1 = peersRef.current[data_0.from];
                                if (pc_1) {
                                    await pc_1.setRemoteDescription(new RTCSessionDescription(data_0.sdp));
                                    console.log("Remote description set (Answer)");
                                } else {
                                    console.warn("Received Answer for unknown peer:", data_0.from);
                                }
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                        s.on("ice-candidate", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": async (data_1)=>{
                                const pc_2 = peersRef.current[data_1.from];
                                if (pc_2 && data_1.candidate) {
                                    await pc_2.addIceCandidate(new RTCIceCandidate(data_1.candidate));
                                }
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                        s.on("user-disconnected", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": (userId_1)=>{
                                console.log("User disconnected:", userId_1);
                                if (peersRef.current[userId_1]) {
                                    peersRef.current[userId_1].close();
                                    delete peersRef.current[userId_1];
                                }
                                setPeers({
                                    "useWebRTC[useEffect() > (anonymous)() > s.on() > setPeers()]": (prev_0)=>prev_0.filter({
                                            "useWebRTC[useEffect() > (anonymous)() > s.on() > setPeers() > prev_0.filter()]": (p_1)=>p_1.id !== userId_1
                                        }["useWebRTC[useEffect() > (anonymous)() > s.on() > setPeers() > prev_0.filter()]"])
                                }["useWebRTC[useEffect() > (anonymous)() > s.on() > setPeers()]"]);
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                        s.on("chat-message", {
                            "useWebRTC[useEffect() > (anonymous)() > s.on()]": (data_2)=>{
                                console.log("Received chat message:", data_2);
                                setChatMessages({
                                    "useWebRTC[useEffect() > (anonymous)() > s.on() > setChatMessages()]": (prev_1)=>[
                                            ...prev_1,
                                            data_2
                                        ]
                                }["useWebRTC[useEffect() > (anonymous)() > s.on() > setChatMessages()]"]);
                            }
                        }["useWebRTC[useEffect() > (anonymous)() > s.on()]"]);
                    }
                }["useWebRTC[useEffect() > (anonymous)()]"]).catch({
                    "useWebRTC[useEffect() > (anonymous)()]": (err_0)=>{
                        console.error("Failed to get local media", err_0);
                        setError(err_0);
                    }
                }["useWebRTC[useEffect() > (anonymous)()]"]);
                return ()=>{
                    s.disconnect();
                    localStreamRef.current?.getTracks().forEach(_useWebRTCUseEffectAnonymousAnonymous);
                    Object.values(peersRef.current).forEach(_useWebRTCUseEffectAnonymousAnonymous2);
                };
            }
        })["useWebRTC[useEffect()]"];
        t5 = [
            roomId,
            createPeer
        ];
        $[6] = createPeer;
        $[7] = roomId;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const [isAudioEnabled, setIsAudioEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVideoEnabled, setIsVideoEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const originalVideoTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "useWebRTC[toggleAudio]": ()=>{
                if (localStreamRef.current) {
                    const audioTrack = localStreamRef.current.getAudioTracks()[0];
                    if (audioTrack) {
                        audioTrack.enabled = !audioTrack.enabled;
                        setIsAudioEnabled(audioTrack.enabled);
                    }
                }
            }
        })["useWebRTC[toggleAudio]"];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const toggleAudio = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "useWebRTC[toggleVideo]": ()=>{
                if (localStreamRef.current) {
                    const videoTrack = localStreamRef.current.getVideoTracks()[0];
                    if (videoTrack) {
                        videoTrack.enabled = !videoTrack.enabled;
                        setIsVideoEnabled(videoTrack.enabled);
                    }
                }
            }
        })["useWebRTC[toggleVideo]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const toggleVideo = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "useWebRTC[stopScreenShare]": async ()=>{
                if (localStreamRef.current) {
                    const screenTrack = localStreamRef.current.getVideoTracks()[0];
                    if (screenTrack) {
                        screenTrack.stop();
                        localStreamRef.current.removeTrack(screenTrack);
                    }
                    ;
                    try {
                        const newStream = await navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: true
                        });
                        const newVideoTrack = newStream.getVideoTracks()[0];
                        localStreamRef.current.addTrack(newVideoTrack);
                        Object.values(peersRef.current).forEach({
                            "useWebRTC[stopScreenShare > (anonymous)()]": (pc_4)=>{
                                const sender = pc_4.getSenders().find(_useWebRTCStopScreenShareAnonymousAnonymous);
                                if (sender) {
                                    sender.replaceTrack(newVideoTrack);
                                }
                            }
                        }["useWebRTC[stopScreenShare > (anonymous)()]"]);
                        setIsScreenSharing(false);
                        originalVideoTrackRef.current = null;
                        setLocalStream(new MediaStream(localStreamRef.current.getTracks()));
                    } catch (t9) {
                        const e = t9;
                        console.error("Failed to restore camera", e);
                        setIsScreenSharing(false);
                    }
                }
            }
        })["useWebRTC[stopScreenShare]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const stopScreenShare = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "useWebRTC[shareScreen]": async ()=>{
                ;
                try {
                    const screenStream = await navigator.mediaDevices.getDisplayMedia({
                        video: true,
                        audio: false
                    });
                    const screenTrack_0 = screenStream.getVideoTracks()[0];
                    if (localStreamRef.current) {
                        const currentVideoTrack = localStreamRef.current.getVideoTracks()[0];
                        if (currentVideoTrack) {
                            originalVideoTrackRef.current = currentVideoTrack;
                            currentVideoTrack.stop();
                            localStreamRef.current.removeTrack(currentVideoTrack);
                            localStreamRef.current.addTrack(screenTrack_0);
                            Object.values(peersRef.current).forEach({
                                "useWebRTC[shareScreen > (anonymous)()]": (pc_5)=>{
                                    const sender_0 = pc_5.getSenders().find(_useWebRTCShareScreenAnonymousAnonymous);
                                    if (sender_0) {
                                        sender_0.replaceTrack(screenTrack_0);
                                    }
                                }
                            }["useWebRTC[shareScreen > (anonymous)()]"]);
                            screenTrack_0.onended = ()=>{
                                stopScreenShare();
                            };
                            setIsScreenSharing(true);
                            setLocalStream(new MediaStream(localStreamRef.current.getTracks()));
                        }
                    }
                } catch (t10) {
                    const err_1 = t10;
                    console.error("Failed to share screen", err_1);
                }
            }
        })["useWebRTC[shareScreen]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const shareScreen = t9;
    let t10;
    if ($[14] !== roomId || $[15] !== username) {
        t10 = ({
            "useWebRTC[sendMessage]": (message)=>{
                if (!socketRef.current) {
                    return;
                }
                const chatMessage = {
                    id: Date.now().toString() + Math.random().toString(36),
                    userId: socketRef.current.id || "unknown",
                    userName: username,
                    message,
                    timestamp: Date.now()
                };
                setChatMessages({
                    "useWebRTC[sendMessage > setChatMessages()]": (prev_2)=>[
                            ...prev_2,
                            chatMessage
                        ]
                }["useWebRTC[sendMessage > setChatMessages()]"]);
                socketRef.current.emit("chat-message", {
                    ...chatMessage,
                    roomId
                });
            }
        })["useWebRTC[sendMessage]"];
        $[14] = roomId;
        $[15] = username;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    const sendMessage = t10;
    let t11;
    if ($[17] !== localStream || $[18] !== peers) {
        t11 = localStream ? [
            {
                id: "local",
                stream: localStream,
                isLocal: true
            },
            ...peers
        ] : peers;
        $[17] = localStream;
        $[18] = peers;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const allPeers = t11;
    let t12;
    if ($[20] !== allPeers || $[21] !== chatMessages || $[22] !== error || $[23] !== isAudioEnabled || $[24] !== isConnected || $[25] !== isScreenSharing || $[26] !== isVideoEnabled || $[27] !== localStream || $[28] !== sendMessage || $[29] !== socket) {
        t12 = {
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
        $[20] = allPeers;
        $[21] = chatMessages;
        $[22] = error;
        $[23] = isAudioEnabled;
        $[24] = isConnected;
        $[25] = isScreenSharing;
        $[26] = isVideoEnabled;
        $[27] = localStream;
        $[28] = sendMessage;
        $[29] = socket;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    return t12;
}
_s(useWebRTC, "afxwdqAKgG4Xh5b7cRbLAu/NV3o=");
function _useWebRTCShareScreenAnonymousAnonymous(s_1) {
    return s_1.track?.kind === "video";
}
function _useWebRTCStopScreenShareAnonymousAnonymous(s_0) {
    return s_0.track?.kind === "video";
}
function _useWebRTCUseEffectAnonymousAnonymous2(pc_3) {
    return pc_3.close();
}
function _useWebRTCUseEffectAnonymousAnonymous(t) {
    return t.stop();
}
function _useWebRTCCreatePeerAnonymous(err) {
    console.error("Error creating/sending offer:", err);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "bd282b8ff103b5c628b99310587fd2c23bd3fbc46f6729e05be92f9872beda20") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd282b8ff103b5c628b99310587fd2c23bd3fbc46f6729e05be92f9872beda20";
    }
    let children;
    let className;
    let isCyber;
    let props;
    if ($[1] !== t0) {
        ({ className, children, isCyber, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = isCyber;
        $[5] = props;
    } else {
        children = $[2];
        className = $[3];
        isCyber = $[4];
        props = $[5];
    }
    let t1;
    let t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 20
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            once: true
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
    }
    const t4 = isCyber ? "bg-cyber-black/90 border-cyber-cyan/50 cyber-border p-8" : "bg-zinc-900/80 border-white/5 rounded-2xl p-6";
    let t5;
    if ($[9] !== className || $[10] !== t4) {
        t5 = cn("backdrop-blur-xl border transition-all duration-500", t4, className);
        $[9] = className;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== children || $[13] !== props || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            whileInView: t2,
            viewport: t3,
            className: t5,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = children;
        $[13] = props;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/studio/VideoGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoGrid",
    ()=>VideoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VideoGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "0fee5c67c50bf9627baab3a74274ce6824742c62792c10f14e7c1d7aeed53516") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0fee5c67c50bf9627baab3a74274ce6824742c62792c10f14e7c1d7aeed53516";
    }
    const { peers } = t0;
    let t1;
    if ($[1] !== peers) {
        t1 = peers.map(_VideoGridPeersMap);
        $[1] = peers;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== peers.length) {
        t2 = peers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-full flex items-center justify-center h-64 text-gray-400",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Connecting to studio..."
            }, void 0, false, {
                fileName: "[project]/src/components/studio/VideoGrid.tsx",
                lineNumber: 33,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 33,
            columnNumber: 32
        }, this);
        $[3] = peers.length;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full p-6",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = VideoGrid;
function _VideoGridPeersMap(peer) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoPlayer, {
        stream: peer.stream,
        isLocal: peer.isLocal,
        id: peer.id
    }, peer.id, false, {
        fileName: "[project]/src/components/studio/VideoGrid.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
function VideoPlayer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "0fee5c67c50bf9627baab3a74274ce6824742c62792c10f14e7c1d7aeed53516") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0fee5c67c50bf9627baab3a74274ce6824742c62792c10f14e7c1d7aeed53516";
    }
    const { stream, isLocal, id } = t0;
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== stream) {
        t1 = ({
            "VideoPlayer[useEffect()]": ()=>{
                if (videoRef.current && stream) {
                    videoRef.current.srcObject = stream;
                }
            }
        })["VideoPlayer[useEffect()]"];
        t2 = [
            stream
        ];
        $[1] = stream;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== isLocal) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: videoRef,
            autoPlay: true,
            playsInline: true,
            muted: isLocal,
            className: "w-full h-full object-cover rounded-xl"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[4] = isLocal;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== id || $[8] !== isLocal) {
        t5 = isLocal ? "You" : `Peer ${id.substr(0, 4)}`;
        $[7] = id;
        $[8] = isLocal;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 bg-green-500/80 p-1.5 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t3 || $[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "relative overflow-hidden aspect-video p-0 bg-black border-none group",
            children: [
                t3,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/VideoGrid.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(VideoPlayer, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c1 = VideoPlayer;
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoGrid");
__turbopack_context__.k.register(_c1, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useFFmpeg.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFFmpeg",
    ()=>useFFmpeg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useFFmpeg() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ffmpegRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFmpeg"]());
    const messageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const load = async ()=>{
        setIsLoading(true);
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on('log', ({ message })=>{
            console.log(message);
            if (messageRef.current) messageRef.current.innerHTML = message;
        });
        try {
            await ffmpeg.load({
                coreURL: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                wasmURL: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm')
            });
            setLoaded(true);
        } catch (error) {
            console.error("FFmpeg load failed:", error);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFFmpeg.useEffect": ()=>{
            load();
        }
    }["useFFmpeg.useEffect"], []);
    return {
        ffmpeg: ffmpegRef.current,
        loaded,
        isLoading,
        messageRef
    };
}
_s(useFFmpeg, "v6hxMDQX6wNlIhRKdnWu7KFY1Lw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "0a07d9d6c451f2725bd9d6cc8bca0d187eeebe09aa9bd515d03e9ca3f9e173fd") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a07d9d6c451f2725bd9d6cc8bca0d187eeebe09aa9bd515d03e9ca3f9e173fd";
    }
    let children;
    let className;
    let disabled;
    let isLoading;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, isLoading, children, disabled, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = disabled;
        $[5] = isLoading;
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        children = $[2];
        className = $[3];
        disabled = $[4];
        isLoading = $[5];
        props = $[6];
        t1 = $[7];
        t2 = $[8];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    let T0;
    let t3;
    let t4;
    let t5;
    if ($[9] !== className || $[10] !== size || $[11] !== variant) {
        const variants = {
            primary: "bg-cyber-cyan text-cyber-black hover:bg-white shadow-[0_0_15px_rgba(0,255,255,0.5)]",
            secondary: "bg-transparent text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10",
            ghost: "bg-transparent hover:bg-cyber-cyan/5 text-gray-300",
            danger: "bg-cyber-pink text-white hover:bg-pink-400 shadow-[0_0_15px_rgba(255,0,255,0.5)]",
            cyber: "bg-cyber-yellow text-cyber-black hover:bg-white cyber-button-clip font-black italic uppercase tracking-tighter"
        };
        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-8 py-3.5 text-base"
        };
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button;
        const t6 = variant === "cyber" ? 5 : 0;
        if ($[16] !== t6) {
            t3 = {
                scale: 1.02,
                x: t6
            };
            $[16] = t6;
            $[17] = t3;
        } else {
            t3 = $[17];
        }
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = {
                scale: 0.98
            };
            $[18] = t4;
        } else {
            t4 = $[18];
        }
        t5 = cn("inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", variant === "cyber" ? "" : "rounded-xl", variants[variant], sizes[size], className);
        $[9] = className;
        $[10] = size;
        $[11] = variant;
        $[12] = T0;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        T0 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
    }
    const t6 = disabled || isLoading;
    let t7;
    if ($[19] !== isLoading) {
        t7 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-4 h-4 mr-2 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 116,
            columnNumber: 23
        }, this);
        $[19] = isLoading;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== T0 || $[22] !== children || $[23] !== props || $[24] !== t3 || $[25] !== t4 || $[26] !== t5 || $[27] !== t6 || $[28] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            whileHover: t3,
            whileTap: t4,
            className: t5,
            disabled: t6,
            ...props,
            children: [
                t7,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[21] = T0;
        $[22] = children;
        $[23] = props;
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    return t8;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:91b8b9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processVideoWithGemini",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"780bb8cd47a9182c7f58c797ab2b2146c81b3baeee":"processVideoWithGemini"},"src/app/actions/gemini.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("780bb8cd47a9182c7f58c797ab2b2146c81b3baeee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "processVideoWithGemini");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gJ0Bnb29nbGUvZ2VuZXJhdGl2ZS1haSc7XHJcbmltcG9ydCB7IEdvb2dsZUFJRmlsZU1hbmFnZXIgfSBmcm9tICdAZ29vZ2xlL2dlbmVyYXRpdmUtYWkvc2VydmVyJztcclxuaW1wb3J0IHsgd3JpdGVGaWxlLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVUb1RlbXAoYnVmZmVyOiBCdWZmZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBgdXBsb2FkLSR7dXVpZHY0KCl9LndlYm1gO1xyXG4gICAgY29uc3QgZmlsZXBhdGggPSBqb2luKHRtcGRpcigpLCBmaWxlbmFtZSk7XHJcbiAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZXBhdGgsIGJ1ZmZlcik7XHJcbiAgICByZXR1cm4gZmlsZXBhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVmlkZW9XaXRoR2VtaW5pKGZvcm1EYXRhOiBGb3JtRGF0YSwgYXBpS2V5OiBzdHJpbmcsIG1vZGVsTmFtZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZykge1xyXG4gICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIkFQSSBLZXkgaXMgcmVxdWlyZWRcIik7XHJcblxyXG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XHJcbiAgICBpZiAoIWZpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgdXBsb2FkZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBHb29nbGVBSUZpbGVNYW5hZ2VyKGFwaUtleSk7XHJcbiAgICAgICAgY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcclxuICAgICAgICBjb25zdCB0ZW1wUGF0aCA9IGF3YWl0IHNhdmVUb1RlbXAoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlsZU1hbmFnZXIudXBsb2FkRmlsZSh0ZW1wUGF0aCwge1xyXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R1ZGlvIFJlY29yZGluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZmlsZVN0YXRlID0gYXdhaXQgZmlsZU1hbmFnZXIuZ2V0RmlsZSh1cGxvYWRSZXN1bHQuZmlsZS5uYW1lKTtcclxuICAgICAgICB3aGlsZSAoZmlsZVN0YXRlLnN0YXRlID09PSAnUFJPQ0VTU0lORycpIHtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcclxuICAgICAgICAgICAgZmlsZVN0YXRlID0gYXdhaXQgZmlsZU1hbmFnZXIuZ2V0RmlsZSh1cGxvYWRSZXN1bHQuZmlsZS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWxlU3RhdGUuc3RhdGUgPT09ICdGQUlMRUQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZpZGVvIHByb2Nlc3NpbmcgZmFpbGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IG1vZGVsTmFtZSB8fCBcImdlbWluaS0xLjUtZmxhc2gtbGF0ZXN0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxlRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVVcmk6IHVwbG9hZFJlc3VsdC5maWxlLnVyaSxcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogdXBsb2FkUmVzdWx0LmZpbGUubWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBhd2FpdCB1bmxpbmsodGVtcFBhdGgpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIlRlbXAgY2xlYW51cCBmYWlsZWRcIiwgZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdlbWluaSBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQUkgcHJvY2Vzc2luZyBmYWlsZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0R2VtaW5pTW9kZWxzKGFwaUtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFwaUtleSkgcmV0dXJuIFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhL21vZGVscz9rZXk9JHthcGlLZXl9YCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxpc3QgbW9kZWxzXCIsIGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1vZGVscykgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YS5tb2RlbHNcclxuICAgICAgICAgICAgLmZpbHRlcigobTogYW55KSA9PiBtLnN1cHBvcnRlZEdlbmVyYXRpb25NZXRob2RzPy5pbmNsdWRlcyhcImdlbmVyYXRlQ29udGVudFwiKSlcclxuICAgICAgICAgICAgLm1hcCgobTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbS5uYW1lLnJlcGxhY2UoJ21vZGVscy8nLCAnJyksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogbS5kaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMaXN0IE1vZGVscyBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQWdCc0IsbU1BQUEifQ==
}),
"[project]/src/app/actions/data:52c237 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listGeminiModels",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40da9516a8b8e8f65d3543c5b611608364e0bb0e47":"listGeminiModels"},"src/app/actions/gemini.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40da9516a8b8e8f65d3543c5b611608364e0bb0e47", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "listGeminiModels");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gJ0Bnb29nbGUvZ2VuZXJhdGl2ZS1haSc7XHJcbmltcG9ydCB7IEdvb2dsZUFJRmlsZU1hbmFnZXIgfSBmcm9tICdAZ29vZ2xlL2dlbmVyYXRpdmUtYWkvc2VydmVyJztcclxuaW1wb3J0IHsgd3JpdGVGaWxlLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVUb1RlbXAoYnVmZmVyOiBCdWZmZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBgdXBsb2FkLSR7dXVpZHY0KCl9LndlYm1gO1xyXG4gICAgY29uc3QgZmlsZXBhdGggPSBqb2luKHRtcGRpcigpLCBmaWxlbmFtZSk7XHJcbiAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZXBhdGgsIGJ1ZmZlcik7XHJcbiAgICByZXR1cm4gZmlsZXBhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzVmlkZW9XaXRoR2VtaW5pKGZvcm1EYXRhOiBGb3JtRGF0YSwgYXBpS2V5OiBzdHJpbmcsIG1vZGVsTmFtZTogc3RyaW5nLCBwcm9tcHQ6IHN0cmluZykge1xyXG4gICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIkFQSSBLZXkgaXMgcmVxdWlyZWRcIik7XHJcblxyXG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XHJcbiAgICBpZiAoIWZpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgdXBsb2FkZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBHb29nbGVBSUZpbGVNYW5hZ2VyKGFwaUtleSk7XHJcbiAgICAgICAgY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcclxuICAgICAgICBjb25zdCB0ZW1wUGF0aCA9IGF3YWl0IHNhdmVUb1RlbXAoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlsZU1hbmFnZXIudXBsb2FkRmlsZSh0ZW1wUGF0aCwge1xyXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R1ZGlvIFJlY29yZGluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZmlsZVN0YXRlID0gYXdhaXQgZmlsZU1hbmFnZXIuZ2V0RmlsZSh1cGxvYWRSZXN1bHQuZmlsZS5uYW1lKTtcclxuICAgICAgICB3aGlsZSAoZmlsZVN0YXRlLnN0YXRlID09PSAnUFJPQ0VTU0lORycpIHtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcclxuICAgICAgICAgICAgZmlsZVN0YXRlID0gYXdhaXQgZmlsZU1hbmFnZXIuZ2V0RmlsZSh1cGxvYWRSZXN1bHQuZmlsZS5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWxlU3RhdGUuc3RhdGUgPT09ICdGQUlMRUQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZpZGVvIHByb2Nlc3NpbmcgZmFpbGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IG1vZGVsTmFtZSB8fCBcImdlbWluaS0xLjUtZmxhc2gtbGF0ZXN0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxlRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVVcmk6IHVwbG9hZFJlc3VsdC5maWxlLnVyaSxcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogdXBsb2FkUmVzdWx0LmZpbGUubWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBhd2FpdCB1bmxpbmsodGVtcFBhdGgpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIlRlbXAgY2xlYW51cCBmYWlsZWRcIiwgZSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdlbWluaSBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlIHx8IFwiQUkgcHJvY2Vzc2luZyBmYWlsZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0R2VtaW5pTW9kZWxzKGFwaUtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFwaUtleSkgcmV0dXJuIFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhL21vZGVscz9rZXk9JHthcGlLZXl9YCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxpc3QgbW9kZWxzXCIsIGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1vZGVscykgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YS5tb2RlbHNcclxuICAgICAgICAgICAgLmZpbHRlcigobTogYW55KSA9PiBtLnN1cHBvcnRlZEdlbmVyYXRpb25NZXRob2RzPy5pbmNsdWRlcyhcImdlbmVyYXRlQ29udGVudFwiKSlcclxuICAgICAgICAgICAgLm1hcCgobTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbS5uYW1lLnJlcGxhY2UoJ21vZGVscy8nLCAnJyksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogbS5kaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMaXN0IE1vZGVscyBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQWtFc0IsNkxBQUEifQ==
}),
"[project]/src/components/studio/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAssistant",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$91b8b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:91b8b9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$52c237__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:52c237 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AIAssistant({ recordedChunks }) {
    _s();
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showKeyInput, setShowKeyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('gemini-1.5-flash-002');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('summary');
    const [availableModels, setAvailableModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Fetch available Gemini models when API key changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistant.useEffect": ()=>{
            const key = apiKey || ("TURBOPACK compile-time value", "AIzaSyDG1-o8YoVcu8XpYJuOnTk1TohfL30egbs");
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$52c237__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["listGeminiModels"])(key).then({
                    "AIAssistant.useEffect": (models)=>{
                        if (models.length > 0) {
                            setAvailableModels(models);
                        }
                    }
                }["AIAssistant.useEffect"]);
            }
        }
    }["AIAssistant.useEffect"], [
        apiKey
    ]);
    /**
   * Process video with Gemini AI for show notes or clip identification
   * @param type - 'summary' for show notes, 'clips' for viral clip suggestions
   */ const handleAction = async (type)=>{
        // Ensure API key is available before processing
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setLoading(true);
        setResult(null);
        setActiveTab(type);
        const key_0 = apiKey || ("TURBOPACK compile-time value", "AIzaSyDG1-o8YoVcu8XpYJuOnTk1TohfL30egbs") || '';
        // Create appropriate prompt based on requested action type
        const prompt = type === 'summary' ? "Generate a catchy Title, a short abstract/summary for social media, and 5 hashtags for this video." : "Analyze this video and identify 3 potential viral highlight clips. Return JSON format with { start: 'MM:SS', end: 'MM:SS', description: 'string' } for each clip.";
        try {
            // Combine recorded chunks into a single video blob
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            const formData = new FormData();
            formData.append('file', blob, 'recording.webm');
            // Send to Gemini API for processing
            const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$91b8b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["processVideoWithGemini"])(formData, key_0, model, prompt);
            setResult(text);
        } catch (err) {
            setResult(`Error: ${err.message}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 border-indigo-100 dark:border-indigo-900/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                className: "w-5 h-5 text-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            "Neural Core"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>setShowKeyInput(!showKeyInput),
                        className: "text-xs text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"], {
                                className: "w-3 h-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this),
                            " ",
                            apiKey ? 'Key Set' : 'Set Key'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            showKeyInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Enter Gemini API Key",
                        value: apiKey,
                        onChange: (e)=>setApiKey(e.target.value),
                        className: "w-full p-2 text-sm rounded border dark:bg-zinc-800 dark:border-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-gray-500 mt-1",
                        children: "Key is used locally and sent to Google servers. Get one at aistudio.google.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 86,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block",
                        children: [
                            "Model ",
                            availableModels.length > 0 ? `(${availableModels.length} available)` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: model,
                        onChange: (e_0)=>setModel(e_0.target.value),
                        className: "w-full p-2 text-sm rounded border bg-white dark:bg-zinc-800 dark:border-white/10",
                        children: [
                            availableModels.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gemini-1.5-flash-002",
                                        children: "Gemini 1.5 Flash (Fastest - 002)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gemini-1.5-pro-002",
                                        children: "Gemini 1.5 Pro (Smartest - 002)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gemini-2.0-flash-exp",
                                        children: "Gemini 2.0 Flash Exp (Experimental)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: m.name,
                                    children: m.displayName
                                }, m.name, false, {
                                    fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                    lineNumber: 104,
                                    columnNumber: 47
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>handleAction('summary'),
                        disabled: loading || recordedChunks.length === 0,
                        className: "flex-1 bg-white dark:bg-zinc-800 text-indigo-600 shadow-sm border border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            " Show Notes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>handleAction('clips'),
                        disabled: loading || recordedChunks.length === 0,
                        className: "flex-1 bg-white dark:bg-zinc-800 text-purple-600 shadow-sm border border-purple-100 dark:border-purple-900/50 hover:bg-purple-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this),
                            " Find Clips"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 text-center text-gray-500 flex flex-col items-center gap-2 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-6 h-6 animate-spin text-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 120,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: "Watching video & thinking..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 121,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 119,
                columnNumber: 25
            }, this),
            result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono max-h-60 overflow-y-auto border border-gray-100 dark:border-white/5",
                children: result
            }, void 0, false, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 124,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/studio/AIAssistant.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
_s(AIAssistant, "d9CPi7p2351L2STCx2sAXteHjQ0=");
_c = AIAssistant;
var _c;
__turbopack_context__.k.register(_c, "AIAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/studio/Editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Editor",
    ()=>Editor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFFmpeg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFFmpeg.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/studio/AIAssistant.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Editor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "89bb25e5dff4d56cdb82e278483a6e5fccbd56a32e0f1caa33ac53c51a80cce5") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89bb25e5dff4d56cdb82e278483a6e5fccbd56a32e0f1caa33ac53c51a80cce5";
    }
    const { recordedChunks } = t0;
    const { ffmpeg, loaded, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFFmpeg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFFmpeg"])();
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== recordedChunks) {
        t1 = ({
            "Editor[useEffect()]": ()=>{
                if (recordedChunks.length > 0) {
                    const blob = new Blob(recordedChunks, {
                        type: "video/webm"
                    });
                    const url = URL.createObjectURL(blob);
                    setVideoUrl(url);
                    return ()=>URL.revokeObjectURL(url);
                }
            }
        })["Editor[useEffect()]"];
        t2 = [
            recordedChunks
        ];
        $[1] = recordedChunks;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== isPlaying) {
        t3 = ({
            "Editor[handlePlayPause]": ()=>{
                if (videoRef.current) {
                    if (isPlaying) {
                        videoRef.current.pause();
                    } else {
                        videoRef.current.play();
                    }
                    setIsPlaying(!isPlaying);
                }
            }
        })["Editor[handlePlayPause]"];
        $[4] = isPlaying;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handlePlayPause = t3;
    let t4;
    if ($[6] !== ffmpeg || $[7] !== loaded || $[8] !== recordedChunks) {
        t4 = ({
            "Editor[processVideo]": async ()=>{
                if (!loaded) {
                    return;
                }
                ;
                try {
                    const videoBlob = new Blob(recordedChunks, {
                        type: "video/webm"
                    });
                    const videoData = await videoBlob.arrayBuffer();
                    await ffmpeg.writeFile("input.webm", new Uint8Array(videoData));
                    await ffmpeg.exec([
                        "-i",
                        "input.webm",
                        "-c:v",
                        "copy",
                        "-c:a",
                        "aac",
                        "output.mp4"
                    ]);
                    const data = await ffmpeg.readFile("output.mp4");
                    const url_0 = URL.createObjectURL(new Blob([
                        data
                    ], {
                        type: "video/mp4"
                    }));
                    const a = document.createElement("a");
                    a.href = url_0;
                    a.download = "record-final.mp4";
                    a.click();
                    await ffmpeg.deleteFile("input.webm");
                    await ffmpeg.deleteFile("output.mp4");
                    URL.revokeObjectURL(url_0);
                } catch (t5) {
                    const error = t5;
                    console.error("Processing failed", error);
                }
            }
        })["Editor[processVideo]"];
        $[6] = ffmpeg;
        $[7] = loaded;
        $[8] = recordedChunks;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const processVideo = t4;
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold",
            children: "Studio Editor"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== isLoading) {
        t6 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-yellow-500 flex gap-2 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "animate-spin w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/Editor.tsx",
                    lineNumber: 125,
                    columnNumber: 89
                }, this),
                " Loading Engine..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 125,
            columnNumber: 23
        }, this);
        $[11] = isLoading;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== loaded) {
        t7 = loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-green-500",
            children: "Engine Ready"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 133,
            columnNumber: 20
        }, this);
        $[13] = loaded;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== videoUrl) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-video bg-black rounded-xl overflow-hidden relative group",
            children: videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: videoUrl,
                className: "w-full h-full object-contain",
                onEnded: {
                    "Editor[<video>.onEnded]": ()=>setIsPlaying(false)
                }["Editor[<video>.onEnded]"]
            }, void 0, false, {
                fileName: "[project]/src/components/studio/Editor.tsx",
                lineNumber: 150,
                columnNumber: 103
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-full text-gray-500",
                children: "No Recording Yet"
            }, void 0, false, {
                fileName: "[project]/src/components/studio/Editor.tsx",
                lineNumber: 152,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[18] = videoUrl;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = !videoUrl;
    let t11;
    if ($[20] !== isPlaying) {
        t11 = isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 161,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 161,
            columnNumber: 55
        }, this);
        $[20] = isPlaying;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== handlePlayPause || $[23] !== t10 || $[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handlePlayPause,
            disabled: t10,
            size: "sm",
            variant: "secondary",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[22] = handlePlayPause;
        $[23] = t10;
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-y-2 left-2 right-2 bg-indigo-500/20 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/Editor.tsx",
                    lineNumber: 179,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 bottom-0 left-[10%] w-0.5 bg-red-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/Editor.tsx",
                    lineNumber: 179,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    const t14 = !loaded || !videoUrl;
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
            className: "w-4 h-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== processVideo || $[29] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: processVideo,
            disabled: t14,
            size: "sm",
            variant: "secondary",
            children: [
                t15,
                " Trim"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[28] = processVideo;
        $[29] = t14;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    const t17 = !videoUrl;
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "w-4 h-4 mr-2"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            disabled: t17,
            size: "sm",
            variant: "primary",
            children: [
                t18,
                " Export"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t12 || $[35] !== t16 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t12,
                t13,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t16;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== recordedChunks) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 border-t border-gray-100 dark:border-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAssistant"], {
                recordedChunks: recordedChunks
            }, void 0, false, {
                fileName: "[project]/src/components/studio/Editor.tsx",
                lineNumber: 229,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[38] = recordedChunks;
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    let t22;
    if ($[40] !== t20 || $[41] !== t21 || $[42] !== t8 || $[43] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full flex flex-col gap-4",
            children: [
                t8,
                t9,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Editor.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[40] = t20;
        $[41] = t21;
        $[42] = t8;
        $[43] = t9;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    return t22;
}
_s(Editor, "NFxeIFKV+XWxfsTE3sTb2doOS9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFFmpeg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFFmpeg"]
    ];
});
_c = Editor;
var _c;
__turbopack_context__.k.register(_c, "Editor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "aa27828bef681dcbe86e11cdf7e6f75dd2e0b2f582ac1242239081694de8f76f") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa27828bef681dcbe86e11cdf7e6f75dd2e0b2f582ac1242239081694de8f76f";
    }
    let className;
    let error;
    let label;
    let props;
    if ($[1] !== t0) {
        ({ className, label, error, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = error;
        $[4] = label;
        $[5] = props;
    } else {
        className = $[2];
        error = $[3];
        label = $[4];
        props = $[5];
    }
    let t1;
    if ($[6] !== label) {
        t1 = label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-700 dark:text-gray-300 ml-1",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Input.tsx",
            lineNumber: 46,
            columnNumber: 19
        }, this);
        $[6] = label;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            scale: 1.01
        };
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const t3 = error && "border-red-500 focus:ring-red-500/50 focus:border-red-500";
    let t4;
    if ($[9] !== className || $[10] !== t3) {
        t4 = cn("w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-zinc-800 backdrop-blur-sm", "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm", "placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-900 dark:text-white", t3, className);
        $[9] = className;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== props || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
            whileFocus: t2,
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Input.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[12] = props;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== error) {
        t6 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-red-500 ml-1",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Input.tsx",
            lineNumber: 82,
            columnNumber: 19
        }, this);
        $[15] = error;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== t1 || $[18] !== t5 || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1.5 w-full",
            children: [
                t1,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Input.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[17] = t1;
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    return t7;
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/studio/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chat",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Chat(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "369984313c328d383f606f7427bb69761cf2f75ad8d52af7472182af84cf8db9") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "369984313c328d383f606f7427bb69761cf2f75ad8d52af7472182af84cf8db9";
    }
    const { messages, onSendMessage, currentUserId } = t0;
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Chat[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["Chat[scrollToBottom]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const scrollToBottom = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Chat[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["Chat[useEffect()]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== messages) {
        t3 = [
            messages
        ];
        $[3] = messages;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== inputMessage || $[6] !== onSendMessage) {
        t4 = ({
            "Chat[handleSend]": ()=>{
                if (inputMessage.trim()) {
                    onSendMessage(inputMessage);
                    setInputMessage("");
                }
            }
        })["Chat[handleSend]"];
        $[5] = inputMessage;
        $[6] = onSendMessage;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleSend = t4;
    let t5;
    if ($[8] !== handleSend) {
        t5 = ({
            "Chat[handleKeyPress]": (e)=>{
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                }
            }
        })["Chat[handleKeyPress]"];
        $[8] = handleSend;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleKeyPress = t5;
    const formatTime = _ChatFormatTime;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-gray-200 dark:border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold dark:text-white",
                children: "Chat"
            }, void 0, false, {
                fileName: "[project]/src/components/studio/Chat.tsx",
                lineNumber: 112,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== currentUserId || $[12] !== messages) {
        t7 = messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-400 mt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No messages yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/Chat.tsx",
                    lineNumber: 119,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Start the conversation!"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/Chat.tsx",
                    lineNumber: 119,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 119,
            columnNumber: 34
        }, this) : messages.map({
            "Chat[messages.map()]": (msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col ${msg.userId === currentUserId ? "items-end" : "items-start"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `max-w-[80%] rounded-lg px-4 py-2 ${msg.userId === currentUserId ? "bg-indigo-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"}`,
                            children: [
                                msg.userId !== currentUserId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold mb-1 opacity-70",
                                    children: msg.userName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/studio/Chat.tsx",
                                    lineNumber: 120,
                                    columnNumber: 355
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm break-words",
                                    children: msg.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/studio/Chat.tsx",
                                    lineNumber: 120,
                                    columnNumber: 427
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/studio/Chat.tsx",
                            lineNumber: 120,
                            columnNumber: 146
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-400 mt-1 px-2",
                            children: formatTime(msg.timestamp)
                        }, void 0, false, {
                            fileName: "[project]/src/components/studio/Chat.tsx",
                            lineNumber: 120,
                            columnNumber: 485
                        }, this)
                    ]
                }, msg.id, true, {
                    fileName: "[project]/src/components/studio/Chat.tsx",
                    lineNumber: 120,
                    columnNumber: 38
                }, this)
        }["Chat[messages.map()]"]);
        $[11] = currentUserId;
        $[12] = messages;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: messagesEndRef
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto p-4 space-y-3",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Chat[<Input>.onChange]": (e_0)=>setInputMessage(e_0.target.value)
        })["Chat[<Input>.onChange]"];
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== handleKeyPress || $[19] !== inputMessage) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            value: inputMessage,
            onChange: t10,
            onKeyPress: handleKeyPress,
            placeholder: "Type a message...",
            className: "flex-1"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[18] = handleKeyPress;
        $[19] = inputMessage;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== inputMessage) {
        t12 = inputMessage.trim();
        $[21] = inputMessage;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    const t13 = !t12;
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== handleSend || $[25] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleSend,
            disabled: t13,
            className: "rounded-full",
            size: "lg",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[24] = handleSend;
        $[25] = t13;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== t11 || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-gray-200 dark:border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    t11,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/Chat.tsx",
                lineNumber: 188,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t16 || $[31] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800",
            children: [
                t6,
                t9,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/Chat.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[30] = t16;
        $[31] = t9;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    return t17;
}
_s(Chat, "Be24J/m8b5KK2bI57W9zDRo/wQQ=");
_c = Chat;
function _ChatFormatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/studio/UsernameModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsernameModal",
    ()=>UsernameModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function UsernameModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "ea407f5af14c78de06769df18afb2716d719d8a2a18620fa23f5277ae8dbe5f9") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea407f5af14c78de06769df18afb2716d719d8a2a18620fa23f5277ae8dbe5f9";
    }
    const { onSubmit } = t0;
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== onSubmit || $[2] !== username) {
        t1 = ({
            "UsernameModal[handleSubmit]": (e)=>{
                e.preventDefault();
                if (username.trim()) {
                    onSubmit(username.trim());
                }
            }
        })["UsernameModal[handleSubmit]"];
        $[1] = onSubmit;
        $[2] = username;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSubmit = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-8 h-8 text-indigo-600 dark:text-indigo-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/UsernameModal.tsx",
                        lineNumber: 42,
                        columnNumber: 134
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/UsernameModal.tsx",
                    lineNumber: 42,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                    children: "Welcome to PoPo Studio"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/UsernameModal.tsx",
                    lineNumber: 42,
                    columnNumber: 205
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 text-center",
                    children: "Enter your name to join the session"
                }, void 0, false, {
                    fileName: "[project]/src/components/studio/UsernameModal.tsx",
                    lineNumber: 42,
                    columnNumber: 302
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "UsernameModal[<Input>.onChange]": (e_0)=>setUsername(e_0.target.value)
        })["UsernameModal[<Input>.onChange]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== username) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "text",
            placeholder: "Your name",
            value: username,
            onChange: t3,
            className: "text-lg h-14",
            autoFocus: true,
            maxLength: 20
        }, void 0, false, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = username;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 dark:text-gray-400 mt-2",
            children: "This is how others will see you in chat"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== username) {
        t7 = username.trim();
        $[11] = username;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = !t7;
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            size: "lg",
            className: "w-full rounded-full h-14 text-lg",
            disabled: t8,
            children: "Join Studio"
        }, void 0, false, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== handleSubmit || $[16] !== t6 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-800",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            t6,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/UsernameModal.tsx",
                        lineNumber: 98,
                        columnNumber: 247
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/UsernameModal.tsx",
                lineNumber: 98,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/studio/UsernameModal.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[15] = handleSubmit;
        $[16] = t6;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
}
_s(UsernameModal, "oX7frOsoM286qXdKn03TWCpXkD4=");
_c = UsernameModal;
var _c;
__turbopack_context__.k.register(_c, "UsernameModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRecorder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecorder",
    ()=>useRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useRecorder() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0f3247265bbab20a7027f4b788035424dc7e8a19fa716678dc3bfe640e9bdcc2") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f3247265bbab20a7027f4b788035424dc7e8a19fa716678dc3bfe640e9bdcc2";
    }
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [recordedChunks, setRecordedChunks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useRecorder[startRecording]": (stream)=>{
                if (!stream) {
                    return;
                }
                setRecordedChunks([]);
                setRecordedChunks([]);
                let mimeType = "video/webm; codecs=vp9,opus";
                if (!MediaRecorder.isTypeSupported("video/webm; codecs=vp9,opus")) {
                    mimeType = "video/webm; codecs=vp9";
                    if (!MediaRecorder.isTypeSupported("video/webm; codecs=vp9")) {
                        mimeType = "video/webm";
                    }
                }
                const mediaRecorder = new MediaRecorder(stream, {
                    mimeType
                });
                mediaRecorderRef.current = mediaRecorder;
                mediaRecorder.ondataavailable = (event)=>{
                    if (event.data.size > 0) {
                        setRecordedChunks({
                            "useRecorder[startRecording > <anonymous> > setRecordedChunks()]": (prev)=>[
                                    ...prev,
                                    event.data
                                ]
                        }["useRecorder[startRecording > <anonymous> > setRecordedChunks()]"]);
                    }
                };
                mediaRecorder.start(1000);
                setIsRecording(true);
            }
        })["useRecorder[startRecording]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const startRecording = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useRecorder[stopRecording]": ()=>{
                if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
                    mediaRecorderRef.current.stop();
                    setIsRecording(false);
                }
            }
        })["useRecorder[stopRecording]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const stopRecording = t2;
    let t3;
    if ($[4] !== recordedChunks) {
        t3 = ({
            "useRecorder[getBlob]": ()=>new Blob(recordedChunks, {
                    type: "video/webm"
                })
        })["useRecorder[getBlob]"];
        $[4] = recordedChunks;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const getBlob = t3;
    let t4;
    if ($[6] !== getBlob || $[7] !== isRecording || $[8] !== recordedChunks) {
        t4 = {
            isRecording,
            startRecording,
            stopRecording,
            recordedChunks,
            getBlob
        };
        $[6] = getBlob;
        $[7] = isRecording;
        $[8] = recordedChunks;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(useRecorder, "oV2TljRt952swkopRlaBw7Xejl4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/studio/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWebRTC.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$VideoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/studio/VideoGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/studio/Editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/studio/Chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$UsernameModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/studio/UsernameModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRecorder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-up.js [app-client] (ecmascript) <export default as MonitorUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function StudioPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(96);
    if ($[0] !== "0908cb0169c5af4b8a656a168e2a72f760b2bd5fcf23873020bf9d3551a7fd24") {
        for(let $i = 0; $i < 96; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0908cb0169c5af4b8a656a168e2a72f760b2bd5fcf23873020bf9d3551a7fd24";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showChat, setShowChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "StudioPage[useEffect()]": ()=>{
                const savedUsername = localStorage.getItem("popo-username");
                if (savedUsername) {
                    setUsername(savedUsername);
                }
            }
        })["StudioPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "StudioPage[handleUsernameSubmit]": (name)=>{
                setUsername(name);
                localStorage.setItem("popo-username", name);
            }
        })["StudioPage[handleUsernameSubmit]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleUsernameSubmit = t2;
    const { localStream, peers, socket, error, toggleAudio, toggleVideo, isAudioEnabled, isVideoEnabled, shareScreen, stopScreenShare, isScreenSharing, chatMessages, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebRTC"])("main-studio", username || "Anonymous");
    const { isRecording, startRecording, stopRecording, recordedChunks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecorder"])();
    if (!username) {
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$UsernameModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsernameModal"], {
                onSubmit: handleUsernameSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 86,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    if (error) {
        let t3;
        let t4;
        let t5;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                    className: "w-12 h-12"
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 98,
                    columnNumber: 107
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 98,
                columnNumber: 12
            }, this);
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold",
                children: "Camera/Microphone Access Denied"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 99,
                columnNumber: 12
            }, this);
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 dark:text-gray-400 max-w-md",
                children: "We couldn't access your camera or microphone. This is usually because:"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[5] = t3;
            $[6] = t4;
            $[7] = t5;
        } else {
            t3 = $[5];
            t4 = $[6];
            t5 = $[7];
        }
        let t6;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "text-left bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl space-y-2 border border-gray-200 dark:border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "1. You denied permission in the browser popup."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 111,
                        columnNumber: 135
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "2. Your operating system/settings have blocked access."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 111,
                        columnNumber: 226
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "3. Another application is using the camera."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 111,
                        columnNumber: 325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 111,
                columnNumber: 12
            }, this);
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        let t7;
        if ($[9] !== error.message || $[10] !== error.name) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-red-500 font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded",
                children: [
                    "Error Details: ",
                    error.name,
                    ": ",
                    error.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 118,
                columnNumber: 12
            }, this);
            $[9] = error.message;
            $[10] = error.name;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        let t8;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: _StudioPageButtonOnClick,
                children: "Try Again"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 127,
                columnNumber: 12
            }, this);
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        let t9;
        if ($[13] !== router) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 pt-4",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: {
                            "StudioPage[<Button>.onClick]": ()=>router.push("/")
                        }["StudioPage[<Button>.onClick]"],
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 134,
                        columnNumber: 49
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 134,
                columnNumber: 12
            }, this);
            $[13] = router;
            $[14] = t9;
        } else {
            t9 = $[14];
        }
        let t10;
        if ($[15] !== t7 || $[16] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-[50vh] text-center p-8 space-y-4",
                children: [
                    t3,
                    t4,
                    t5,
                    t6,
                    t7,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this);
            $[15] = t7;
            $[16] = t9;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        return t10;
    }
    let t3;
    if ($[18] !== isRecording || $[19] !== localStream || $[20] !== startRecording || $[21] !== stopRecording) {
        t3 = ({
            "StudioPage[handleRecordToggle]": ()=>{
                if (isRecording) {
                    stopRecording();
                } else {
                    if (localStream) {
                        startRecording(localStream);
                    }
                }
            }
        })["StudioPage[handleRecordToggle]"];
        $[18] = isRecording;
        $[19] = localStream;
        $[20] = startRecording;
        $[21] = stopRecording;
        $[22] = t3;
    } else {
        t3 = $[22];
    }
    const handleRecordToggle = t3;
    let t4;
    if ($[23] !== router) {
        t4 = ({
            "StudioPage[handleLeave]": ()=>{
                router.push("/");
            }
        })["StudioPage[handleLeave]"];
        $[23] = router;
        $[24] = t4;
    } else {
        t4 = $[24];
    }
    const handleLeave = t4;
    let t5;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-black italic tracking-tighter text-white uppercase",
                    children: [
                        "Studio ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyber-cyan",
                            children: "Interface"
                        }, void 0, false, {
                            fileName: "[project]/src/app/studio/page.tsx",
                            lineNumber: 190,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 190,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-mono text-gray-500 uppercase tracking-widest",
                    children: "[NODE: MAIN-STUDIO]"
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 190,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[25] = t5;
    } else {
        t5 = $[25];
    }
    let t6;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 border border-cyber-pink/50 text-cyber-pink text-[10px] font-black uppercase tracking-[0.2em] animate-pulse bg-cyber-pink/10",
                        children: "[TRANSMITTING]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 197,
                        columnNumber: 111
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 197,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[26] = t6;
    } else {
        t6 = $[26];
    }
    const t7 = `transition-all ${showChat ? "flex-[3]" : "flex-1"} bg-gray-100 dark:bg-zinc-900/50 rounded-3xl border border-white/20 overflow-hidden relative`;
    let t8;
    if ($[27] !== peers) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$VideoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoGrid"], {
            peers: peers
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        $[27] = peers;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    let t9;
    if ($[29] !== t7 || $[30] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 213,
            columnNumber: 10
        }, this);
        $[29] = t7;
        $[30] = t8;
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    let t10;
    if ($[32] !== chatMessages || $[33] !== sendMessage || $[34] !== showChat || $[35] !== socket?.id) {
        t10 = showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex md:flex-[1] h-full rounded-3xl overflow-hidden border border-white/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat"], {
                messages: chatMessages,
                onSendMessage: sendMessage,
                currentUserId: socket?.id || ""
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 222,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 222,
            columnNumber: 23
        }, this);
        $[32] = chatMessages;
        $[33] = sendMessage;
        $[34] = showChat;
        $[35] = socket?.id;
        $[36] = t10;
    } else {
        t10 = $[36];
    }
    let t11;
    if ($[37] !== chatMessages || $[38] !== sendMessage || $[39] !== showChat || $[40] !== socket?.id) {
        t11 = showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[70%] bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat"], {
                        messages: chatMessages,
                        onSendMessage: sendMessage,
                        currentUserId: socket?.id || ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 233,
                        columnNumber: 204
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "StudioPage[<button>.onClick]": ()=>setShowChat(false)
                        }["StudioPage[<button>.onClick]"],
                        className: "absolute top-4 right-4 text-gray-400 hover:text-white",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 233,
                        columnNumber: 297
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 233,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 233,
            columnNumber: 23
        }, this);
        $[37] = chatMessages;
        $[38] = sendMessage;
        $[39] = showChat;
        $[40] = socket?.id;
        $[41] = t11;
    } else {
        t11 = $[41];
    }
    let t12;
    if ($[42] !== t10 || $[43] !== t11 || $[44] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex gap-4 overflow-hidden",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[42] = t10;
        $[43] = t11;
        $[44] = t9;
        $[45] = t12;
    } else {
        t12 = $[45];
    }
    const t13 = isAudioEnabled ? "secondary" : "danger";
    let t14;
    if ($[46] !== isAudioEnabled) {
        t14 = isAudioEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 257,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 257,
            columnNumber: 58
        }, this);
        $[46] = isAudioEnabled;
        $[47] = t14;
    } else {
        t14 = $[47];
    }
    let t15;
    if ($[48] !== t13 || $[49] !== t14 || $[50] !== toggleAudio) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t13,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: toggleAudio,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[48] = t13;
        $[49] = t14;
        $[50] = toggleAudio;
        $[51] = t15;
    } else {
        t15 = $[51];
    }
    const t16 = isVideoEnabled ? "secondary" : "danger";
    let t17;
    if ($[52] !== isVideoEnabled) {
        t17 = isVideoEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 276,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 276,
            columnNumber: 60
        }, this);
        $[52] = isVideoEnabled;
        $[53] = t17;
    } else {
        t17 = $[53];
    }
    let t18;
    if ($[54] !== t16 || $[55] !== t17 || $[56] !== toggleVideo) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t16,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: toggleVideo,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[54] = t16;
        $[55] = t17;
        $[56] = toggleVideo;
        $[57] = t18;
    } else {
        t18 = $[57];
    }
    const t19 = isScreenSharing ? "danger" : "primary";
    const t20 = isScreenSharing ? stopScreenShare : shareScreen;
    const t21 = `w-5 h-5 mr-2 ${isScreenSharing ? "animate-pulse" : ""}`;
    let t22;
    if ($[58] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorUp$3e$__["MonitorUp"], {
            className: t21
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[58] = t21;
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    const t23 = isScreenSharing ? "Stop Sharing" : "Share Screen";
    let t24;
    if ($[60] !== t19 || $[61] !== t20 || $[62] !== t22 || $[63] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t19,
            size: "lg",
            className: "rounded-full px-8 shadow-xl shadow-indigo-500/20",
            onClick: t20,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[60] = t19;
        $[61] = t20;
        $[62] = t22;
        $[63] = t23;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    const t25 = isRecording ? "danger" : "secondary";
    const t26 = `w-5 h-5 ${isRecording ? "fill-current animate-pulse" : ""}`;
    let t27;
    if ($[65] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
            className: t26
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[65] = t26;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] !== handleRecordToggle || $[68] !== t25 || $[69] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t25,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: handleRecordToggle,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[67] = handleRecordToggle;
        $[68] = t25;
        $[69] = t27;
        $[70] = t28;
    } else {
        t28 = $[70];
    }
    const t29 = showChat ? "primary" : "secondary";
    let t30;
    if ($[71] !== showChat) {
        t30 = ({
            "StudioPage[<Button>.onClick]": ()=>setShowChat(!showChat)
        })["StudioPage[<Button>.onClick]"];
        $[71] = showChat;
        $[72] = t30;
    } else {
        t30 = $[72];
    }
    let t31;
    let t32;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "w-5 h-5 md:mr-2"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden md:inline",
            children: "Chat"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[73] = t31;
        $[74] = t32;
    } else {
        t31 = $[73];
        t32 = $[74];
    }
    let t33;
    if ($[75] !== t29 || $[76] !== t30) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t29,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: t30,
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[75] = t29;
        $[76] = t30;
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
            className: "w-5 h-5 md:mr-2"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    let t35;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden md:inline",
            children: "Leave"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[79] = t35;
    } else {
        t35 = $[79];
    }
    let t36;
    if ($[80] !== handleLeave) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "danger",
            size: "lg",
            className: "rounded-full shadow-md",
            onClick: handleLeave,
            children: [
                t34,
                " ",
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[80] = handleLeave;
        $[81] = t36;
    } else {
        t36 = $[81];
    }
    let t37;
    if ($[82] !== t15 || $[83] !== t18 || $[84] !== t24 || $[85] !== t28 || $[86] !== t33 || $[87] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-4 py-4",
            children: [
                t15,
                t18,
                t24,
                t28,
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[82] = t15;
        $[83] = t18;
        $[84] = t24;
        $[85] = t28;
        $[86] = t33;
        $[87] = t36;
        $[88] = t37;
    } else {
        t37 = $[88];
    }
    let t38;
    if ($[89] !== isRecording || $[90] !== recordedChunks) {
        t38 = !isRecording && recordedChunks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
            recordedChunks: recordedChunks
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 403,
            columnNumber: 56
        }, this);
        $[89] = isRecording;
        $[90] = recordedChunks;
        $[91] = t38;
    } else {
        t38 = $[91];
    }
    let t39;
    if ($[92] !== t12 || $[93] !== t37 || $[94] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-[calc(100vh-8rem)] gap-4",
            children: [
                t6,
                t12,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[92] = t12;
        $[93] = t37;
        $[94] = t38;
        $[95] = t39;
    } else {
        t39 = $[95];
    }
    return t39;
}
_s(StudioPage, "JEDlg/8xBZjBJj1h+ALhHGqyANc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebRTC"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecorder"]
    ];
});
_c = StudioPage;
function _StudioPageButtonOnClick() {
    return window.location.reload();
}
var _c;
__turbopack_context__.k.register(_c, "StudioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3e3578b4._.js.map