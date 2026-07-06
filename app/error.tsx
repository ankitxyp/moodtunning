'use client';

import { useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <GlassCard className="max-w-md w-full text-center p-8">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="text-red-500" size={32} aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="text-gray-400 mb-8 text-sm">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => reset()}
            className="w-full bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <RefreshCcw size={18} className="mr-2" aria-hidden="true" /> Try again
          </button>
          <Link
            href="/"
            className="w-full bg-white/10 text-white font-bold py-3 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}
