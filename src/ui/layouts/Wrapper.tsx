import { FC, PropsWithChildren } from 'react';
import { cn } from '../../utils';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={cn('max-w-[1250px]', 'm-auto')}>
    {children}
  </div>
);

export default Wrapper;
