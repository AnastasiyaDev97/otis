import { type LiteralObjectKeysT } from 'shared/types/LiteralObjectKeysType';

type MenuItemsT = typeof MENU_ITEMS;
export type LiteralMenuItems = LiteralObjectKeysT<MenuItemsT>;

export const MENU_ITEMS = {
  HOME: 'На главную',
  ORDER_REGISTRATION: 'Регистрация заказа',
  ORDER_REGISTER: 'Реестр заказов',
  COSTING_SHEET: 'Калькуляционная ведомость',
  SHIFT_TASK: 'Сменное задание',
  SHIFT_TASK_REGISTER: 'Реестр сменных заданий',
  TIMING: 'Хронометраж',
  MATERIAL_ACCOUNTING: 'Учет материалов',
};

export const ROUTES = {
  HOME: '/',
  ORDER_REGISTRATION: '/order_registration',
  ORDER_REGISTER: '/orders',
  COSTING_SHEET: '/costing_sheet',
  SHIFT_TASK: '/task',
  SHIFT_TASK_REGISTER: '/tasks',
  TIMING: '/timing',
  MATERIAL_ACCOUNTING: '/materials',
};
