import { Metadata } from 'next';
import { Sparkles, TrendingUp, ArrowRight, CheckCircle2, Play, Layout, Music, FileText, Image as ImageIcon, Video, Calendar, Type, Hash, ShieldCheck, Zap, ChevronRight, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Accordion } from '@/components/ui/Accordion';
import { TOOLS, TRENDING_CARDS, BENEFITS, VIRAL_REELS, TRENDING_SONGS, PROMPT_CATEGORIES, GUIDES } from '@/constants';

export const metadata: Metadata = {
  title: 'AI Creator Hub | Viral Content Generator & AI Tools',
  description: 'Everything creators need in one place. Analyze aesthetics, generate viral hooks, find trending audio, and enhance your visuals instantly.',
};

const FAQ_ITEMS = [
  { question: "How does the AI Image Analyzer work?", answer: "Our advanced vision models scan your uploaded image to detect color palettes, mood, lighting, and subject matter. It then matches these data points against current social media trends to recommend the best captions, hashtags, and background music." },
  { question: "Are the tools free to use?", answer: "Yes! The Free Starter plan gives you 10 AI Analysis credits per month and access to our standard templates and free prompts. If you need more volume, you can upgrade to Creator Pro for unlimited access." },
  { question: "How often are the trending sounds updated?", answer: "Our algorithm monitors TikTok and Instagram Reels daily to detect emerging audio trends before they peak. The list is updated every 24 hours." },
  { question: "Can I use the video templates on mobile?", answer: "Absolutely. All of our CapCut and Instagram Reels templates are designed to be mobile-first and open directly in their respective apps on your phone." },
  { question: "What do I get with Creator Pro?", answer: "Creator Pro unlocks unlimited AI analysis, exclusive access to our highest-converting 'Pro' prompt categories, premium video templates, and removes all advertisements from the platform." }
];

export default function Home() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-6xl mx-auto space-y-32">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-8 mt-10 md:mt-24">
        <AnimatedCard delay={0}>
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5 mb-4 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            <Sparkles size={14} className="text-pink-400" aria-hidden="true" />
            <span className="text-xs font-bold text-pink-300 tracking-wider uppercase">The Ultimate Platform</span>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            AI Creator Hub
            <span className="block text-3xl md:text-5xl text-gray-400 mt-4 font-extrabold tracking-normal">Everything creators need in one place.</span>
          </h1>
        </AnimatedCard>
        
        <AnimatedCard delay={0.2}>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Stop guessing what works. Use AI to analyze aesthetics, generate viral hooks, 
            discover trending audio, and edit like a professional.
          </p>
        </AnimatedCard>
        
        <AnimatedCard delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/analyzer" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center focus-visible:ring-4 focus-visible:ring-pink-500 shadow-lg shadow-pink-500/25">
              Upload Image <ArrowRight size={18} className="ml-2" aria-hidden="true"/>
            </Link>
            <Link href="#tools" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center focus-visible:ring-4 focus-visible:ring-pink-500 backdrop-blur-sm">
              Explore Tools
            </Link>
          </div>
        </AnimatedCard>
      </section>

      {/* 2. Quick Action Tools */}
      <section id="tools" className="space-y-10 scroll-mt-32">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Quick Creator Tools</h2>
          <p className="text-gray-400">Your professional suite for content generation.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <AnimatedCard delay={index * 0.05} key={tool.title} className="h-full">
                <Link href={tool.href} className="focus-visible:ring-4 focus-visible:ring-pink-500 rounded-2xl block h-full">
                  <GlassCard className="h-full group hover:bg-white/[0.04] transition-colors flex flex-col items-center text-center p-6 md:p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} p-3.5 mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-pink-400 transition-colors">{tool.title}</h3>
                  </GlassCard>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* 3. Trending Today */}
      <section className="space-y-10 relative">
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10" aria-hidden="true" />
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <TrendingUp className="mr-3 text-blue-400" aria-hidden="true"/> Trending Today
            </h2>
            <p className="text-gray-400">What&apos;s going viral across platforms right now.</p>
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-8 snap-x scrollbar-hide focus-visible:ring-4 focus-visible:ring-blue-500 rounded-xl" tabIndex={0} aria-label="Trending items carousel">
          {TRENDING_CARDS.map((card, i) => (
            <AnimatedCard delay={i * 0.1} key={i} className="snap-center shrink-0 w-72">
              <GlassCard className="relative overflow-hidden group h-full hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-md backdrop-blur-md font-bold">
                    {card.views}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-16 group-hover:scale-110 transition-transform">
                  <Play size={20} className="text-blue-400 ml-1" aria-hidden="true" />
                </div>
                <p className="text-xs text-blue-400 font-bold mb-1 uppercase tracking-wider">{card.category}</p>
                <h3 className="text-lg font-bold">{card.title}</h3>
              </GlassCard>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 4. Viral Hooks Preview */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Video className="mr-2 text-pink-500" size={24}/> Viral Hooks
            </h2>
            <Link href="/trending-reels" className="text-sm font-semibold text-pink-400 hover:text-pink-300 flex items-center">
              View All <ChevronRight size={16}/>
            </Link>
          </div>
          <div className="space-y-4">
            {VIRAL_REELS.slice(0, 2).map((reel, i) => (
              <GlassCard key={i} className="p-5 flex items-start space-x-4 hover:bg-white/5 transition-colors">
                 <div className={`w-16 h-16 rounded-lg shrink-0 ${reel.thumbnail} flex items-center justify-center`}>
                   <Play className="text-white" size={20} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-1">{reel.title}</h3>
                   <p className="text-xs text-gray-400 line-clamp-2">&quot;{reel.hook}&quot;</p>
                 </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 5. Trending Songs Preview */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Music className="mr-2 text-purple-500" size={24}/> Trending Sounds
            </h2>
            <Link href="/trending-music" className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center">
              View All <ChevronRight size={16}/>
            </Link>
          </div>
          <div className="space-y-4">
            {TRENDING_SONGS.slice(0, 3).map((song, i) => (
              <GlassCard key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shrink-0">
                     <Music size={16} className="text-white"/>
                   </div>
                   <div>
                     <h3 className="font-bold text-sm leading-tight">{song.title}</h3>
                     <p className="text-xs text-gray-400">{song.artist}</p>
                   </div>
                 </div>
                 <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded uppercase">{song.category}</span>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>

      {/* 6. Prompt Library Preview */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            <ImageIcon className="mr-3 text-yellow-500" size={36}/> AI Prompt Library
          </h2>
          <p className="text-gray-400">Copy & paste formulas for Midjourney and DALL-E.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROMPT_CATEGORIES.map((cat, i) => (
            <AnimatedCard delay={i * 0.1} key={cat.slug} className="h-full">
              <Link href={`/prompt-library/${cat.slug}`} className="block h-full focus-visible:ring-4 focus-visible:ring-yellow-500 rounded-2xl">
                <GlassCard className="h-full group hover:bg-white/5 transition-colors relative">
                  {cat.isPro && (
                    <div className="absolute top-4 right-4 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded text-[10px] font-bold flex items-center">
                      <Lock size={10} className="mr-1"/> PRO
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 pr-12">{cat.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{cat.prompts.length} professional prompts</p>
                  <div className="text-yellow-500 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Browse Prompts <ChevronRight size={16} className="ml-1"/>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* 7. Creator Tips Preview */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold flex items-center">
              <FileText className="mr-3 text-emerald-500" size={32}/> Growth Guides
            </h2>
            <p className="text-gray-400">Strategies from top creators.</p>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 flex items-center mb-1">
            View All <ChevronRight size={16}/>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {GUIDES.slice(0, 3).map((guide, i) => (
            <AnimatedCard delay={i * 0.1} key={guide.slug} className="h-full">
              <Link href={`/guides/${guide.slug}`} className="block h-full">
                <GlassCard className="h-full group hover:bg-white/5 transition-colors flex flex-col">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-3">
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">{guide.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 flex-1">{guide.description}</p>
                </GlassCard>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* 8. AI Showcase */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20 rounded-3xl -z-10" />
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How the AI Analyzer Works</h2>
          <p className="text-gray-400">One image. Hundreds of data points.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <ImageIcon size={32} className="text-gray-300"/>
            </div>
            <h3 className="font-bold">1. Upload</h3>
            <p className="text-sm text-gray-400">Provide any image or video thumbnail.</p>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-pink-500/10 border border-pink-500/30 rounded-2xl flex items-center justify-center">
              <Zap size={32} className="text-pink-400"/>
            </div>
            <h3 className="font-bold">2. Analyze</h3>
            <p className="text-sm text-gray-400">Get mood, aesthetic, audio, and captions.</p>
          </div>
        </div>
      </section>

      {/* 9. Why Use AI Creator Hub */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Why top creators use our platform.</h2>
          <p className="text-gray-400 text-lg">We&apos;ve consolidated the fragmented workflow of modern content creation into a single, powerful AI-driven platform.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle2 className="text-green-400 shrink-0" size={20} aria-hidden="true" />
                <span className="text-sm font-medium text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl -z-10 rounded-full" aria-hidden="true" />
          <GlassCard className="p-8 border-white/10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-white" size={24}/>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Creator Advantage</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              CreatorHub is designed to be the ultimate companion for digital creators. By utilizing state-of-the-art artificial intelligence models, we provide instant, data-backed insights for visual grading, music selection, and copy generation. 
              <br/><br/>
              Whether you&apos;re building a personal brand or managing professional social media accounts, our tools help you stay ahead of the algorithm and produce high-quality content at scale.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about the platform.</p>
        </div>
        <AnimatedCard delay={0.2}>
          <Accordion items={FAQ_ITEMS} />
        </AnimatedCard>
      </section>

    </main>
  );
}
