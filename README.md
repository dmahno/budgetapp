# Budget App

## Описание

**Budget App** — это приложение для управления бюджетом, использующее технологии Vite, React, TypeScript и MobX. Приложение предоставляет функционал для работы с бюджетами и аналитикой, используя современные (крайних версий) инструменты сборки и тестирования.

## Установка

Перед началом работы убедитесь, что у вас установлен [Node.js версии 22.10.0](https://nodejs.org/). Для переключения на правильную версию используйте команду:

```bash
nvm use
```

### Шаги для установки и запуска проекта:

1. Клонируйте репозиторий:

   ```bash
   git clone
   cd budget-app
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запуск в режиме разработки:

   ```bash
   npm start
   ```

4. Сборка проекта:

   ```bash
   npm run build
   ```

5. Предпросмотр собранного проекта:

   ```bash
   npm run preview
   ```

6. Запуск тестов:

   - Все тесты:

   ```bash
   npm test
   ```

## Скрипты

- `npm start` — Запуск приложения в режиме разработки.
- `npm run build` — Сборка приложения для продакшена.
- `npm run preview` — Предпросмотр собранного приложения.
- `npm test` — Запуск всех тестов с покрытием.
- `npm run prettier` — Форматирование кода с помощью Prettier.
- `npm run lint` — Проверка кода с помощью ESLint.

## Зависимости

### Основные зависимости:

- `react`: ^18.3.1
- `mobx`: ^6.13.5
- `sass`: ^1.80.3
- `node version`: v22.10.0
- `npm`: v10.9.0

## Используемые технологии

- **Vite**: для быстрой сборки и запуска приложения.
- **React**: библиотека для создания пользовательских интерфейсов.
- **MobX**: библиотека для управления состоянием.
- **Vites**: для тестирования.
- **ESLint**: для проверки качества кода.
- **Prettier**: для форматирования кода.

## Husky и Commitlint

Для обеспечения консистентных сообщений коммитов используется Husky и Commitlint. Правила основаны на [Conventional Commits](https://www.conventionalcommits.org/).

- Чтобы настроить хуки Git, выполните:

  ```bash
  npm run prepare
  ```

## Лицензия

Этот проект лицензирован под MIT License.
