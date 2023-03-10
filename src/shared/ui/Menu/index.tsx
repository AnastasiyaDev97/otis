import { type FC } from 'react';

import type { MenuProps } from 'antd';
import { Menu as AntMenu } from 'antd';

import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

export const Menu: FC<MenuProps> = (props): ReturnComponentType => <AntMenu {...props} />;
