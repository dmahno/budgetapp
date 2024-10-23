declare global {
  interface Window {
    TelegramLoginWidget: (user: ITelegramUser) => void;
  }
}

export {};
