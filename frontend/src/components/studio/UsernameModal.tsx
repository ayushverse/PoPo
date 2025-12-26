'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { User } from 'lucide-react';

interface UsernameModalProps {
    onSubmit: (username: string) => void;
}

export function UsernameModal({ onSubmit }: UsernameModalProps) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onSubmit(username.trim());
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                        <User className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Welcome to PoPo Studio
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        Enter your name to join the session
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                            type="text"
                            placeholder="Your name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-lg h-14"
                            autoFocus
                            maxLength={20}
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            This is how others will see you in chat
                        </p>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full h-14 text-lg"
                        disabled={!username.trim()}
                    >
                        Join Studio
                    </Button>
                </form>
            </div>
        </div>
    );
}
