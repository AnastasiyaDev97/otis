import type { MenuProps } from 'antd';

import { MENU_ITEMS } from 'shared/constants';

export const NAV_ITEMS: MenuProps['items'] = Object.values(MENU_ITEMS).map(key => ({
  key,
  label: key,
}));
