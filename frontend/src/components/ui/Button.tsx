'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

import React from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'cyber';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    children: React.ReactNode;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-cyber-cyan text-cyber-black hover:bg-white shadow-[0_0_15px_rgba(0,255,255,0.5)]',
        secondary: 'bg-transparent text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10',
        ghost: 'bg-transparent hover:bg-cyber-cyan/5 text-gray-300',
        danger: 'bg-cyber-pink text-white hover:bg-pink-400 shadow-[0_0_15px_rgba(255,0,255,0.5)]',
        cyber: 'bg-cyber-yellow text-cyber-black hover:bg-white cyber-button-clip font-black italic uppercase tracking-tighter',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, x: variant === 'cyber' ? 5 : 0 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
                variant === 'cyber' ? '' : 'rounded-xl',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </motion.button>
    );
}
