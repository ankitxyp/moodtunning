'use client';

import Link from 'next/link';
import { Home, TrendingUp, Layout, HistoryIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Trends', icon: TrendingUp, href: '/trending-reels' },
    { name: 'Tools', icon: Layout, href: '/#tools' },
    { name: 'History', icon: HistoryIcon, href: '/history' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-20 px-2 pb-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-pink-500' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-pink-500/10 scale-110' : ''}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
