'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Type, Loader2, Copy, Hash, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface ContentResult {
  caption: string;
  hashtags: string;
  hooks: string[];
  cta: string;
}

export default function ContentAssistant() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ContentResult | null>(null);

  const generateContent = () => {
    if (!topic) return;
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setResult({
        caption: `Ever feel like you're working 24/7 but not moving forward? 🛑\n\nI used to feel the exact same way until I changed this ONE habit. Read below to find out what it is 👇\n\n[Your Value Here]\n\nSave this post to remind yourself later! 📌`,
        hashtags: "#productivitytips #creatorhustle #mindsetshift #dailygrind #growthmindset",
        hooks: [
          "Stop doing [X] if you want to achieve [Y].",
          "The brutal truth about [Topic] nobody tells you.",
          "I tried [Method] for 30 days. Here's what happened."
        ],
        cta: "Comment 'GROW' and I'll send you the free guide."
      });
      setLoading(false);
      toast.success('Content generated!');
    }, 1500);
  };

  const copyToClip = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
          <Type className="text-green-400" size={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Content Assistant</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Generate viral captions, hooks, and hashtags tailored perfectly to your topic.</p>
      </div>

      <GlassCard className="mb-10">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-300">What is your post about?</label>
          <textarea 
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none h-32"
            placeholder="e.g. A reel about why consistency is better than intensity in the gym..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            onClick={generateContent}
            disabled={loading || !topic}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {loading ? <Loader2 className="animate-spin mr-2"/> : <Type className="mr-2"/>}
            {loading ? 'Drafting Magic...' : 'Generate Content Suite'}
          </button>
        </div>
      </GlassCard>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="!p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                 <h3 className="text-lg font-bold flex items-center"><Type className="mr-2 text-green-400" size={18}/> Viral Caption</h3>
                 <button onClick={() => copyToClip(result.caption)} className="text-gray-400 hover:text-white p-1"><Copy size={16}/></button>
              </div>
              <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed flex-1">{result.caption}</p>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard className="!p-6">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                   <h3 className="text-lg font-bold flex items-center"><Video className="mr-2 text-rose-400" size={18}/> Scroll-Stopping Hooks</h3>
                </div>
                <ul className="space-y-3">
                  {result.hooks.map((hook: string, i: number) => (
                    <li key={i} className="flex justify-between items-start group">
                      <p className="text-sm text-gray-300 pr-2">"{hook}"</p>
                      <button onClick={() => copyToClip(hook)} className="text-gray-500 hover:text-white shrink-0"><Copy size={14}/></button>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="!p-6">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                   <h3 className="text-lg font-bold flex items-center"><Hash className="mr-2 text-orange-400" size={18}/> Hashtags</h3>
                   <button onClick={() => copyToClip(result.hashtags)} className="text-gray-400 hover:text-white p-1"><Copy size={16}/></button>
                </div>
                <p className="text-sm text-blue-400">{result.hashtags}</p>
              </GlassCard>
            </div>
          </div>
          
        </motion.div>
      )}
    </main>
  );
}
