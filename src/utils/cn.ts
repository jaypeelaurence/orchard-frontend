import { CxOptions, cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: CxOptions) => {
  return twMerge(cx(inputs));
};

export default cn;
