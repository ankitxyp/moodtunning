import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { CopyButton } from '@/components/ui/CopyButton';
import { Play, TrendingUp } from 'lucide-react';
import { VIRAL_REELS } from '@/constants';

export const metadata: Metadata = {
  title: 'Trending Reels & Hooks | AI Creator Hub',
  description: 'The top performing short-form video formats analyzed for you to replicate. Discover viral hooks and captions.',
};

export default function TrendingReels() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold flex items-center mb-4">
          <TrendingUp className="mr-4 text-pink-500" size={40} aria-hidden="true" />
          Viral Reels Today
        </h1>
        <p className="text-gray-400">The top performing short-form video formats analyzed for you to replicate.</p>
      </div>

      <div className="space-y-6">
        {VIRAL_REELS.map((reel, index) => (
          <AnimatedCard delay={index * 0.1} key={reel.id}>
            <GlassCard className="flex flex-col md:flex-row gap-6">
              {/* Fake Thumbnail */}
              <div className={`w-full md:w-48 h-64 rounded-xl ${reel.thumbnail} flex items-center justify-center shadow-inner relative overflow-hidden`} aria-hidden="true">
                <div className="absolute inset-0 bg-black/20" />
                <Play className="text-white/80 w-12 h-12 relative z-10" />
                <span className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white z-10">
                  {reel.category}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{reel.title}</h3>
                  <p className="text-sm text-pink-400 font-medium">Why it&apos;s trending: <span className="text-gray-300 font-normal">{reel.reason}</span></p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">Viral Hook</p>
                  <p className="font-medium">&quot;{reel.hook}&quot;</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10 relative group">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Caption Idea</p>
                    <CopyButton text={reel.caption} iconOnly={true} className="p-1" />
                  </div>
                  <p className="text-sm text-gray-300">{reel.caption}</p>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </main>
  );
}
