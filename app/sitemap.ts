import { MetadataRoute } from 'next';
import { SITE_URL, PROMPT_CATEGORIES, GUIDES } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/trending-reels`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/trending-music`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/video-templates`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/prompt-library`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/analyzer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/tools/image-enhancement`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/tools/content-assistant`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const promptRoutes = PROMPT_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/prompt-library/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const guideRoutes = GUIDES.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...baseRoutes, ...promptRoutes, ...guideRoutes] as MetadataRoute.Sitemap;
}
