import { Sider, Menu } from 'shared';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';
import { NAV_ITEMS } from 'widgets/AppLayout/constants';

export const AppSider = (): ReturnComponentType => {
  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={NAV_ITEMS}
      />
    </Sider>
  );
};
