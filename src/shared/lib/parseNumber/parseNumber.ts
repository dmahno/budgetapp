export const parseNumber = (formattedValue: string): number => {
  const numericString = formattedValue.replace(/\s/g, '');
  const parsed = parseFloat(numericString);
  return isNaN(parsed) ? 0 : parsed;
};
