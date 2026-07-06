import { GlassCard } from '@/components/ui/GlassCard';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-md w-full text-center p-8">
        <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="text-pink-500" size={32} aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-bold mb-2">404</h2>
        <p className="text-gray-400 mb-8">
          We couldn&apos;t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="w-full bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors inline-block"
        >
          Return Home
        </Link>
      </GlassCard>
    </main>
  );
}
