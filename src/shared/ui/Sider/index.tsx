import { type FC } from 'react';

import { Layout } from 'antd';

import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';
const { Sider: AntSider } = Layout;

export const Sider: FC<DefaultPropsType> = ({ children }): ReturnComponentType => (
  <AntSider width={200}>{children}</AntSider>
);
