import { cn } from '../../utils';
import { FC } from 'react';
import Button from './Button';

interface PROPS {
  className?: string | string[];
  src: string;
  alt?: string
}

const Image: FC<PROPS>= ({ className, src, alt }) => (
  <Button onClick={() => {}} type='button' className={cn(className)}>
    <img
      alt={alt}
      className={cn(
        'transition-transform',
        'duration-300',
        'ease-in-out',
        'hover:-translate-y-1',
        className,
      )}
      src={src}
    />
  </Button>
);

export default Image;
