import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing & Pro Subscription | AI Creator Hub',
  description: 'Unlock unlimited credits, premium prompts, and exclusive CapCut templates with Creator Pro.',
};

export default function Pricing() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Start for free, upgrade when you need more power to grow your audience.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Free Tier */}
        <AnimatedCard delay={0.1}>
          <GlassCard className="h-full flex flex-col p-8 border-white/5 relative">
            <h2 className="text-2xl font-bold mb-2">Free Starter</h2>
            <div className="text-4xl font-extrabold mb-6">$0<span className="text-lg text-gray-500 font-medium">/mo</span></div>
            <p className="text-gray-400 mb-8 text-sm">Perfect for hobbyists and new creators finding their style.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {['10 AI Analysis Credits / month', 'Access to Free Prompts', 'Standard Video Templates', 'Community Support'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-gray-500 shrink-0 mr-3 mt-0.5" size={18} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors">Current Plan</button>
          </GlassCard>
        </AnimatedCard>

        {/* Pro Tier */}
        <AnimatedCard delay={0.2}>
          <GlassCard className="h-full flex flex-col p-8 border-pink-500/30 bg-gradient-to-b from-pink-500/10 to-transparent relative overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.1)]">
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-2 text-pink-400 flex items-center"><Zap size={20} className="mr-2"/> Creator Pro</h2>
            <div className="text-4xl font-extrabold mb-6">$19<span className="text-lg text-gray-400 font-medium">/mo</span></div>
            <p className="text-gray-300 mb-8 text-sm">For serious creators who want to scale their content engine.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {['Unlimited AI Analysis Credits', 'Unlock all PRO Prompts', 'Unlock all PRO CapCut Templates', 'Priority Email Support', 'Early access to new tools', 'Zero Advertisements'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-pink-400 shrink-0 mr-3 mt-0.5" size={18} />
                  <span className="text-white text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold transition-all hover:scale-[1.02] shadow-lg">Upgrade to Pro</button>
          </GlassCard>
        </AnimatedCard>
      </div>
    </main>
  );
}
