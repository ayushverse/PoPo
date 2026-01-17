'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mic, Terminal, Activity, Waves, Cpu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12 text-center relative z-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 backdrop-blur-sm mb-4">
          <Terminal className="w-4 h-4 text-cyber-cyan" />
          <span className="text-sm font-medium text-cyber-cyan uppercase tracking-[0.2em]">
            System Status: Online
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter pb-2">
          <span className="block text-white">YOUR STUDIO.</span>
          <span className="block text-glitch text-cyber-cyan">ANYWHERE.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono">
          [PROTOCOL: PODCASTING] <br />
          Record high-quality video directly from your browser.
          Zero latency. Infinite scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link href="/studio">
            <Button variant="cyber" size="lg" className="text-xl h-16 px-12">
              Access Studio <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="secondary" size="lg" className="rounded-none border-2 h-16 px-12 uppercase font-bold tracking-widest">
              Explore Network
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-20">
        {[
          {
            icon: Waves,
            title: "PRO AUDIO",
            color: "text-cyber-cyan",
            description: "Advanced noise suppression and local recording for studio-quality sound."
          },
          {
            icon: Activity,
            title: "ZERO LATENCY",
            color: "text-cyber-pink",
            description: "Zero-latency collaboration with up to 4 guests in 4K quality."
          },
          {
            icon: Cpu,
            title: "PRO STUDIO",
            color: "text-cyber-yellow",
            description: "Professional grade recording tools for creators of all levels."
          }
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <Card isCyber className="group hover:-translate-y-2 transition-transform duration-300">
              <div className={`p-4 bg-white/5 w-fit rounded-none mb-6 group-hover:bg-white/10 transition-colors`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className={`text-2xl font-black mb-3 italic tracking-tight ${feature.color}`}>{feature.title}</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.description}</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-current transition-all duration-500 opacity-50" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
