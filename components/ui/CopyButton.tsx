'use client';

import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface CopyButtonProps {
  text: string;
  className?: string;
  iconOnly?: boolean;
}

export function CopyButton({ text, className = '', iconOnly = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Copied to clipboard!', { id: 'copy' });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-md ${className} ${
        copied ? 'text-green-400' : 'text-gray-400 hover:text-white'
      }`}
    >
      {copied ? <CheckCircle2 size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      {!iconOnly && <span className="ml-2 font-semibold text-xs">{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  );
}
