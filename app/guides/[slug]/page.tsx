import { Metadata } from 'next';
import { GUIDES } from '@/constants';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AdSlot } from '@/components/ui/AdSlot';
import { GlassCard } from '@/components/ui/GlassCard';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return { title: 'Not Found' };
  
  return {
    title: `${guide.title} | AI Creator Hub`,
    description: guide.description,
  };
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

export default function GuidePage({ params }: Props) {
  const guide = GUIDES.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-3xl mx-auto">
      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: guide.title }
      ]} />

      <article className="mb-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{guide.title}</h1>
          <div className="flex items-center space-x-4 text-sm font-semibold text-gray-500">
            <span>{guide.date}</span>
            <span>•</span>
            <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full">{guide.readTime}</span>
          </div>
        </header>

        <AdSlot className="mb-10" />

        <div className="prose prose-invert prose-pink max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
            {guide.description}
          </p>
          <div className="text-gray-300 leading-relaxed space-y-6">
            {/* Mock content rendering */}
            <p>{guide.content}</p>
            <p>
              In today&apos;s fast-paced digital world, securing user attention is more difficult than ever.
              Platforms like TikTok and Instagram have fundamentally rewired how content is consumed.
              The algorithm heavily favors one specific metric above all others: <strong>Average View Duration (AVD)</strong>.
            </p>
            <h2>The Secret Sauce</h2>
            <p>
              If you can keep a viewer watching for the first 3 seconds, they are 80% more likely to finish the video.
              This means your visual hook, audio hook, and text hook must all align perfectly in that window.
            </p>
          </div>
        </div>
      </article>

      <section>
        <h3 className="text-2xl font-bold mb-6">Related Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/trending-reels">
            <GlassCard className="hover:bg-white/5 transition-colors">
              <h4 className="font-bold text-white mb-2">Find Viral Hooks</h4>
              <p className="text-xs text-gray-400">See what&apos;s trending right now.</p>
            </GlassCard>
          </Link>
          <Link href="/tools/content-assistant">
            <GlassCard className="hover:bg-white/5 transition-colors">
              <h4 className="font-bold text-white mb-2">Generate Captions</h4>
              <p className="text-xs text-gray-400">Let AI write your next viral caption.</p>
            </GlassCard>
          </Link>
        </div>
      </section>
    </main>
  );
}
