import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-sm text-gray-400 mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-white transition-colors flex items-center">
        <Home size={14} />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight size={14} className="mx-2 text-gray-600 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-200 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
