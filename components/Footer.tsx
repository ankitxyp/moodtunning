import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-white/5 py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            AI Creator Hub
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            The ultimate AI platform for content creators. Generate viral hooks, find trending music, and enhance your visuals instantly.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Features</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/analyzer" className="hover:text-pink-400 transition-colors">AI Analyzer</Link></li>
            <li><Link href="/trending-reels" className="hover:text-pink-400 transition-colors">Viral Hooks</Link></li>
            <li><Link href="/trending-music" className="hover:text-pink-400 transition-colors">Trending Audio</Link></li>
            <li><Link href="/prompt-library" className="hover:text-pink-400 transition-colors">Prompt Library</Link></li>
            <li><Link href="/video-templates" className="hover:text-pink-400 transition-colors">Video Templates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/guides" className="hover:text-pink-400 transition-colors">Creator Guides</Link></li>
            <li><Link href="/pricing" className="hover:text-pink-400 transition-colors">Pricing</Link></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} AI Creator Hub. All rights reserved.
      </div>
    </footer>
  );
}
