export function AdSlot({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full bg-white/[0.02] border border-white/5 border-dashed rounded-xl flex flex-col items-center justify-center p-6 my-8 ${className}`}>
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Advertisement</span>
      <p className="text-gray-600 text-sm text-center">AdSense slot placeholder.</p>
    </div>
  );
}
