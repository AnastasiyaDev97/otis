import { Header, Menu } from 'shared';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';
import { NAV_ITEMS } from 'widgets/AppLayout/constants';

export const AppHeader = (): ReturnComponentType => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={NAV_ITEMS}
      />
    </Header>
  );
};
