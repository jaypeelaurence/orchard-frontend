import { useCallback } from 'react';
import { cn } from '../../utils';
import { useModalContext } from '../partials/Modal';
import Button from './Button';

interface PROPS {
  className?: string | string[];
  src: string;
  alt?: string
}

const ModalImage = (imageProps: PROPS) => (
  <div className="bg-white p-5 rounded-xl">
    <img
      alt={imageProps.alt}
      className={cn(imageProps.className)}
      src={imageProps.src}
    />
  </div>
);

function Image(imageProps: PROPS) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsOpen, setContent }: Record<string, any> = useModalContext();

  const handleOnClick = useCallback(() => {
    setIsOpen(true);
    setContent(<ModalImage {...imageProps} />);
  }, [setIsOpen, setContent]);

  const { className, src, alt } = imageProps;

  return (
    <Button onClick={handleOnClick} type='button' className={cn(className)}>
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
};

export default Image;
