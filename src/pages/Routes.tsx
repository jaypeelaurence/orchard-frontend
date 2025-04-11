import { lazy, ReactNode } from 'react';

const Homepage = lazy(() => import('../modules/Homepage'));

export interface ROUTE {
  index?: boolean;
  path: string;
  element?: () => ReactNode;
}


const Routes: ROUTE[] = [
  {
    index: true,
    path: '/',
    element: () => <Homepage />,
  },
];

export default Routes;
