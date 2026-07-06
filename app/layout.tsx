import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

import DesktopNav from "@/components/DesktopNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://creatorhub.example.com'),
  title: {
    default: "AI Creator Hub | Professional Tools for Creators",
    template: "%s | AI Creator Hub",
  },
  description: "The ultimate AI platform for content creators. Generate viral hooks, find trending music, and enhance your visuals instantly.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creatorhub.example.com',
    siteName: 'AI Creator Hub',
    title: 'AI Creator Hub | Professional Tools for Creators',
    description: 'The ultimate AI platform for content creators. Generate viral hooks, find trending music, and enhance your visuals instantly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Creator Hub | Professional Tools for Creators',
    description: 'The ultimate AI platform for content creators. Generate viral hooks, find trending music, and enhance your visuals instantly.',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#030014] text-white min-h-screen md:pb-0 pb-24 flex flex-col`}>
        <DesktopNav />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <BottomNav/>
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              background: '#111827',
              color: '#fff',
              border: '1px solid #1f2937',
            },
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
