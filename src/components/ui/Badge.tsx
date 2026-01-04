import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'gold',
}) => {
  const variants = {
    gold: 'bg-[#febe5d]/20 text-[#febe5d] border border-[#febe5d]/30',
    outline: 'bg-transparent border border-gray-700 text-gray-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};