import { type FC } from 'react';

import { Layout } from 'antd';

import { type DefaultPropsType } from 'shared/types/DefaultPropsType';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';
const { Content: AntContent } = Layout;

export const Content: FC<DefaultPropsType> = ({ children }): ReturnComponentType => (
  <AntContent
    style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    {children}
  </AntContent>
);
