import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Music, PlayCircle, ExternalLink } from 'lucide-react';
import { TRENDING_SONGS } from '@/constants';

export const metadata: Metadata = {
  title: 'Trending Music & Audio | AI Creator Hub',
  description: 'Discover the hottest sounds on Instagram & TikTok right now to boost your reach.',
};

export default function TrendingMusic() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-6">
          <Music className="text-blue-400" size={40} aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Trending Audio</h1>
        <p className="text-gray-400 max-w-lg mx-auto">Boost your reach by using these trending sounds before they peak.</p>
      </div>

      <div className="space-y-4">
        {TRENDING_SONGS.map((song, index) => (
          <AnimatedCard delay={index * 0.1} key={song.id}>
            <GlassCard className="flex flex-col sm:flex-row items-center justify-between gap-4 !p-4">
              
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center mr-4 shrink-0 shadow-lg" aria-hidden="true">
                  <Music className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{song.title}</h3>
                  <p className="text-xs text-gray-400">{song.artist}</p>
                </div>
              </div>

              <div className="flex-1 text-center hidden md:block px-4">
                 <p className="text-xs font-semibold text-blue-400 mb-1">{song.category}</p>
                 <p className="text-[11px] text-gray-500 line-clamp-1">{song.reason}</p>
              </div>

              <div className="flex w-full sm:w-auto space-x-2 shrink-0">
                <a 
                  href={song.spotify} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none bg-[#1DB954]/20 hover:bg-[#1DB954]/30 text-[#1DB954] text-xs font-bold py-2 px-4 rounded-lg flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-[#1DB954]"
                  aria-label={`Listen to ${song.title} on Spotify`}
                >
                  <PlayCircle size={14} className="mr-1.5" aria-hidden="true"/> Spotify
                </a>
                <a 
                  href={song.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none bg-[#FF0000]/20 hover:bg-[#FF0000]/30 text-[#FF0000] text-xs font-bold py-2 px-4 rounded-lg flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-[#FF0000]"
                  aria-label={`Watch ${song.title} on YouTube`}
                >
                  <ExternalLink size={14} className="mr-1.5" aria-hidden="true"/> YouTube
                </a>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
    </main>
  );
}
