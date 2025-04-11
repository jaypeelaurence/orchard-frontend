import { PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface PROPS extends PropsWithChildren {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
  onClick: (e: any) => any;
  className?: string;
  type: 'button';
  label?: string;
}

function Button({ onClick, type, className, label, children }: PROPS) {
  const handleOnClick = (e: unknown) => {
    console.log(e, 'button clicked');

    onClick(e);
  };

  return (
    <button
      type={type}
      onClick={(e) => handleOnClick(e)}
      className={cn('cursor-pointer', className)}
    >
      {label ?? children}
    </button>
  );
};

export default Button;
