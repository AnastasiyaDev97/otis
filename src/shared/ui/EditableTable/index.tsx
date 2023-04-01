import React, {
  type FC,
  useContext,
  useRef,
  useState,
  type Key,
  useCallback,
} from 'react';

import type { InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';

import {
  type EditableCellType,
  type ColumnTypes,
  type EditableCellProps,
  type EditableRowProps,
  type TablePropsType,
} from './type';

import { type Item } from 'shared/types/DefaultTableItem';
import { type Nullable } from 'shared/types/Nullable';
import { type ReturnComponentType } from 'shared/types/ReturnComponentType';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  type,
  handleSave,
  editableCell,
  setEditableCellCoordinates,
  ...restProps
}): ReturnComponentType => {
  const inputRef = useRef<InputRef>(null);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const form = useContext(EditableContext)!;

  const toggleEdit = (): void => {
    if (editableCell !== null) {
      return;
    }
    if (record.number != null) {
      setEditableCellCoordinates({
        row: dataIndex,
        column: record?.number,
      });
    }

    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async (): Promise<void> => {
    try {
      const values = await form.validateFields();

      setEditableCellCoordinates(null);
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode =
      editableCell?.row === dataIndex && editableCell?.column === record?.number ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `Обязательно к заполнению`,
            },
          ]}
        >
          <Input type={type} ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
  }

  return (
    <td {...restProps} onClick={toggleEdit}>
      {childNode}
    </td>
  );
};

export const EditableTable: FC<TablePropsType> = ({ columns, data }) => {
  const [dataSource, setDataSource] = useState<Item[]>([]);
  const [editableCell, setEditableCell] = useState<Nullable<EditableCellType>>(null);

  const [count, setCount] = useState(1);

  const handleDelete = (key: React.Key): void => {
    const newData = dataSource.filter(item => item.key !== key);

    setEditableCellCoordinates(null);
    setDataSource(newData);
  };

  const defaultColumns: Array<
    ColumnTypes[number] & { editable?: boolean; dataIndex: string; type?: string }
  > = [
    ...columns,

    {
      title: 'Удалить',
      dataIndex: 'operation',
      render: (_, record: { key: Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Уверены, что хотите удалить?"
            onConfirm={() => {
              handleDelete(record.key);
            }}
          >
            <a>Удалить</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const setEditableCellCoordinates = useCallback((param: Nullable<EditableCellType>) => {
    setEditableCell((state: Nullable<EditableCellType>) => {
      if (state === null && param !== null) {
        const { row, column } = param;

        return { row, column };
      } else {
        return null;
      }
    });
  }, []);

  const handleAdd = (): void => {
    if (editableCell === null) {
      const newData: Item = {
        key: count,
        number: `${count}`,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        created_at: `${new Date().toLocaleDateString('en-US')}`,
        customer: '',
        deadline: '',
        payment_type: '',
        price: '',
      };

      setDataSource([...dataSource, newData]);
      setCount(count + 1);
    }
  };

  const handleSave = (row: Item): void => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const editableColumns = defaultColumns.map(col => {
    if (col.editable === false) {
      return col;
    }

    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        type: col?.type,
        title: col.title,
        handleSave,
        setEditableCellCoordinates,
        editableCell,
      }),
    };
  });

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={editableColumns as ColumnTypes}
      />
    </div>
  );
};
