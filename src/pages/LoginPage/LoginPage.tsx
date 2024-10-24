import {ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input, Button, Form, Spin} from 'antd';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {MAIN_PAGE_LINK} from 'shared/constants';

export const LoginPage = observer(() => {
  const {loginAction, setLogin, setPassword, loading, password, login} =
    authStore;

  const navigate = useNavigate();

  const handleLogin = () => {
    loginAction(() => {
      navigate(MAIN_PAGE_LINK);
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
      <Form autoComplete="none">
        <Form.Item label="Логин">
          <Input
            autoComplete="none"
            value={login}
            onChange={onInputLoginChange}
          />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input.Password
            autoComplete="none"
            value={password}
            onChange={onInputPasswordChange}
          />
        </Form.Item>
        <Button type="primary" onClick={handleLogin} disabled={loading}>
          Войти
        </Button>
      </Form>
    </Spin>
  );
});