'use client';

import { motion } from 'framer-motion';
import { Play, Compass, Layout, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

/**
 * Explore page showcasing demo videos and tutorials for PoPo podcast studio
 * Features trending content and a featured video showcase
 */
export default function Explore() {
    // Demo video data - in production, this would come from API/CMS
    const demos = [
        {
            id: 1,
            title: 'Full Workflow Demo',
            author: 'PoPo Team',
            views: '12k',
            duration: '5:30',
            thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        },
        {
            id: 2,
            title: 'Pro Editing Tips',
            author: 'Sarah Creator',
            views: '8.5k',
            duration: '3:15',
            thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-600',
        },
        {
            id: 3,
            title: 'Remote Guest Setup',
            author: 'Tech Talk',
            views: '15k',
            duration: '4:45',
            thumbnail: 'bg-gradient-to-br from-amber-500 to-orange-600',
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
                    Explore Network
                </h1>
                <p className="text-xl text-gray-400 font-mono">
                    [PROTOCOL: OBSERVATION] <br />
                    Reviewing creator transmission data.
                </p>
            </motion.div>

            {/* Featured Demo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-20"
            >
                <div className="relative aspect-video w-full max-w-4xl mx-auto border-2 border-cyber-cyan/30 bg-cyber-black overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-cyber-cyan/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyber-cyan/40 transition-all duration-300">
                            <Play className="w-8 h-8 text-cyber-cyan fill-cyber-cyan ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                        <span className="inline-block px-3 py-1 bg-cyber-pink text-white text-[10px] font-black tracking-[0.2em] mb-2 uppercase">Priority Alpha</span>
                        <h2 className="text-3xl font-black italic tracking-tighter text-white mb-2 uppercase">PoPo Studio Tour 2026</h2>
                        <p className="text-gray-400 font-mono text-sm max-w-md">Comprehensive walkthrough of video processing & studio synchronization.</p>
                    </div>
                </div>
            </motion.div>

            {/* Categories */}
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-widest text-cyber-cyan">
                <Compass className="w-6 h-6" />
                Transmission Log
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {demos.map((demo, index) => (
                    <motion.div
                        key={demo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                        <Card isCyber className="overflow-hidden group">
                            <div className={`aspect-video w-full ${demo.thumbnail} relative group cursor-pointer border-b border-cyber-cyan/20`}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black text-cyber-cyan text-[10px] font-mono border border-cyber-cyan/30">
                                    {demo.duration}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur flex items-center justify-center">
                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-black italic text-lg mb-1 line-clamp-1 uppercase text-white">{demo.title}</h3>
                                <p className="text-xs text-gray-500 font-mono mb-4">ID: {demo.author.toUpperCase()}</p>
                                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                                    <span className="flex items-center gap-1 text-cyber-pink">
                                        <Layout className="w-3 h-3" />
                                        v1.0.4
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        {demo.views.toUpperCase()} UNITS
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-4 dark:text-white">Ready to create?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">Join thousands of creators using PoPo today.</p>
                <Button size="lg" className="rounded-full px-8">
                    Launch Studio
                </Button>
            </div>
        </div>
    );
}
