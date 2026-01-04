import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <div
      className={cn(
        'card-dark rounded-xl p-8',
        hover && 'hover:glow-gold hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
};