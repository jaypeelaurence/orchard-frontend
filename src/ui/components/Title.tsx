import { FC, PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface PROPS extends PropsWithChildren {
  className?: string;
}

const Title: FC<PROPS>= ({ className, children }) => (
  <h1
    className={cn(
      'tracking-wide',
      'pb-[33px]',
      'text-title',
      'uppercase',
      'text-3xl',
      'font-light',
      'border-b',
      'border-border-primary',
      className
    )}
  >
    {children}
  </h1>
);

export default Title;
