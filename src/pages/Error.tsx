import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';
import { LuMessageCircleWarning } from 'react-icons/lu';
import { Button } from '../ui/components';

function Error() {
  const navigate = useNavigate();

  return (
    <div className={cn('min-h-screen', 'w-screen', 'flex', 'items-center')}>
      <div className={cn('flex', 'flex-col', 'items-center', 'm-auto', 'gap-5')}>
        <div className={cn('gap-2', 'flex', 'flex-col', 'items-center')}>
          <h1 className={cn('text-3xl', 'font-semibold', 'text-title')}>
            ERROR
          </h1>
          <p className={cn('text-xs', 'font-extralight', 'text-title')}>
            Page Not found
          </p>
        </div>
        <LuMessageCircleWarning className={cn('text-[100px]', 'text-seconday-base')}/>
        <Button
          type="button" onClick={() => navigate('/')}
          className={cn(
            'text-xs',
            'font-bold',
            'text-title',
            'p-1',
            'rounded-md',
            'border',
            'border-border-primary',
          )}
          label="GO BACK"
        />
      </div>
    </div>
  );
};

export default Error;
