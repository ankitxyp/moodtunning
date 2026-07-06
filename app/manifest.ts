import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Creator Hub',
    short_name: 'CreatorHub',
    description: 'Professional tools for content creators powered by AI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030014',
    theme_color: '#030014',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You can add more icons here for different sizes
    ],
  };
}
