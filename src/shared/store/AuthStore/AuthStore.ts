import {action, makeAutoObservable, runInAction} from 'mobx';
import {SHA256} from 'crypto-js';
import {notification} from 'antd';

import {TImageKeys} from 'shared/assets';

const IMAGE_LIST_NAME: TImageKeys[] = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
];
export interface IUserData {
  id: number;
  userNameInfo: string | null;
  avatar: TImageKeys;
}

function isTImageKey(value: string | null): value is TImageKeys {
  const validKeys: TImageKeys[] = IMAGE_LIST_NAME;
  return validKeys.includes(value as TImageKeys);
}

class AuthStore {
  user: IUserData | null = null;
  isAuthenticated: boolean = false;
  loading: boolean = false;
  login: string = '';
  password: string = '';
  userName: string = '';
  availableImages: TImageKeys[] = IMAGE_LIST_NAME;
  isLoginInvalid: boolean = false;
  isPasswordInvalid: boolean = false;
  isWelcome: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.loadUser();
    this.loadUserName();
  }

  setLogin = action((value: string) => {
    this.login = value.toLowerCase().trim();
    this.validateLogin();
  });

  resetForm = action(() => {
    this.login = '';
    this.password = '';
    this.userName = '';
  });

  setPassword = action((value: string) => {
    this.password = value.trim();
    this.validatePassword();
  });

  showWelcome = action(() => {
    this.isWelcome = true;
    setTimeout(() => {
      runInAction(() => {
        this.isWelcome = false;
      });
    }, 5000);
  });

  setUserName = action((value: string) => {
    this.userName = value.trimStart();
  });

  isFormValid = action((): boolean => {
    return (
      this.login.trim() !== '' &&
      this.password.trim() !== '' &&
      this.userName.trim() !== '' &&
      !this.isPasswordInvalid
    );
  });

  validatePassword = action(() => {
    this.isPasswordInvalid = this.password.length <= 5;
  });

  checkIfLoginExists = action((): boolean => {
    const storedLogin = localStorage.getItem('signupLogin');
    return storedLogin === SHA256(this.login).toString();
  });

  areFieldsFilled<
    T extends Record<string, string | number | boolean | null | undefined>,
  >(fields: T): boolean {
    return Object.values(fields).every((value) => {
      if (typeof value === 'string') {
        return value.trim() !== '';
      }
      return true;
    });
  }

  // функция проверки логина на ввода латиницей
  validateLogin = action(() => {
    const latinRegex = /^[A-Za-z]+$/;
    this.isLoginInvalid = this.login ? !latinRegex.test(this.login) : false;
  });

  // я решил затащить логику присваивания аватарок пользователю, при авторизации пользователю присваивается рандомная аватарка
  private getRandomImage = (): TImageKeys => {
    const randomIndex = Math.floor(Math.random() * this.availableImages.length);
    return this.availableImages[randomIndex];
  };

  signUp = action((onSuccess: () => void) => {
    if (this.checkIfLoginExists()) {
      notification.error({
        message: 'Ошибка',
        description:
          'Пользователь с таким логином уже существует. Введите другой логин.',
      });
      return;
    }

    this.loading = true;

    setTimeout(() => {
      runInAction(() => {
        const hashedLogin = SHA256(this.login).toString();
        const hashedPassword = SHA256(this.password).toString();

        localStorage.setItem('signupLogin', hashedLogin);
        localStorage.setItem('signupUserName', this.userName);
        localStorage.setItem('signupPassword', hashedPassword);

        const randomImage = this.getRandomImage();
        localStorage.setItem('userImage', randomImage);
        localStorage.setItem('userName', this.userName);

        notification.success({
          message: 'Вы успешно зарегистрировались',
          description: 'Используйте регистрационные данные для входа',
        });

        this.resetForm();
        onSuccess();

        this.loading = false;
      });
    }, 2000); // по заданию сказано симулировать запросы
  });

  loginAction = action((onSuccess: () => void) => {
    this.loading = true;

    setTimeout(() => {
      //  я использую шифрование пароля, не безопасно вообще, но лучше чем ничего
      const hashedLogin = SHA256(this.login).toString();
      const hashedPassword = SHA256(this.password).toString();

      // так делать категорически нельзя!!! Сделано для задания
      const storedLogin = localStorage.getItem('signupLogin');
      const storedPassword = localStorage.getItem('signupPassword');
      const storedUserName = localStorage.getItem('signupUserName');

      if (storedLogin && storedPassword) {
        if (storedLogin === hashedLogin && storedPassword === hashedPassword) {
          let userImage = localStorage.getItem('userImage');

          if (!isTImageKey(userImage)) {
            userImage = this.getRandomImage();
            localStorage.setItem('userImage', userImage);
          }

          runInAction(() => {
            this.user = {
              id: 1,
              userNameInfo: storedUserName,
              avatar: userImage as TImageKeys,
            };
            this.isAuthenticated = true;
            this.loading = false;
          });

          localStorage.setItem('authUser', JSON.stringify(this.user));
          runInAction(() => {
            if (storedUserName) {
              localStorage.setItem('userName', storedUserName);
              this.userName = storedUserName;
            }
          });
          this.showWelcome();
          onSuccess();
        } else {
          runInAction(() => {
            this.loading = false;
          });
          notification.error({
            message: 'Ошибка в авторизации',
            description:
              'Неправильно ввели логин или пароль, попробуйте еще раз или пройдите регистрацию.',
          });
        }
      } else {
        runInAction(() => {
          this.loading = false;
        });
        notification.error({
          message: 'Ошибка в авторизации',
          description: 'Убедитесь в верности введенных данных.',
        });
      }
    }, 2000); // по заданию сказано симулировать запросы
  });

  logout = action(() => {
    this.isAuthenticated = false;
    this.isWelcome = false;
    localStorage.removeItem('authUser');
  });

  onDeleteAccount = action(() => {
    this.user = null;
    this.isAuthenticated = false;
    localStorage.removeItem('authUser');
    localStorage.removeItem('signupLogin');
    localStorage.removeItem('signupPassword');
    localStorage.removeItem('userName');
  });

  loadUser = action(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.isAuthenticated = true;
    }
  });

  loadUserName = action(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      this.userName = storedUserName;
    }
  });
}

export const authStore = new AuthStore();
