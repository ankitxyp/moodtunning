export interface MusicRecommendation {
  title: string;
  artist: string;
  reason: string;
  spotify: string;
  youtube: string;
}

export interface AnalysisResult {
  mood: string;
  aestheticStyle: string;
  contentCategory: string;
  bestPostingTime: string;
  colors: string[];
  music: MusicRecommendation[];
  captions: string[];
  hashtags: string[];
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  image: string; // base64
  result: AnalysisResult;
}

export interface ViralReel {
  id: number;
  title: string;
  category: string;
  reason: string;
  hook: string;
  caption: string;
  thumbnail: string;
}

export interface TrendingSong {
  id: number;
  title: string;
  artist: string;
  category: string;
  reason: string;
  spotify: string;
  youtube: string;
}

export interface VideoTemplate {
  id: number;
  title: string;
  category: string;
  description: string;
  usage: string;
  imageClass: string;
  isPro?: boolean;
}

export interface PromptCategory {
  name: string;
  slug: string;
  prompts: string[];
  isPro?: boolean;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
}
