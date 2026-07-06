import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { CopyButton } from '@/components/ui/CopyButton';
import { PROMPT_CATEGORIES } from '@/constants';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AdSlot } from '@/components/ui/AdSlot';

interface Props {
  params: { category: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const category = PROMPT_CATEGORIES.find((c) => c.slug === params.category);
  if (!category) return { title: 'Not Found' };
  
  return {
    title: `${category.name} Prompts | AI Creator Hub`,
    description: `Browse ${category.prompts.length} professional ${category.name.toLowerCase()} prompts.`,
  };
}

export function generateStaticParams() {
  return PROMPT_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default function PromptCategoryPage({ params }: Props) {
  const category = PROMPT_CATEGORIES.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <Breadcrumbs items={[
        { label: 'Prompt Library', href: '/prompt-library' },
        { label: category.name }
      ]} />

      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          {category.name} Prompts
          {category.isPro && (
             <span className="ml-4 bg-yellow-500/20 text-yellow-400 text-sm font-bold px-3 py-1 rounded">PRO</span>
          )}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {category.prompts.map((prompt, pIndex) => (
          <AnimatedCard delay={pIndex * 0.1} key={pIndex} className="h-full">
            <GlassCard className="h-full flex flex-col relative group">
              <p className="text-sm text-gray-300 font-mono leading-relaxed mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                {prompt}
              </p>
              <div className="mt-auto flex justify-end">
                <CopyButton 
                  text={prompt} 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 flex items-center text-xs font-bold transition-colors"
                />
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      
      <AdSlot />
    </main>
  );
}
