import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Library, ArrowRight } from 'lucide-react';
import { PROMPT_CATEGORIES } from '@/constants';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'AI Prompt Library Categories | AI Creator Hub',
  description: 'Browse our categorized library of Midjourney and DALL-E prompts for cinematic, product, and anime styles.',
};

export default function PromptLibrary() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Prompt Library' }]} />
      
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/20 mb-6">
          <Library className="text-yellow-400" size={40} aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Prompt Library</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Select a category to browse tested prompts for Midjourney and DALL-E.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROMPT_CATEGORIES.map((category, index) => (
          <AnimatedCard delay={index * 0.1} key={category.slug} className="h-full">
            <Link href={`/prompt-library/${category.slug}`} className="block h-full focus-visible:ring-4 focus-visible:ring-pink-500 rounded-2xl">
              <GlassCard className="h-full flex flex-col group relative">
                {category.isPro && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    PRO
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-2 text-white/90">
                  {category.name}
                </h2>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {category.prompts.length} professional prompts
                </p>
                <div className="flex items-center text-pink-400 text-sm font-semibold group-hover:text-pink-300 transition-colors">
                  View Prompts <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </main>
  );
}
