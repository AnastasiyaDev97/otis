import { type FC } from 'react';

import style from './styles/AppLayout.module.scss';
/* import { AppFooter } from './ui/AppFooter'; */
import { AppHeader } from './ui/AppHeader';
/* import { AppSider } from './ui/AppSider'; */

import { Layout, Content } from 'shared';
import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

export const AppLayout: FC<DefaultPropsType> = ({ children }): ReturnComponentType => {
  return (
    <Layout>
      <AppHeader />
      <Layout className={style.layout} style={{ padding: '24px 0' }}>
        {/*  <AppSider /> */}
        <Content>{children}</Content>
        {/* <AppFooter /> */}
      </Layout>
    </Layout>
  );
};
