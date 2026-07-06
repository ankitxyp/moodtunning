'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Sparkles, Upload, Loader2, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ImageEnhancementTool() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePrompts = async () => {
    if (!image) return;
    setLoading(true);
    
    // Simulating API call to Gemini/AI for prompt generation
    setTimeout(() => {
      setResult({
        realistic: "A hyper-realistic 8k photograph of this exact scene, shot on Sony A7RV, 35mm lens, natural daylight, incredibly detailed textures.",
        cinematic: "A cinematic film still of this scene, dramatic volumetric lighting, anamorphic lens flare, moody color grading, blade runner aesthetic.",
        luxury: "High-end commercial editorial shot of this subject, studio lighting, pristine white background, sharp focus, glossy magazine style.",
        anime: "Studio Ghibli style anime illustration of this scene, soft pastel colors, whimsical atmosphere, highly detailed painted background."
      });
      setLoading(false);
      toast.success('Prompts generated successfully!');
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/20 mb-6">
          <Sparkles className="text-purple-400" size={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Enhancement Prompts</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Upload a basic photo and generate high-end Midjourney/DALL-E prompts to recreate it in premium styles.</p>
      </div>

      <GlassCard className="mb-8">
        {!image ? (
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-700/50 rounded-2xl cursor-pointer hover:bg-white/5 transition relative overflow-hidden group">
            <Upload className="w-10 h-10 mb-3 text-purple-500 group-hover:scale-110 transition-transform"/>
            <p className="mb-2 text-sm text-gray-400 font-semibold">Click to upload reference image</p>
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </label>
        ) : (
          <div className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
              <img src={image} alt="Reference" className="w-full h-full object-contain bg-black/50" />
              <button 
                onClick={() => setImage(null)}
                className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-black transition"
              >
                Change Image
              </button>
            </div>
            
            {!result && (
              <button
                onClick={generatePrompts}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center shadow-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                {loading ? <Loader2 className="animate-spin mr-2"/> : <Sparkles className="mr-2"/>}
                {loading ? 'Analyzing Image...' : 'Generate Styles'}
              </button>
            )}
          </div>
        )}
      </GlassCard>

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h3 className="text-xl font-bold mb-4 px-2">Generated Prompts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(result).map(([style, prompt], i) => (
              <GlassCard key={style} className="!p-5">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">{style}</p>
                <p className="text-sm text-gray-300 font-mono bg-black/30 p-3 rounded-lg border border-white/5 mb-4 line-clamp-4">
                  {prompt as string}
                </p>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(prompt as string);
                    toast.success(`${style} prompt copied!`);
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center transition"
                >
                  <Copy size={14} className="mr-2" /> Copy Prompt
                </button>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      )}
    </main>
  );
}
