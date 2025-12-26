'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends HTMLMotionProps<"input"> {
    label?: string;
    error?: string;
}

export function Input({ className, label, error, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    {label}
                </label>
            )}
            <motion.input
                whileFocus={{ scale: 1.01 }}
                className={cn(
                    'w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-zinc-800 backdrop-blur-sm',
                    'focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm',
                    'placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-900 dark:text-white',
                    error && 'border-red-500 focus:ring-red-500/50 focus:border-red-500',
                    className
                )}
                {...props}
            />
            {error && (
                <span className="text-xs text-red-500 ml-1">{error}</span>
            )}
        </div>
    );
}
