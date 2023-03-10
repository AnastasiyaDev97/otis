import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';

import { type LiteralMenuItems, MENU_ITEMS, ROUTES } from 'shared/constants';

export const NAV_ITEMS: MenuProps['items'] = Object.entries(MENU_ITEMS).map(key => ({
  key: key[0],
  label: <NavLink to={ROUTES[key[0] as LiteralMenuItems]}> {key[1]}</NavLink>,
}));
