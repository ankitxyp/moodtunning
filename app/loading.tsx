import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen pt-10 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <Skeleton className="w-16 h-16 rounded-full" />
        <Skeleton className="h-10 w-3/4 max-w-md" />
        <Skeleton className="h-4 w-1/2 max-w-sm" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    </main>
  );
}
