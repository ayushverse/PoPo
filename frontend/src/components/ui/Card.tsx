'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    isCyber?: boolean;
}

export function Card({ className, children, isCyber, ...props }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                'backdrop-blur-xl border transition-all duration-500',
                isCyber
                    ? 'bg-cyber-black/90 border-cyber-cyan/50 cyber-border p-8'
                    : 'bg-zinc-900/80 border-white/5 rounded-2xl p-6',
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
