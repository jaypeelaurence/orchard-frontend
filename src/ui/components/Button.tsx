import { FC } from 'react';
import { cn } from '../../utils';

interface PROPS {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  onClick: (e: any) => any;
  className?: string;
  type: 'button';
  label: string;
}

const Button: FC<PROPS>= ({ onClick, type, className, label }) => (
  <button
    type={type}
    onClick={onClick}
    className={cn('cursor-pointer', className)}
  >
    {label}
  </button>
);

export default Button;
