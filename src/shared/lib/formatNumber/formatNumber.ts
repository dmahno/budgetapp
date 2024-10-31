export const formatNumber = (value: number): string => {
  return value.toLocaleString('ru-RU').replace(/,/g, ' ');
};
