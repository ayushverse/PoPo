'use client';

import { useState, useRef, useCallback } from 'react';

export function useRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const startRecording = useCallback((stream: MediaStream) => {
        if (!stream) return;

        setRecordedChunks([]);
        setRecordedChunks([]);

        let mimeType = 'video/webm; codecs=vp9,opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm; codecs=vp9'; // Fallback
            if (!MediaRecorder.isTypeSupported(mimeType)) {
                mimeType = 'video/webm'; // Generic fallback
            }
        }

        const mediaRecorder = new MediaRecorder(stream, {
            mimeType
        });

        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                setRecordedChunks((prev) => [...prev, event.data]);
            }
        };

        mediaRecorder.start(1000); // Collect 1s chunks
        setIsRecording(true);
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    }, []);

    const getBlob = useCallback(() => {
        return new Blob(recordedChunks, { type: 'video/webm' });
    }, [recordedChunks]);

    return {
        isRecording,
        startRecording,
        stopRecording,
        recordedChunks,
        getBlob
    };
}
