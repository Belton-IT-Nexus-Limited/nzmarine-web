import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerSize = 'content' | 'prose' | 'wide';

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const sizeClass: Record<ContainerSize, string> = {
  content: 'max-w-[75rem]',
  prose: 'max-w-[44rem]',
  wide: 'max-w-[85rem]',
};

/** Centres page content and applies the shared responsive horizontal padding. */
export function Container({
  size = 'content',
  className,
  children,
}: ContainerProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        sizeClass[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
