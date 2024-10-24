import { o as observer, u as useNavigate, l as jsxRuntimeExports } from "./react-vendor-daDPvq-_.js";
import { a as authStore, M as MAIN_PAGE_LINK } from "./index-CHyRofl2.js";
import { S as Spin, a as Form, I as Input, B as Button } from "./ant-design-vendor-CPKA6C1c.js";
import "./vendor-D2zAu1UM.js";
const LoginPage = observer(() => {
  const {
    loginAction,
    setLogin,
    setPassword,
    loading,
    password,
    login
  } = authStore;
  const navigate = useNavigate();
  const handleLogin = () => {
    loginAction(() => {
      navigate(MAIN_PAGE_LINK);
    });
  };
  const onInputLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const onInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Spin, {
    spinning: loading,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, {
        label: "Логин",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
          value: login,
          onChange: onInputLoginChange
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Form.Item, {
        label: "Пароль",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input.Password, {
          value: password,
          onChange: onInputPasswordChange
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        type: "primary",
        onClick: handleLogin,
        disabled: loading,
        children: "Войти"
      })]
    })
  });
});
export {
  LoginPage
};
