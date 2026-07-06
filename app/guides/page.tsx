import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { GUIDES } from '@/constants';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Creator Growth Guides | AI Creator Hub',
  description: 'Learn how to grow your audience, master the algorithm, and monetize your content with our expert guides.',
};

export default function Guides() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Creator Guides' }]} />
      
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Creator Growth Guides</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Learn how to grow your audience, master the algorithm, and monetize your content.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide, index) => (
          <AnimatedCard delay={index * 0.1} key={guide.slug} className="h-full">
            <Link href={`/guides/${guide.slug}`} className="block h-full focus-visible:ring-4 focus-visible:ring-pink-500 rounded-2xl">
              <GlassCard className="h-full flex flex-col group relative hover:bg-white/[0.04]">
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-4">
                  <span>{guide.date}</span>
                  <span>•</span>
                  <span>{guide.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-white/90 group-hover:text-pink-400 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                  {guide.description}
                </p>
                <div className="text-pink-400 text-sm font-semibold">
                  Read Guide →
                </div>
              </GlassCard>
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </main>
  );
}
