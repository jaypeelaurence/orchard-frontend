import { CgSpinnerTwo } from 'react-icons/cg';
import { cn } from '../utils';

const Loading = () => (
  <div className={cn('min-h-screen', 'w-screen', 'flex', 'items-center')}>
    <div className={cn('flex', 'flex-col', 'items-center', 'm-auto', 'gap-5')}>
      <h1 className={cn('text-3xl', 'font-light', 'text-title')}>
        LOADING
      </h1>
      <CgSpinnerTwo className={cn('text-[100px]', 'text-title', 'animate-spin')}/>
    </div>
  </div>
);

export default Loading;
