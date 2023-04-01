import { type Key } from 'react';

import { type ColumnGroupType, type ColumnType } from 'rc-table/lib/interface';

import { type Item } from 'shared/types/DefaultTableItem';
import { type Nullable } from 'shared/types/Nullable';

export interface EditableRowProps {
  index: number;
}

export interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  type: string;
  handleSave: (record: Item) => void;
  setEditableCellCoordinates: (param: Nullable<EditableCellType>) => void;
  editableCell: Nullable<EditableCellType>;
}

export type ColumnTypes = Array<ColumnGroupType<{ key: Key }> | ColumnType<{ key: Key }>>;

export interface TablePropsType {
  columns: Array<
    ColumnTypes[number] & { editable?: boolean; dataIndex: string; type?: string }
  >;
  data?: Item[];
  title?: string;
}

export interface EditableCellType {
  row: keyof Item;
  column: string;
}
