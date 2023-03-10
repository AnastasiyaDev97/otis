import { createBrowserRouter } from 'react-router-dom';

import { App } from 'app';
import { ROUTES } from 'shared/constants';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
]);
