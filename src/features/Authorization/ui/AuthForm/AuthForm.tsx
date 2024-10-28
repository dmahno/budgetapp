import {ChangeEvent, FormEvent, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {MAIN_PAGE_LINK, SIGNUP_PAGE_LINK} from 'shared/constants';
import {Button, Input, ReactRouterCustomLink} from 'shared/ui';

import styles from './AuthForm.module.scss';

export const AuthForm = observer(() => {
  const {
    loginAction,
    setLogin,
    setPassword,
    areFieldsFilled,
    loading,
    password,
    login,
    userName,
  } = authStore;

  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginAction(() => {
      navigate(MAIN_PAGE_LINK);
    });
  };

  const onInputLoginChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLogin(e.target.value);
    },
    [setLogin],
  );

  const onInputPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  const isFormFilled = areFieldsFilled({
    login: login,
    password: password,
  });

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>
          Привет{userName ? `, ${userName}` : ''}!
          <br />
          Войди в приложение
        </h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            label="Логин"
            autoComplete="none"
            value={login}
            onChange={onInputLoginChange}
          />
          <Input
            label="Пароль"
            autoComplete="none"
            password
            value={password}
            onChange={onInputPasswordChange}
          />

          <Button
            loading={loading}
            width="full"
            disabled={loading || !isFormFilled}
          >
            Войти
          </Button>
        </form>

        <ReactRouterCustomLink
          className={styles.signUpLink}
          to={SIGNUP_PAGE_LINK}
        >
          У меня нет логина и пароля
        </ReactRouterCustomLink>
      </div>
    </>
  );
});
