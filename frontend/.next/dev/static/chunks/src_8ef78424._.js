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
function useWebRTC(roomId) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "c160adce85a092d6757830231385bd5ecd6dd130543b9fc11bedb5a756289bea") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c160adce85a092d6757830231385bd5ecd6dd130543b9fc11bedb5a756289bea";
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
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const peersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[3] !== roomId) {
        t2 = ({
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
                            to: userId
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
        $[3] = roomId;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const createPeer = t2;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[5] !== createPeer || $[6] !== roomId) {
        t3 = ({
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
        t4 = [
            roomId,
            createPeer
        ];
        $[5] = createPeer;
        $[6] = roomId;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const [isAudioEnabled, setIsAudioEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVideoEnabled, setIsVideoEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const originalVideoTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
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
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const toggleAudio = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
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
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const toggleVideo = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
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
                    } catch (t8) {
                        const e = t8;
                        console.error("Failed to restore camera", e);
                        setIsScreenSharing(false);
                    }
                }
            }
        })["useWebRTC[stopScreenShare]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const stopScreenShare = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
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
                } catch (t9) {
                    const err_1 = t9;
                    console.error("Failed to share screen", err_1);
                }
            }
        })["useWebRTC[shareScreen]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const shareScreen = t8;
    let t9;
    if ($[13] !== localStream || $[14] !== peers) {
        t9 = localStream ? [
            {
                id: "local",
                stream: localStream,
                isLocal: true
            },
            ...peers
        ] : peers;
        $[13] = localStream;
        $[14] = peers;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const allPeers = t9;
    let t10;
    if ($[16] !== allPeers || $[17] !== error || $[18] !== isAudioEnabled || $[19] !== isConnected || $[20] !== isScreenSharing || $[21] !== isVideoEnabled || $[22] !== localStream || $[23] !== socket) {
        t10 = {
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
            isConnected
        };
        $[16] = allPeers;
        $[17] = error;
        $[18] = isAudioEnabled;
        $[19] = isConnected;
        $[20] = isScreenSharing;
        $[21] = isVideoEnabled;
        $[22] = localStream;
        $[23] = socket;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    return t10;
}
_s(useWebRTC, "NEREnfsUwptFa85S1gUMkSL+Sjc=");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "48a911fff8be787c99f4c74b5d559591b41cad58909e018982cf7a6de8112aae") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48a911fff8be787c99f4c74b5d559591b41cad58909e018982cf7a6de8112aae";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
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
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
    }
    let t4;
    if ($[8] !== className) {
        t4 = cn("bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-xl p-6", className);
        $[8] = className;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== children || $[11] !== props || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t1,
            whileInView: t2,
            viewport: t3,
            className: t4,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = props;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "46f9b914f190367ce6cb707680d200a940285ea486f3d3ff5f6c86ccbf70f4e2") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46f9b914f190367ce6cb707680d200a940285ea486f3d3ff5f6c86ccbf70f4e2";
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
            primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25",
            secondary: "bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700",
            ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300",
            danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25"
        };
        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-8 py-3.5 text-base"
        };
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                scale: 1.02
            };
            t4 = {
                scale: 0.98
            };
            $[16] = t3;
            $[17] = t4;
        } else {
            t3 = $[16];
            t4 = $[17];
        }
        t5 = cn("inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none", variants[variant], sizes[size], className);
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
    if ($[18] !== isLoading) {
        t7 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "w-4 h-4 mr-2 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 109,
            columnNumber: 23
        }, this);
        $[18] = isLoading;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== T0 || $[21] !== children || $[22] !== props || $[23] !== t3 || $[24] !== t4 || $[25] !== t5 || $[26] !== t6 || $[27] !== t7) {
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
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[20] = T0;
        $[21] = children;
        $[22] = props;
        $[23] = t3;
        $[24] = t4;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
    } else {
        t8 = $[28];
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
"[project]/src/app/actions/data:068c7a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gJ0Bnb29nbGUvZ2VuZXJhdGl2ZS1haSc7XHJcbmltcG9ydCB7IEdvb2dsZUFJRmlsZU1hbmFnZXIgfSBmcm9tICdAZ29vZ2xlL2dlbmVyYXRpdmUtYWkvc2VydmVyJztcclxuaW1wb3J0IHsgd3JpdGVGaWxlLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbi8vIEhlbHBlciB0byBzYXZlIGJ1ZmZlciB0byB0ZW1wIGZpbGVcclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVRvVGVtcChidWZmZXI6IEJ1ZmZlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGB1cGxvYWQtJHt1dWlkdjQoKX0ud2VibWA7XHJcbiAgICBjb25zdCBmaWxlcGF0aCA9IGpvaW4odG1wZGlyKCksIGZpbGVuYW1lKTtcclxuICAgIGF3YWl0IHdyaXRlRmlsZShmaWxlcGF0aCwgYnVmZmVyKTtcclxuICAgIHJldHVybiBmaWxlcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NWaWRlb1dpdGhHZW1pbmkoZm9ybURhdGE6IEZvcm1EYXRhLCBhcGlLZXk6IHN0cmluZywgbW9kZWxOYW1lOiBzdHJpbmcsIHByb21wdDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFwaUtleSkgdGhyb3cgbmV3IEVycm9yKFwiQVBJIEtleSBpcyByZXF1aXJlZFwiKTtcclxuXHJcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZTtcclxuICAgIGlmICghZmlsZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gZmlsZSB1cGxvYWRlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVNYW5hZ2VyID0gbmV3IEdvb2dsZUFJRmlsZU1hbmFnZXIoYXBpS2V5KTtcclxuICAgICAgICBjb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoYXBpS2V5KTtcclxuXHJcbiAgICAgICAgLy8gMS4gU2F2ZSB0byB0ZW1wIGRpc2sgKEZpbGVNYW5hZ2VyIG5lZWRzIGxvY2FsIHBhdGgpXHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBQYXRoID0gYXdhaXQgc2F2ZVRvVGVtcChidWZmZXIpO1xyXG5cclxuICAgICAgICAvLyAyLiBVcGxvYWQgdG8gR29vZ2xlIEFJXHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlsZU1hbmFnZXIudXBsb2FkRmlsZSh0ZW1wUGF0aCwge1xyXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R1ZGlvIFJlY29yZGluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAzLiBXYWl0IGZvciBwcm9jZXNzaW5nIChWaWRlbyB0YWtlcyB0aW1lKVxyXG4gICAgICAgIGxldCBmaWxlU3RhdGUgPSBhd2FpdCBmaWxlTWFuYWdlci5nZXRGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpO1xyXG4gICAgICAgIHdoaWxlIChmaWxlU3RhdGUuc3RhdGUgPT09ICdQUk9DRVNTSU5HJykge1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpO1xyXG4gICAgICAgICAgICBmaWxlU3RhdGUgPSBhd2FpdCBmaWxlTWFuYWdlci5nZXRGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGVTdGF0ZS5zdGF0ZSA9PT0gJ0ZBSUxFRCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmlkZW8gcHJvY2Vzc2luZyBmYWlsZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNC4gR2VuZXJhdGUgQ29udGVudFxyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IG1vZGVsTmFtZSB8fCBcImdlbWluaS0xLjUtZmxhc2gtbGF0ZXN0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxlRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVVcmk6IHVwbG9hZFJlc3VsdC5maWxlLnVyaSxcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogdXBsb2FkUmVzdWx0LmZpbGUubWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBDbGVhbnVwXHJcbiAgICAgICAgYXdhaXQgdW5saW5rKHRlbXBQYXRoKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJUZW1wIGNsZWFudXAgZmFpbGVkXCIsIGUpKTtcclxuICAgICAgICAvLyBhd2FpdCBmaWxlTWFuYWdlci5kZWxldGVGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpOyAvLyBPcHRpb25hbDoga2VlcCBmb3IgY2FjaGUgb3IgZGVsZXRlXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQucmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIEVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJBSSBwcm9jZXNzaW5nIGZhaWxlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RHZW1pbmlNb2RlbHMoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghYXBpS2V5KSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbS92MWJldGEvbW9kZWxzP2tleT0ke2FwaUtleX1gKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbGlzdCBtb2RlbHNcIiwgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubW9kZWxzKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBmb3IgbW9kZWxzIHRoYXQgc3VwcG9ydCBjb250ZW50IGdlbmVyYXRpb24gYW5kIGFyZSBzdGFibGUvbGF0ZXN0XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubW9kZWxzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG06IGFueSkgPT4gbS5zdXBwb3J0ZWRHZW5lcmF0aW9uTWV0aG9kcz8uaW5jbHVkZXMoXCJnZW5lcmF0ZUNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgIC5tYXAoKG06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG0ubmFtZS5yZXBsYWNlKCdtb2RlbHMvJywgJycpLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG0uZGlzcGxheU5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTGlzdCBNb2RlbHMgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0FpQnNCLG1NQUFBIn0=
}),
"[project]/src/app/actions/data:10f0ae [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VtaW5pLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gJ0Bnb29nbGUvZ2VuZXJhdGl2ZS1haSc7XHJcbmltcG9ydCB7IEdvb2dsZUFJRmlsZU1hbmFnZXIgfSBmcm9tICdAZ29vZ2xlL2dlbmVyYXRpdmUtYWkvc2VydmVyJztcclxuaW1wb3J0IHsgd3JpdGVGaWxlLCB1bmxpbmsgfSBmcm9tICdmcy9wcm9taXNlcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbi8vIEhlbHBlciB0byBzYXZlIGJ1ZmZlciB0byB0ZW1wIGZpbGVcclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVRvVGVtcChidWZmZXI6IEJ1ZmZlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGB1cGxvYWQtJHt1dWlkdjQoKX0ud2VibWA7XHJcbiAgICBjb25zdCBmaWxlcGF0aCA9IGpvaW4odG1wZGlyKCksIGZpbGVuYW1lKTtcclxuICAgIGF3YWl0IHdyaXRlRmlsZShmaWxlcGF0aCwgYnVmZmVyKTtcclxuICAgIHJldHVybiBmaWxlcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NWaWRlb1dpdGhHZW1pbmkoZm9ybURhdGE6IEZvcm1EYXRhLCBhcGlLZXk6IHN0cmluZywgbW9kZWxOYW1lOiBzdHJpbmcsIHByb21wdDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFwaUtleSkgdGhyb3cgbmV3IEVycm9yKFwiQVBJIEtleSBpcyByZXF1aXJlZFwiKTtcclxuXHJcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZTtcclxuICAgIGlmICghZmlsZSkgdGhyb3cgbmV3IEVycm9yKFwiTm8gZmlsZSB1cGxvYWRlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVNYW5hZ2VyID0gbmV3IEdvb2dsZUFJRmlsZU1hbmFnZXIoYXBpS2V5KTtcclxuICAgICAgICBjb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoYXBpS2V5KTtcclxuXHJcbiAgICAgICAgLy8gMS4gU2F2ZSB0byB0ZW1wIGRpc2sgKEZpbGVNYW5hZ2VyIG5lZWRzIGxvY2FsIHBhdGgpXHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBQYXRoID0gYXdhaXQgc2F2ZVRvVGVtcChidWZmZXIpO1xyXG5cclxuICAgICAgICAvLyAyLiBVcGxvYWQgdG8gR29vZ2xlIEFJXHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlsZU1hbmFnZXIudXBsb2FkRmlsZSh0ZW1wUGF0aCwge1xyXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R1ZGlvIFJlY29yZGluZ1wiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAzLiBXYWl0IGZvciBwcm9jZXNzaW5nIChWaWRlbyB0YWtlcyB0aW1lKVxyXG4gICAgICAgIGxldCBmaWxlU3RhdGUgPSBhd2FpdCBmaWxlTWFuYWdlci5nZXRGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpO1xyXG4gICAgICAgIHdoaWxlIChmaWxlU3RhdGUuc3RhdGUgPT09ICdQUk9DRVNTSU5HJykge1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpO1xyXG4gICAgICAgICAgICBmaWxlU3RhdGUgPSBhd2FpdCBmaWxlTWFuYWdlci5nZXRGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGVTdGF0ZS5zdGF0ZSA9PT0gJ0ZBSUxFRCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmlkZW8gcHJvY2Vzc2luZyBmYWlsZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNC4gR2VuZXJhdGUgQ29udGVudFxyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IG1vZGVsTmFtZSB8fCBcImdlbWluaS0xLjUtZmxhc2gtbGF0ZXN0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWxlRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVVcmk6IHVwbG9hZFJlc3VsdC5maWxlLnVyaSxcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogdXBsb2FkUmVzdWx0LmZpbGUubWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBDbGVhbnVwXHJcbiAgICAgICAgYXdhaXQgdW5saW5rKHRlbXBQYXRoKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJUZW1wIGNsZWFudXAgZmFpbGVkXCIsIGUpKTtcclxuICAgICAgICAvLyBhd2FpdCBmaWxlTWFuYWdlci5kZWxldGVGaWxlKHVwbG9hZFJlc3VsdC5maWxlLm5hbWUpOyAvLyBPcHRpb25hbDoga2VlcCBmb3IgY2FjaGUgb3IgZGVsZXRlXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQucmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiR2VtaW5pIEVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UgfHwgXCJBSSBwcm9jZXNzaW5nIGZhaWxlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RHZW1pbmlNb2RlbHMoYXBpS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghYXBpS2V5KSByZXR1cm4gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbS92MWJldGEvbW9kZWxzP2tleT0ke2FwaUtleX1gKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbGlzdCBtb2RlbHNcIiwgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIWRhdGEubW9kZWxzKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBmb3IgbW9kZWxzIHRoYXQgc3VwcG9ydCBjb250ZW50IGdlbmVyYXRpb24gYW5kIGFyZSBzdGFibGUvbGF0ZXN0XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubW9kZWxzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG06IGFueSkgPT4gbS5zdXBwb3J0ZWRHZW5lcmF0aW9uTWV0aG9kcz8uaW5jbHVkZXMoXCJnZW5lcmF0ZUNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgIC5tYXAoKG06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG0ubmFtZS5yZXBsYWNlKCdtb2RlbHMvJywgJycpLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG0uZGlzcGxheU5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTGlzdCBNb2RlbHMgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkF5RXNCLDZMQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$068c7a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:068c7a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$10f0ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:10f0ae [app-client] (ecmascript) <text/javascript>");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistant.useEffect": ()=>{
            const key = apiKey || ("TURBOPACK compile-time value", "AIzaSyDG1-o8YoVcu8XpYJuOnTk1TohfL30egbs");
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$10f0ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["listGeminiModels"])(key).then({
                    "AIAssistant.useEffect": (models)=>{
                        if (models.length > 0) {
                            setAvailableModels(models);
                        // Check if current model is in list, if not set to first valid one or keep default if looks like a valid alias
                        // For now, let's stick to our default if it exists, or update if user prefers.
                        // But actually, seeing the list is better.
                        }
                    }
                }["AIAssistant.useEffect"]);
            }
        }
    }["AIAssistant.useEffect"], [
        apiKey
    ]);
    const handleAction = async (type)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setLoading(true);
        setResult(null);
        setActiveTab(type);
        const key_0 = apiKey || ("TURBOPACK compile-time value", "AIzaSyDG1-o8YoVcu8XpYJuOnTk1TohfL30egbs") || '';
        const prompt = type === 'summary' ? "Generate a catchy Title, a short abstract/summary for social media, and 5 hashtags for this video." : "Analyze this video and identify 3 potential viral highlight clips. Return JSON format with { start: 'MM:SS', end: 'MM:SS', description: 'string' } for each clip.";
        try {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            const formData = new FormData();
            formData.append('file', blob, 'recording.webm');
            const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$068c7a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["processVideoWithGemini"])(formData, key_0, model, prompt);
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-5 h-5 text-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            "AI Assistant"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 63,
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
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            " ",
                            apiKey ? 'Key Set' : 'Set Key'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 62,
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
                        lineNumber: 73,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-gray-500 mt-1",
                        children: "Key is used locally and sent to Google servers. Get one at aistudio.google.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 72,
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
                        lineNumber: 80,
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
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gemini-1.5-pro-002",
                                        children: "Gemini 1.5 Pro (Smartest - 002)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gemini-2.0-flash-exp",
                                        children: "Gemini 2.0 Flash Exp (Experimental)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            availableModels.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: m.name,
                                    children: m.displayName
                                }, m.name, false, {
                                    fileName: "[project]/src/components/studio/AIAssistant.tsx",
                                    lineNumber: 92,
                                    columnNumber: 47
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 79,
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
                                lineNumber: 100,
                                columnNumber: 21
                            }, this),
                            " Show Notes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 99,
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
                                lineNumber: 103,
                                columnNumber: 21
                            }, this),
                            " Find Clips"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 text-center text-gray-500 flex flex-col items-center gap-2 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-6 h-6 animate-spin text-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: "Watching video & thinking..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/studio/AIAssistant.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 107,
                columnNumber: 25
            }, this),
            result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/50 dark:bg-black/20 p-4 rounded-lg text-sm whitespace-pre-wrap font-mono max-h-60 overflow-y-auto border border-gray-100 dark:border-white/5",
                children: result
            }, void 0, false, {
                fileName: "[project]/src/components/studio/AIAssistant.tsx",
                lineNumber: 112,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/studio/AIAssistant.tsx",
        lineNumber: 61,
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
    if ($[0] !== "d731015013690d35a59dff114ac26e3627e7f901d3489bd5b0a527aa511326a5") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d731015013690d35a59dff114ac26e3627e7f901d3489bd5b0a527aa511326a5";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRecorder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-up.js [app-client] (ecmascript) <export default as MonitorUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
function StudioPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "d8a39f43eafd8bfcdd04015f6a9b3179fe999447964b2c9ff90b7ceedb4a1d03") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8a39f43eafd8bfcdd04015f6a9b3179fe999447964b2c9ff90b7ceedb4a1d03";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { localStream, peers, error, toggleAudio, toggleVideo, isAudioEnabled, isVideoEnabled, shareScreen, stopScreenShare, isScreenSharing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWebRTC$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebRTC"])("main-studio");
    const { isRecording, startRecording, stopRecording, recordedChunks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRecorder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecorder"])();
    if (error) {
        let t0;
        let t1;
        let t2;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                    className: "w-12 h-12"
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 43,
                    columnNumber: 107
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 43,
                columnNumber: 12
            }, this);
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold",
                children: "Camera/Microphone Access Denied"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 44,
                columnNumber: 12
            }, this);
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 dark:text-gray-400 max-w-md",
                children: "We couldn't access your camera or microphone. This is usually because:"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[1] = t0;
            $[2] = t1;
            $[3] = t2;
        } else {
            t0 = $[1];
            t1 = $[2];
            t2 = $[3];
        }
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "text-left bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl space-y-2 border border-gray-200 dark:border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "1. You denied permission in the browser popup."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 56,
                        columnNumber: 135
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "2. Your operating system/settings have blocked access."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 56,
                        columnNumber: 226
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: "3. Another application is using the camera."
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 56,
                        columnNumber: 325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        let t4;
        if ($[5] !== error.message || $[6] !== error.name) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-red-500 font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded",
                children: [
                    "Error Details: ",
                    error.name,
                    ": ",
                    error.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 63,
                columnNumber: 12
            }, this);
            $[5] = error.message;
            $[6] = error.name;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        let t5;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: _StudioPageButtonOnClick,
                children: "Try Again"
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 72,
                columnNumber: 12
            }, this);
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        let t6;
        if ($[9] !== router) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 pt-4",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: {
                            "StudioPage[<Button>.onClick]": ()=>router.push("/")
                        }["StudioPage[<Button>.onClick]"],
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 79,
                        columnNumber: 49
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 79,
                columnNumber: 12
            }, this);
            $[9] = router;
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        let t7;
        if ($[11] !== t4 || $[12] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-[50vh] text-center p-8 space-y-4",
                children: [
                    t0,
                    t1,
                    t2,
                    t3,
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 89,
                columnNumber: 12
            }, this);
            $[11] = t4;
            $[12] = t6;
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        return t7;
    }
    let t0;
    if ($[14] !== isRecording || $[15] !== localStream || $[16] !== startRecording || $[17] !== stopRecording) {
        t0 = ({
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
        $[14] = isRecording;
        $[15] = localStream;
        $[16] = startRecording;
        $[17] = stopRecording;
        $[18] = t0;
    } else {
        t0 = $[18];
    }
    const handleRecordToggle = t0;
    let t1;
    if ($[19] !== router) {
        t1 = ({
            "StudioPage[handleLeave]": ()=>{
                router.push("/");
            }
        })["StudioPage[handleLeave]"];
        $[19] = router;
        $[20] = t1;
    } else {
        t1 = $[20];
    }
    const handleLeave = t1;
    let t2;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500",
                    children: "Live Studio"
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 135,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Room: main-studio"
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 135,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[21] = t2;
    } else {
        t2 = $[21];
    }
    let t3;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-semibold animate-pulse",
                        children: "● Live"
                    }, void 0, false, {
                        fileName: "[project]/src/app/studio/page.tsx",
                        lineNumber: 142,
                        columnNumber: 111
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/studio/page.tsx",
                    lineNumber: 142,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[22] = t3;
    } else {
        t3 = $[22];
    }
    let t4;
    if ($[23] !== peers) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 bg-gray-100 dark:bg-zinc-900/50 rounded-3xl border border-white/20 overflow-hidden relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$VideoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoGrid"], {
                peers: peers
            }, void 0, false, {
                fileName: "[project]/src/app/studio/page.tsx",
                lineNumber: 149,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[23] = peers;
        $[24] = t4;
    } else {
        t4 = $[24];
    }
    const t5 = isAudioEnabled ? "secondary" : "danger";
    let t6;
    if ($[25] !== isAudioEnabled) {
        t6 = isAudioEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 158,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 158,
            columnNumber: 57
        }, this);
        $[25] = isAudioEnabled;
        $[26] = t6;
    } else {
        t6 = $[26];
    }
    let t7;
    if ($[27] !== t5 || $[28] !== t6 || $[29] !== toggleAudio) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t5,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: toggleAudio,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[27] = t5;
        $[28] = t6;
        $[29] = toggleAudio;
        $[30] = t7;
    } else {
        t7 = $[30];
    }
    const t8 = isVideoEnabled ? "secondary" : "danger";
    let t9;
    if ($[31] !== isVideoEnabled) {
        t9 = isVideoEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 177,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 177,
            columnNumber: 59
        }, this);
        $[31] = isVideoEnabled;
        $[32] = t9;
    } else {
        t9 = $[32];
    }
    let t10;
    if ($[33] !== t8 || $[34] !== t9 || $[35] !== toggleVideo) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t8,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: toggleVideo,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[33] = t8;
        $[34] = t9;
        $[35] = toggleVideo;
        $[36] = t10;
    } else {
        t10 = $[36];
    }
    const t11 = isScreenSharing ? "danger" : "primary";
    const t12 = isScreenSharing ? stopScreenShare : shareScreen;
    const t13 = `w-5 h-5 mr-2 ${isScreenSharing ? "animate-pulse" : ""}`;
    let t14;
    if ($[37] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorUp$3e$__["MonitorUp"], {
            className: t13
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    const t15 = isScreenSharing ? "Stop Sharing" : "Share Screen";
    let t16;
    if ($[39] !== t11 || $[40] !== t12 || $[41] !== t14 || $[42] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t11,
            size: "lg",
            className: "rounded-full px-8 shadow-xl shadow-indigo-500/20",
            onClick: t12,
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[39] = t11;
        $[40] = t12;
        $[41] = t14;
        $[42] = t15;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    const t17 = isRecording ? "danger" : "secondary";
    const t18 = `w-5 h-5 ${isRecording ? "fill-current animate-pulse" : ""}`;
    let t19;
    if ($[44] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
            className: t18
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[44] = t18;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== handleRecordToggle || $[47] !== t17 || $[48] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: t17,
            size: "lg",
            className: "rounded-full shadow-md transition-all",
            onClick: handleRecordToggle,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[46] = handleRecordToggle;
        $[47] = t17;
        $[48] = t19;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
            className: "w-5 h-5 md:mr-2"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden md:inline",
            children: "Leave"
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== handleLeave) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "danger",
            size: "lg",
            className: "rounded-full shadow-md",
            onClick: handleLeave,
            children: [
                t21,
                " ",
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[52] = handleLeave;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] !== t10 || $[55] !== t16 || $[56] !== t20 || $[57] !== t23 || $[58] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-4 py-4",
            children: [
                t7,
                t10,
                t16,
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[54] = t10;
        $[55] = t16;
        $[56] = t20;
        $[57] = t23;
        $[58] = t7;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== isRecording || $[61] !== recordedChunks) {
        t25 = !isRecording && recordedChunks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$studio$2f$Editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
            recordedChunks: recordedChunks
        }, void 0, false, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 272,
            columnNumber: 56
        }, this);
        $[60] = isRecording;
        $[61] = recordedChunks;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    let t26;
    if ($[63] !== t24 || $[64] !== t25 || $[65] !== t4) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-[calc(100vh-8rem)] gap-4",
            children: [
                t3,
                t4,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/studio/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[63] = t24;
        $[64] = t25;
        $[65] = t4;
        $[66] = t26;
    } else {
        t26 = $[66];
    }
    return t26;
}
_s(StudioPage, "Zp5XXrN2EcV04dcDChebynjUF3A=", false, function() {
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

//# sourceMappingURL=src_8ef78424._.js.map