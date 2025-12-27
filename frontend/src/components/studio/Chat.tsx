'use client';

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// Message structure for real-time chat
export type ChatMessage = {
    id: string;
    userId: string;
    userName: string;
    message: string;
    timestamp: number;
};

interface ChatProps {
    messages: ChatMessage[];
    onSendMessage: (message: string) => void;
    currentUserId: string;
}

/**
 * Real-time chat component for studio collaboration
 * Supports auto-scroll, keyboard shortcuts, and message formatting
 */
export function Chat({ messages, onSendMessage, currentUserId }: ChatProps) {
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll when new messages arrive
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (inputMessage.trim()) {
            onSendMessage(inputMessage);
            setInputMessage('');
        }
    };

    // Send message on Enter, allow Shift+Enter for new line
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Format timestamp to readable time (HH:MM)
    const formatTime = (timestamp: number) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold dark:text-white">Chat</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-8">
                        <p>No messages yet</p>
                        <p className="text-sm">Start the conversation!</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex flex-col ${msg.userId === currentUserId ? 'items-end' : 'items-start'
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.userId === currentUserId
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                                    }`}
                            >
                                {msg.userId !== currentUserId && (
                                    <p className="text-xs font-semibold mb-1 opacity-70">
                                        {msg.userName}
                                    </p>
                                )}
                                <p className="text-sm break-words">{msg.message}</p>
                            </div>
                            <span className="text-xs text-gray-400 mt-1 px-2">
                                {formatTime(msg.timestamp)}
                            </span>
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                    <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1"
                    />
                    <Button
                        onClick={handleSend}
                        disabled={!inputMessage.trim()}
                        className="rounded-full"
                        size="lg"
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
