'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mic, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12 text-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 border border-indigo-200 dark:border-white/10 backdrop-blur-sm mb-4">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">
            The Future of Podcast Creation
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 pb-2">
          Your Studio. <br /> Anywhere.
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Record high-quality video podcasts directly from your browser.
          Real-time collaboration, instant editing, and professional polish.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/studio">
            <Button size="lg" className="rounded-full text-lg h-14 px-8">
              Start Creating <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="ghost" size="lg" className="rounded-full text-lg h-14 px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
        {[
          {
            icon: Mic,
            title: "Crystal Clear Audio",
            description: "Advanced noise suppression and local recording for studio-quality sound."
          },
          {
            icon: Zap,
            title: "Real-time Magic",
            description: "Zero-latency collaboration with up to 4 guests in 4K quality."
          },
          {
            icon: Sparkles,
            title: "AI Polish",
            description: "Automated editing, mixing, and transcriptions in seconds."
          }
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <Card className="h-full hover:border-indigo-500/30 transition-colors text-left group">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 w-fit rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
