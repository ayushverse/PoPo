'use client';

import Link from 'next/link';
import { Mic, Radio, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-2xl shadow-lg flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                        <Mic className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                        PoPo Studio
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Studio', href: '/studio', icon: Radio },
                        { name: 'Explore', href: '/explore', icon: Search },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                        <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <Link
                        href="/studio"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        Start Recording
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
