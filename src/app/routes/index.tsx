import { Home, OrderRegistration } from 'pages';
import { ROUTES } from 'shared/constants';

export const router = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ORDER_REGISTRATION,
    element: <OrderRegistration />,
  },
];
