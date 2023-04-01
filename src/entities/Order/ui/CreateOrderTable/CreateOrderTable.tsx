import { Fragment } from 'react';

import { ORDER_DETAILS } from 'entities/Order/constants';
import { EditableTable } from 'shared';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

export const OrderDetailsTable = (): ReturnComponentType => {
  return (
    <Fragment>
      <EditableTable columns={ORDER_DETAILS} />
    </Fragment>
  );
};
