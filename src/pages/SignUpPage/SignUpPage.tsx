import React, {ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input, Button, Form, Spin} from 'antd';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {LOGIN_PAGE_LINK} from 'shared/constants';

export const SignUpPage: React.FC = observer(() => {
  const {signUp, setLogin, setPassword, loading, password, login} = authStore;
  const navigate = useNavigate();

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

  return (
    <Spin spinning={loading}>
      <Form>
        <Form.Item label="Логин">
          <Input value={login} onChange={onInputLoginChange} />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input.Password value={password} onChange={onInputPasswordChange} />
        </Form.Item>
        <Button type="primary" onClick={handleSignUp} disabled={loading}>
          Зарегистрироваться
        </Button>
      </Form>
    </Spin>
  );
});
