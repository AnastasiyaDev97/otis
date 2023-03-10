import { type FC } from 'react';

import { Layout as AntLayout } from 'antd';

import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

export const Layout: FC<DefaultPropsType> = ({ children }): ReturnComponentType => (
  <AntLayout>{children}</AntLayout>
);
