import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass-card p-6 ${onClick ? 'cursor-pointer hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
