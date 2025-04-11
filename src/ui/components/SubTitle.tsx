import { FC, PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface PROPS extends PropsWithChildren {
  className?: string;
}

const SubTitle: FC<PROPS>= ({ className, children }) => (
  <h2
    className={cn(
      'text-title',
      'text-[21px]',
      'font-bold',
      'leading-[30px]',
      className
    )}
  >
    {children}
  </h2>
);

export default SubTitle;
