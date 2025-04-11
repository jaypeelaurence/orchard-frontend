import { cn } from '../../utils';
import { FC } from 'react';

interface PROPS {
  className?: string | string[];
  src: string;
  alt?: string
}

const Image: FC<PROPS>= ({ className, src, alt }) => (
  <img
    alt={alt}
    className={cn(className)}
    src={src}
  />
);

export default Image;
