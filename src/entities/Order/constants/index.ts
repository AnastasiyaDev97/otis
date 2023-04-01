export const ORDER_DETAILS = [
  {
    title: 'Номер заказа',
    dataIndex: 'number',
    key: 'number',
    editable: true,
    type: 'number',
  },
  {
    title: 'Дата содания',
    dataIndex: 'created_at',
    key: 'created_at',
    editable: true,
    type: 'date',
  },
  {
    title: 'Заказчик',
    dataIndex: 'customer',
    key: 'customer',
    editable: true,
    type: 'text',
  },

  {
    title: 'Дата сдачи заказа',
    dataIndex: 'deadline',
    key: 'deadline',
    editable: true,
    type: 'date',
  },
  {
    title: 'Тип оплаты',
    dataIndex: 'payment_type',
    key: 'payment_type',
    editable: true,
    type: 'text',
  },
  {
    title: 'Цена всего заказа',
    dataIndex: 'price',
    key: 'price',
    editable: true,
    type: 'number',
  },
];

export const ORDER_ITEMS = [
  {
    title: '№ изделия',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    key: 'count',
  },

  {
    title: 'Материал',
    dataIndex: 'material',
    key: 'material',
  },
  {
    title: 'Стоимость материала за единицу изделия',
    dataIndex: 'material_price',
    key: 'material_price',
  },
  {
    title: 'Количество материала на единицу изделия',
    dataIndex: 'material_count',
    key: 'material_count',
  },
  {
    title: 'Стоимость материала за весь заказ',
    dataIndex: 'materials_price',
    key: 'materials_price',
  },
  {
    title: 'Расход материала на весь заказ',
    dataIndex: 'materials_count',
    key: 'materials_count',
  },
];
