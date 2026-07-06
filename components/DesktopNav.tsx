'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layout, TrendingUp, Palette, History as HistoryIcon, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Tools', href: '/#tools', icon: Layout },
  { name: 'Trends', href: '/trending-reels', icon: TrendingUp },
  { name: 'Prompts', href: '/prompt-library', icon: Palette },
  { name: 'History', href: '/history', icon: HistoryIcon },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex sticky top-0 z-50 glass border-b-0 w-full px-6 py-4 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">CreatorHub</span>
      </Link>
      
      <div className="flex space-x-1 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md">
        {NAV_LINKS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
                isActive 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={16} className="mr-2" />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full cursor-help" title="Your remaining AI credits">
          <span className="text-xs font-bold text-purple-400 mr-2">CREDITS</span>
          <span className="text-xs font-bold text-white">10/10</span>
        </div>
        <Link href="/pricing" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
          Pricing
        </Link>
        <Link href="/analyzer" className="bg-white text-black px-5 py-2 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-500">
          Launch Tool
        </Link>
      </div>
    </nav>
  );
}
