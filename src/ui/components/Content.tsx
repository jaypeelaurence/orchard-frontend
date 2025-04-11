import { FC, PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface PROPS extends PropsWithChildren {
  className?: string;
}

const Content: FC<PROPS>= ({ className, children }) => (
  <p
    className={cn(
      'text-title',
      'text-[21px]',
      'font-light',
      'leading-[30px]',
      className
    )}
  >
    {children}
  </p>
);

export default Content;
