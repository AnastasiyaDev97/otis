import { type FC } from 'react';

import { Layout } from 'antd';

import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

const { Header: AntHeader } = Layout;

export const Header: FC<DefaultPropsType> = ({ children }): ReturnComponentType => (
  <AntHeader className="header">{children}</AntHeader>
);
