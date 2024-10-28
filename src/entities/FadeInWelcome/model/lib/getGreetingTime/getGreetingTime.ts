export const getGreetingTime = () => {
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 5) return 'Доброй ночи';
  if (hours >= 5 && hours < 12) return 'Доброе утро';
  if (hours >= 12 && hours < 18) return 'Добрый день';
  return 'Добрый вечер';
};
