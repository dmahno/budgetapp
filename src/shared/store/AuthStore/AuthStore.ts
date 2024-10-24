import {action, makeAutoObservable} from 'mobx';
import {SHA256} from 'crypto-js';
import {notification} from 'antd';

import {TImageKeys} from 'shared/assets';

export interface IUserData {
  id: number;
  first_name: string;
  avatar: TImageKeys;
}

function isTImageKey(value: string | null): value is TImageKeys {
  const validKeys: TImageKeys[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  return validKeys.includes(value as TImageKeys);
}

class AuthStore {
  user: IUserData | null = null;
  isAuthenticated: boolean = false;
  loading: boolean = false;
  login: string = '';
  password: string = '';
  availableImages: TImageKeys[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }

  setLogin = action((value: string) => {
    this.login = value;
  });

  setPassword = action((value: string) => {
    this.password = value;
  });

  // я решил затащить логику присваивания аватарок пользователю, при авторизации пользователю присваивается рандомная аватарка

  private getRandomImage = (): TImageKeys => {
    const randomIndex = Math.floor(Math.random() * this.availableImages.length);
    return this.availableImages[randomIndex];
  };

  signUp = action((onSuccess: () => void) => {
    this.loading = true;

    setTimeout(() => {
      // я использую шифрование пароля, не безопасно вообще, но лучше чем ничего
      const hashedPassword = SHA256(this.password).toString();
      // так делать категорически нельзя, но мне хотелось сделать авторизацию
      localStorage.setItem('signupLogin', this.login);
      localStorage.setItem('signupPassword', hashedPassword);

      const randomImage = this.getRandomImage();
      localStorage.setItem('userImage', randomImage);

      notification.success({
        message: 'Вы успешно зарегистрировались',
        description: 'Используйте регистриционные данные для входа',
      });

      this.loading = false;
      onSuccess();
    }, 2000); // по заданию сказано симулировать запросы
  });

  loginAction = action((onSuccess: () => void) => {
    this.loading = true;

    setTimeout(() => {
      // так делать категорически нельзя, но мне хотелось сделать авторизацию
      const storedLogin = localStorage.getItem('signupLogin');
      const storedPassword = localStorage.getItem('signupPassword');
      // поэтому я использую шифрование пароля, не безопасно вообще, но лучше чем ничего
      const hashedPassword = SHA256(this.password).toString();

      if (storedLogin && storedPassword) {
        if (storedLogin === this.login && storedPassword === hashedPassword) {
          let userImage = localStorage.getItem('userImage');

          if (!isTImageKey(userImage)) {
            userImage = this.getRandomImage();
            localStorage.setItem('userImage', userImage);
          }

          this.user = {
            id: 1,
            first_name: this.login,
            avatar: userImage as TImageKeys,
          };
          this.isAuthenticated = true;
          localStorage.setItem('authUser', JSON.stringify(this.user));

          this.loading = false;
          onSuccess();
        } else {
          this.loading = false;
          notification.error({
            message: 'Ошибка в авторизации',
            description:
              'Не правильно ввели логи или пароль, попробуйте еще раз или пройдите регистрацию',
          });
        }
      } else {
        this.loading = false;
        notification.error({
          message: 'Ошибка в авторизации',
          description: 'Убедитесь в верности введенных данных',
        });
      }
    }, 2000); // по заданию сказано симулировать запросы
  });

  logout = action(() => {
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('authUser');
    localStorage.removeItem('signupLogin');
    localStorage.removeItem('signupPassword');
  });

  loadUser = action(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.isAuthenticated = true;
    }
  });
}

export const authStore = new AuthStore();
