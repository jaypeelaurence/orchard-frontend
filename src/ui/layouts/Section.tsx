import { FC, PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface PROPS extends PropsWithChildren {
  className?: string;
}

const Section: FC<PROPS> = ({ children, className }) => (
  <div className={cn('px-10', 'py-[100px]', className)}>
    {children}
  </div>
);

export default Section;
