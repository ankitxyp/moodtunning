import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { LayoutTemplate, PlayCircle, Lock, Unlock } from 'lucide-react';
import { TEMPLATES } from '@/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AdSlot } from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Video Templates | AI Creator Hub',
  description: 'Pre-built editing templates to save you hours of work while maintaining professional quality.',
};

export default function VideoTemplates() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
      <Breadcrumbs items={[{ label: 'Video Templates' }]} />
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="p-4 bg-orange-500/20 rounded-full mb-4">
          <LayoutTemplate size={40} className="text-orange-400" aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Video Template Hub</h1>
        <p className="text-gray-400 max-w-xl">Pre-built editing templates to save you hours of work while maintaining professional quality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {TEMPLATES.map((tpl, i) => (
          <AnimatedCard delay={i * 0.1} key={tpl.id}>
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
              <div className={`h-48 w-full ${tpl.imageClass} relative flex items-center justify-center`} aria-hidden="true">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <PlayCircle size={48} className="text-white/80 relative z-10" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full flex items-center">
                  {tpl.isPro ? (
                    <><Lock size={12} className="text-yellow-400 mr-1" /><span className="text-xs font-bold text-yellow-400">Pro</span></>
                  ) : (
                    <><Unlock size={12} className="text-green-400 mr-1" /><span className="text-xs font-bold text-green-400">Free</span></>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">{tpl.category}</span>
                <h3 className="text-2xl font-bold mb-2">{tpl.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1">{tpl.description}</p>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-auto">
                  <p className="text-xs text-gray-500 mb-1 font-semibold">How to use:</p>
                  <p className="text-sm text-gray-300">{tpl.usage}</p>
                </div>
              </div>
            </GlassCard>
          </AnimatedCard>
        ))}
      </div>
      
      <AdSlot />
    </main>
  );
}
