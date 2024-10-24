import {ChangeEvent, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input, Button, Form, Spin} from 'antd';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {LOGIN_PAGE_LINK} from 'shared/constants';

export const SignUpPage = observer(() => {
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
  } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    validateLogin();
  }, [validateLogin, login]);

  const handleSignUp = () => {
    signUp(() => {
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
    <Spin spinning={loading}>
      <Form autoComplete="none">
        <Form.Item label="Логин">
          <Input
            autoComplete="none"
            value={login}
            onChange={onInputLoginChange}
          />
          {isLoginInvalid && (
            <small style={{color: 'red'}}>Только латинские буквы</small>
          )}
        </Form.Item>
        <Form.Item label="Имя пользователя">
          <Input value={userName} onChange={onInputUserNameChange} />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input.Password
            autoComplete="none"
            value={password}
            onChange={onInputPasswordChange}
          />
          {isPasswordInvalid && (
            <small style={{color: 'red'}}>
              Пароль должен быть больше 5 символов
            </small>
          )}
        </Form.Item>
        <Button
          type="primary"
          onClick={handleSignUp}
          disabled={loading || !isFormValid()}
        >
          Зарегистрироваться
        </Button>
      </Form>
    </Spin>
  );
});
