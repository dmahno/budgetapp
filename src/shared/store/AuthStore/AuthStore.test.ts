import {describe, it, expect, vi, beforeEach} from 'vitest';
import {notification} from 'antd';

import {authStore} from './AuthStore';

vi.mock('crypto-js', () => ({
  SHA256: vi.fn((value) => ({toString: () => `hashed-${value}`})),
}));

vi.mock('antd', () => ({
  notification: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

const waitForAsync = (delay = 2000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

describe('AuthStore', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with default values', () => {
    expect(authStore.user).toBeNull();
    expect(authStore.isAuthenticated).toBe(false);
    expect(authStore.loading).toBe(false);
  });

  it('should set and validate login', () => {
    authStore.setLogin('TestUser');
    expect(authStore.login).toBe('testuser');
    expect(authStore.isLoginInvalid).toBe(false);

    authStore.setLogin('InvalidUser123');
    expect(authStore.isLoginInvalid).toBe(true);
  });

  it('should set and validate password', () => {
    authStore.setPassword('1234');
    expect(authStore.password).toBe('1234');
    expect(authStore.isPasswordInvalid).toBe(true);

    authStore.setPassword('ValidPassword');
    expect(authStore.isPasswordInvalid).toBe(false);
  });

  it('should clear form fields on resetForm', () => {
    authStore.setLogin('User');
    authStore.setPassword('Password');
    authStore.resetForm();
    expect(authStore.login).toBe('');
    expect(authStore.password).toBe('');
    expect(authStore.userName).toBe('');
  });

  it('should handle successful signup', async () => {
    const onSuccess = vi.fn();
    authStore.setLogin('newuser');
    authStore.setPassword('securepassword');
    authStore.setUserName('New User');

    await authStore.signUp(onSuccess);
    await waitForAsync();

    expect(localStorage.getItem('signupLogin')).toBe('hashed-newuser');
    expect(notification.success).toHaveBeenCalledWith({
      message: 'Вы успешно зарегистрировались',
      description: 'Используйте регистрационные данные для входа',
    });
    expect(onSuccess).toHaveBeenCalled();
  });

  it('should show error for existing login during signup', async () => {
    const onSuccess = vi.fn();
    localStorage.setItem('signupLogin', 'hashed-newuser');

    authStore.setLogin('newuser');
    await authStore.signUp(onSuccess);
    await waitForAsync();

    expect(notification.error).toHaveBeenCalledWith({
      message: 'Ошибка',
      description:
        'Пользователь с таким логином уже существует. Введите другой логин.',
    });
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it('should handle successful login', async () => {
    localStorage.setItem('signupLogin', 'hashed-testuser');
    localStorage.setItem('signupPassword', 'hashed-testpassword');

    authStore.setLogin('testuser');
    authStore.setPassword('testpassword');

    const onSuccess = vi.fn();
    await authStore.loginAction(onSuccess);
    await waitForAsync();

    expect(authStore.isAuthenticated).toBe(true);
    expect(onSuccess).toHaveBeenCalled();
    expect(notification.error).not.toHaveBeenCalled();
  });

  it('should show error for incorrect login credentials', async () => {
    localStorage.setItem('signupLogin', 'hashed-correctuser');
    localStorage.setItem('signupPassword', 'hashed-correctpassword');

    authStore.setLogin('wronguser');
    authStore.setPassword('wrongpassword');

    const onSuccess = vi.fn();
    await authStore.loginAction(onSuccess);
    await waitForAsync();

    expect(authStore.isAuthenticated).toBe(true);
    expect(onSuccess).not.toHaveBeenCalled();
    expect(notification.error).toHaveBeenCalledWith({
      message: 'Ошибка в авторизации',
      description:
        'Неправильно ввели логин или пароль, попробуйте еще раз или пройдите регистрацию.',
    });
  });

  it('should log out and reset authentication', () => {
    authStore.isAuthenticated = true;
    authStore.logout();
    expect(authStore.isAuthenticated).toBe(false);
    expect(localStorage.getItem('authUser')).toBeNull();
  });

  it('should delete account and clear localStorage', () => {
    localStorage.setItem('signupLogin', 'hashed-user');
    authStore.onDeleteAccount();
    expect(authStore.user).toBeNull();
    expect(localStorage.getItem('signupLogin')).toBeNull();
  });

  it('should load user from localStorage', () => {
    localStorage.setItem(
      'authUser',
      JSON.stringify({id: 1, userNameInfo: 'User', avatar: '1.jpg'}),
    );
    authStore.loadUser();
    expect(authStore.user).toEqual({
      id: 1,
      userNameInfo: 'User',
      avatar: '1.jpg',
    });
    expect(authStore.isAuthenticated).toBe(true);
  });
});
