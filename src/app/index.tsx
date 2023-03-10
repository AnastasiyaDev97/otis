import './index.scss';
import { Fragment, Suspense } from 'react';

import { useRoutes } from 'react-router';

import { router } from './routes';

import { type ReturnComponentType } from 'shared/types/ReturnComponentType';
import { AppLayout } from 'widgets';

export const App = (): ReturnComponentType => {
  const element = useRoutes(router);

  return (
    <Fragment>
      <AppLayout>
        <Suspense fallback="Loading">{element}</Suspense>
      </AppLayout>
    </Fragment>
  );
};
