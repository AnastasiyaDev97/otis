import { type Key } from 'react';

export interface Item {
  key: Key;
  number?: string;
  created_at?: string;
  customer?: string;
  deadline?: string;
  payment_type?: string;
  price?: string;
}
