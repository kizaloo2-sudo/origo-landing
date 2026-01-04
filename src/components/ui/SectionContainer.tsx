import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn('section-padding px-4 md:px-8 lg:px-16', className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};