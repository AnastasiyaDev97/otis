import { type FC } from 'react';

import { Layout } from 'antd';

import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

const { Footer: AntFooter } = Layout;

export const Footer: FC<DefaultPropsType> = ({ children }): ReturnComponentType => (
  <AntFooter>{children}</AntFooter>
);
