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
            <div className="max-w-7xl mx-auto backdrop-blur-xl bg-cyber-black/80 border border-cyber-cyan/30 rounded-none cyber-border flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="p-2 bg-cyber-cyan rounded-none group-hover:bg-cyber-pink transition-colors">
                        <Mic className="text-cyber-black w-6 h-6" />
                    </div>
                    <span className="text-xl font-black italic tracking-tighter text-white uppercase">
                        PoPo <span className="text-cyber-cyan group-hover:text-cyber-pink transition-colors">Studio</span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: 'Studio', href: '/studio', icon: Radio, color: 'hover:text-cyber-cyan' },
                        { name: 'Explore', href: '/explore', icon: Search, color: 'hover:text-cyber-pink' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400 ${item.color} transition-colors`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button className="p-2 hover:bg-cyber-cyan/10 rounded-none transition-colors border border-transparent hover:border-cyber-cyan/30">
                        <User className="w-5 h-5 text-cyber-cyan" />
                    </button>
                    <Link
                        href="/studio"
                        className="px-6 py-2 bg-cyber-yellow text-cyber-black text-xs font-black uppercase tracking-widest cyber-button-clip hover:bg-white transition-colors shadow-lg shadow-cyber-yellow/20"
                    >
                        Live Session
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
