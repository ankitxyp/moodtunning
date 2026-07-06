import { TrendingSong, ViralReel, VideoTemplate, PromptCategory } from '@/types';
import { Sparkles, Type, Hash, Video, Music, Zap, Clock } from 'lucide-react';
import { Image as ImageIcon } from 'lucide-react'; // aliased to avoid collision with global Image

export const SITE_URL = 'https://creatorhub.example.com';

export const TOOLS = [
  {
    title: 'AI Image Analyzer',
    description: 'Find the perfect aesthetic, mood, and music for your photos.',
    icon: ImageIcon,
    href: '/analyzer',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'AI Enhancement Prompts',
    description: 'Transform regular photos into cinematic masterpieces with AI.',
    icon: Sparkles,
    href: '/tools/image-enhancement',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Caption Generator',
    description: 'Generate viral, engaging captions for any context.',
    icon: Type,
    href: '/tools/content-assistant',
    color: 'from-green-500 to-emerald-400'
  },
  {
    title: 'Hashtag Optimizer',
    description: 'Find the best performing hashtags for maximum reach.',
    icon: Hash,
    href: '/tools/content-assistant',
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Viral Reel Ideas',
    description: 'Discover trending hook ideas for short-form video.',
    icon: Video,
    href: '/trending-reels',
    color: 'from-pink-500 to-rose-400'
  },
  {
    title: 'Trending Music',
    description: 'The hottest sounds on Instagram & TikTok right now.',
    icon: Music,
    href: '/trending-music',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Prompt Library',
    description: 'Hundreds of tested prompts for Midjourney & DALL-E.',
    icon: Zap,
    href: '/prompt-library',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Best Posting Time',
    description: 'Analyze when your audience is most active.',
    icon: Clock,
    href: '/analyzer',
    color: 'from-teal-400 to-emerald-500'
  },
];

export const TRENDING_CARDS = [
  { title: 'Top 5 Reel Hooks', category: 'Strategy', views: '2.1M' },
  { title: 'Cyberpunk Aesthetic', category: 'AI Image', views: '1.4M' },
  { title: 'Lo-Fi Chill Beats', category: 'Audio', views: '890K' },
  { title: 'Luxury Car Edits', category: 'Template', views: '3.2M' },
];

export const BENEFITS = [
  'Save Time on Content Creation',
  'Increase Engagement Rates',
  'Never Run Out of Ideas',
  'Professional Aesthetic Grading',
  'Stay Ahead of Trends',
  'Data-Driven Music Choices'
];

export const VIRAL_REELS: ViralReel[] = [
  {
    id: 1,
    title: "The '3 Second Hook' Method",
    category: "Growth Strategy",
    reason: "High retention rate due to fast-paced text overlays.",
    hook: "Stop scrolling! Here's the secret to...",
    caption: "Try this 3-second hook method on your next Reel to skyrocket retention. Save this for later! 📌 #growthstrategy",
    thumbnail: "bg-purple-600"
  },
  {
    id: 2,
    title: "Cinematic Coffee Pour",
    category: "Aesthetic / Lifestyle",
    reason: "ASMR audio paired with slow-motion visuals is trending heavily.",
    hook: "(Visual Hook - No text needed)",
    caption: "Morning rituals ☕ The lighting today was perfect. #coffeelover #cinematic",
    thumbnail: "bg-amber-700"
  },
  {
    id: 3,
    title: "AI Tools Expose",
    category: "Tech / Educational",
    reason: "High save rate as people want to bookmark the tools.",
    hook: "5 AI tools that feel illegal to know",
    caption: "These AI tools will save you 10+ hours a week. Which one is your favorite? ⬇️",
    thumbnail: "bg-blue-600"
  },
  {
    id: 4,
    title: "A Day in the Life (Fast Cut)",
    category: "Vlog",
    reason: "High engagement from relatable, realistic daily routines.",
    hook: "Come with me on a realistic 9-5 day",
    caption: "Not every day is glamorous, and that's okay. Here's a real day in the life. 💻✨",
    thumbnail: "bg-emerald-600"
  },
  {
    id: 5,
    title: "POV: You finally started",
    category: "Motivation",
    reason: "Strong emotional resonance and highly shareable to stories.",
    hook: "POV: You stopped caring about opinions and started your dream",
    caption: "Your reminder to just start. The time will pass anyway. 🚀 #motivation",
    thumbnail: "bg-rose-600"
  }
];

export const TRENDING_SONGS: TrendingSong[] = [
  {
    id: 1,
    title: "Pedro",
    artist: "Jaxomy, Agatino Romero, Raffaella Carrà",
    category: "Reels & TikTok",
    reason: "Massive dance trend and transition audio.",
    spotify: "https://open.spotify.com/search/Pedro%20Jaxomy",
    youtube: "https://www.youtube.com/results?search_query=Pedro+Jaxomy",
  },
  {
    id: 2,
    title: "MILLION DOLLAR BABY",
    artist: "Tommy Richman",
    category: "All Platforms",
    reason: "High energy, perfect for fast-paced vlogs and edits.",
    spotify: "https://open.spotify.com/search/MILLION%20DOLLAR%20BABY",
    youtube: "https://www.youtube.com/results?search_query=MILLION+DOLLAR+BABY",
  },
  {
    id: 3,
    title: "L'amore dice ciao",
    artist: "Andante con moto",
    category: "Instagram Reels",
    reason: "The current top aesthetic/cinematic audio for travel.",
    spotify: "https://open.spotify.com/search/L'amore%20dice%20ciao",
    youtube: "https://www.youtube.com/results?search_query=L'amore+dice+ciao",
  },
  {
    id: 4,
    title: "Gata Only",
    artist: "FloyyMenor, Cris Mj",
    category: "TikTok Style",
    reason: "Global hit, strong beat drops for outfit transitions.",
    spotify: "https://open.spotify.com/search/Gata%20Only",
    youtube: "https://www.youtube.com/results?search_query=Gata+Only",
  },
  {
    id: 5,
    title: "Espresso",
    artist: "Sabrina Carpenter",
    category: "Shorts & Reels",
    reason: "Pop perfection, highly adaptable for lifestyle content.",
    spotify: "https://open.spotify.com/search/Espresso%20Sabrina",
    youtube: "https://www.youtube.com/results?search_query=Espresso+Sabrina",
  }
];

export const TEMPLATES: VideoTemplate[] = [
  {
    id: 1,
    title: "Cinematic Travel Recap",
    category: "CapCut Template",
    description: "Perfect for fast-paced travel vlogs with beat-synced cuts.",
    usage: "Add 12 photos/videos. Ensure the first clip is exactly 2.5s.",
    imageClass: "bg-teal-700",
    isPro: true
  },
  {
    id: 2,
    title: "Before & After Reveal",
    category: "Instagram Reels",
    description: "High engagement format for fitness, art, or cleaning businesses.",
    usage: "Use the 'Align' tool in Reels to match the transition point perfectly.",
    imageClass: "bg-indigo-700",
    isPro: false
  },
  {
    id: 3,
    title: "Motivational Gym Flow",
    category: "CapCut Template",
    description: "Dark, moody aesthetic with slow-mo and flash effects.",
    usage: "Best with dark gym lighting. Add 5 clips.",
    imageClass: "bg-slate-800",
    isPro: true
  },
  {
    id: 4,
    title: "Aesthetic Morning Routine",
    category: "TikTok Studio",
    description: "Soft glow filter built-in with smooth panning transitions.",
    usage: "Requires 8 clips of 1-3 seconds each.",
    imageClass: "bg-rose-900",
    isPro: false
  }
];

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    name: "Cinematic Photography",
    slug: "cinematic-photography",
    prompts: [
      "A cinematic shot of a lone figure standing in a neon-lit cyberpunk street, rain pouring, shallow depth of field, 85mm lens, f/1.4, volumetric lighting, hyper-realistic, 8k --ar 16:9",
      "Overhead drone shot of a winding road through a dense autumn forest, morning mist, golden hour lighting, sharp focus, National Geographic style --ar 4:5"
    ],
    isPro: false
  },
  {
    name: "Product Photography",
    slug: "product-photography",
    prompts: [
      "Commercial product photography of a sleek glass perfume bottle resting on black volcanic rock, dramatic rim lighting, studio lighting, water splashes frozen in time, high contrast --ar 1:1",
      "Minimalist flat lay of aesthetic desk setup, mechanical keyboard, succulent, warm wood tones, soft diffused natural light from left window, top-down view, crisp details --ar 4:3"
    ],
    isPro: true
  },
  {
    name: "Anime / Illustration",
    slug: "anime-illustration",
    prompts: [
      "Studio Ghibli style illustration of a cozy magical bakery, warm glowing ovens, floating flour, highly detailed, lush environment, soft pastel colors, whimsical atmosphere --ar 16:9"
    ],
    isPro: false
  }
];

export const GUIDES: import('@/types').Guide[] = [
  {
    slug: 'how-to-go-viral-2024',
    title: 'The 2024 Algorithm: How to Go Viral on Instagram Reels',
    description: 'Learn the exact 3-second hook structure that the top 1% of creators use to hack the Instagram algorithm.',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    content: 'Long form markdown content goes here. The key to going viral in 2024 is high retention in the first 3 seconds...',
  },
  {
    slug: 'midjourney-prompts-guide',
    title: 'Mastering Midjourney V6 for Product Photography',
    description: 'Stop paying for expensive photoshoots. Generate hyper-realistic product imagery using these exact prompt formulas.',
    date: 'Oct 20, 2024',
    readTime: '8 min read',
    content: 'Midjourney V6 completely changed text-to-image realism. By specifying the lens mm and lighting style...',
  },
  {
    slug: 'monetize-small-audience',
    title: 'How to Monetize an Audience of Under 10,000 Followers',
    description: 'You don\'t need a million followers to make a full-time income. Focus on B2B sponsorships and digital products.',
    date: 'Oct 15, 2024',
    readTime: '6 min read',
    content: 'Micro-influencers have the highest engagement rates. Brands prefer paying $500 to 10 micro-creators than $5k to one...',
  }
];
