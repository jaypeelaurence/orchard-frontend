import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,  
} from 'react';
import { cn } from '../../utils';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from '../components';

export const ModalContext = createContext({});
export const useModalContext = () => useContext(ModalContext);

export default function Modal({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  
  const value = useMemo(() => ({
    isOpen,
    setIsOpen,
    content,
    setContent,
  }),
  [isOpen,
    setIsOpen,
    content,
    setContent,
  ]);

  const handleOnClose = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, [setIsOpen, setContent]);

  return (
    <ModalContext.Provider value={value}>
      {
        !content ? null :
          (
            <div className={cn('relative', 'z-50')}>
              <div data-aos="fade-up" className={cn('z-50', 'fixed')}>
                <div className={cn('flex', 'items-center', 'h-screen', 'w-screen')}>
                  <div className={cn('m-auto', 'relative')}>
                    <Button
                      type='button'
                      onClick={handleOnClose}
                      className={cn(
                        'text-3xl',
                        'bg-white',
                        'rounded-full',
                        'shadow-2xl',
                        'absolute',
                        'top-[-5px]',
                        'right-[-5px]'
                      )}
                    >
                      <IoCloseOutline />
                    </Button>
                    {content}
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-in"
                className={cn('z-20', 'fixed', 'inset-0', 'bg-primary-base/80')}
                aria-hidden="true"
              />
            </div>
          )
      }
      <div className='relative z-1'>
        {children}
      </div>
    </ModalContext.Provider>
  );
}
