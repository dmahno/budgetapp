export interface ICategory {
  label: string;
  value: string;
  color: string;
}

export const categories: ICategory[] = [
  {label: 'Другое', value: 'other', color: 'default'},
  {label: 'Перевод', value: 'brown', color: 'brown'},
  {label: 'Питание', value: 'food', color: 'volcano'},
  {label: 'Транспорт', value: 'transport', color: 'blue'},
  {label: 'Развлечения', value: 'purple', color: 'purple'},
  {label: 'Учеба', value: 'green', color: 'green'},
  {label: 'Зарплата', value: 'pink', color: 'pink'},
];
