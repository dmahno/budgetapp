import {ChangeEvent, FormEvent, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {LOGIN_PAGE_LINK} from 'shared/constants';
import {Button, Input, ReactRouterCustomLink} from 'shared/ui';

import styles from './SignUpForm.module.scss';

export const SignUpForm = observer(() => {
  const {
    signUp,
    setLogin,
    setPassword,
    setUserName,
    validateLogin,
    loading,
    password,
    login,
    userName,
    isLoginInvalid,
    isPasswordInvalid,
    isFormValid,
    resetForm,
  } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    validateLogin();
  }, [validateLogin, login]);

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(() => {
      resetForm();
      navigate(LOGIN_PAGE_LINK);
    });
  };

  const onInputLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onInputUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formHeader}>
        Привет{userName ? `, ${userName}` : ''}!
        <br />
        Тут проходит регистрация
      </h1>
      <form className={styles.form} onSubmit={handleSignUp}>
        <Input
          label="Логин"
          autoComplete="none"
          value={login}
          onChange={onInputLoginChange}
        />
        {isLoginInvalid && (
          <small style={{color: 'red'}}>Только латинские буквы</small>
        )}

        <Input
          label="Имя пользователя"
          value={userName}
          onChange={onInputUserNameChange}
        />

        <Input
          label="Пароль"
          password
          autoComplete="none"
          value={password}
          onChange={onInputPasswordChange}
        />
        {isPasswordInvalid && (
          <small style={{color: 'red'}}>
            Пароль должен быть больше 5 символов
          </small>
        )}

        <Button width="full" disabled={loading || !isFormValid()}>
          Зарегистрироваться
        </Button>
      </form>
      <ReactRouterCustomLink className={styles.signUpLink} to={LOGIN_PAGE_LINK}>
        Перейти на страницу авторизации
      </ReactRouterCustomLink>
    </div>
  );
});
