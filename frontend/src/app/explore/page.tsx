'use client';

import { motion } from 'framer-motion';
import { Play, Star, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Explore() {
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
            title: 'Editing with AI',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    Explore PoPo
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    See what creators are building with the next-gen podcast studio.
                </p>
            </motion.div>

            {/* Featured Demo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-20"
            >
                <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900 ring-1 ring-white/10 group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full mb-2">FEATURED</span>
                        <h2 className="text-3xl font-bold text-white mb-2">PoPo Studio Tour 2024</h2>
                        <p className="text-gray-200">A complete walkthrough of all the new AI-powered features.</p>
                    </div>
                </div>
            </motion.div>

            {/* Categories */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <TrendingUp className="w-6 h-6 text-indigo-500" />
                Trending Tutorials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demos.map((demo, index) => (
                    <motion.div
                        key={demo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <div className={`aspect-video w-full ${demo.thumbnail} relative group cursor-pointer`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                                    {demo.duration}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1 dark:text-white line-clamp-1">{demo.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{demo.author}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        4.9
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {demo.views}
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
