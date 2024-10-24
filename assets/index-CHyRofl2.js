const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainPage-Dfj3A7YU.js","assets/react-vendor-daDPvq-_.js","assets/vendor-D2zAu1UM.js","assets/ant-design-vendor-CPKA6C1c.js","assets/Header-BkCS9zxC.js","assets/LoginPage-CYTV8E9l.js","assets/NotFoundPage-Bk82JbWL.js","assets/SignUpPage-NE7gH35D.js","assets/AimsPage-HYZmbkK3.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { m as makeAutoObservable, k as action, r as reactExports, l as jsxRuntimeExports, o as observer, n as Routes, p as Route, N as Navigate, q as createRoot, B as BrowserRouter } from "./react-vendor-daDPvq-_.js";
import { aq as cryptoJsExports } from "./vendor-D2zAu1UM.js";
import { s as staticMethods } from "./ant-design-vendor-CPKA6C1c.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function isTImageKey(value) {
  const validKeys = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  return validKeys.includes(value);
}
class AuthStore {
  constructor() {
    __publicField(this, "user", null);
    __publicField(this, "isAuthenticated", false);
    __publicField(this, "loading", false);
    __publicField(this, "login", "");
    __publicField(this, "password", "");
    __publicField(this, "availableImages", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]);
    __publicField(this, "setLogin", action((value) => {
      this.login = value;
    }));
    __publicField(this, "setPassword", action((value) => {
      this.password = value;
    }));
    // я решил затащить логику присваивания аватарок пользователю, при авторизации пользователю присваивается рандомная аватарка
    __publicField(this, "getRandomImage", () => {
      const randomIndex = Math.floor(Math.random() * this.availableImages.length);
      return this.availableImages[randomIndex];
    });
    __publicField(this, "signUp", action((onSuccess) => {
      this.loading = true;
      setTimeout(() => {
        const hashedPassword = cryptoJsExports.SHA256(this.password).toString();
        localStorage.setItem("signupLogin", this.login);
        localStorage.setItem("signupPassword", hashedPassword);
        const randomImage = this.getRandomImage();
        localStorage.setItem("userImage", randomImage);
        staticMethods.success({
          message: "Вы успешно зарегистрировались",
          description: "Используйте регистриционные данные для входа"
        });
        this.loading = false;
        onSuccess();
      }, 2e3);
    }));
    __publicField(this, "loginAction", action((onSuccess) => {
      this.loading = true;
      setTimeout(() => {
        const storedLogin = localStorage.getItem("signupLogin");
        const storedPassword = localStorage.getItem("signupPassword");
        const hashedPassword = cryptoJsExports.SHA256(this.password).toString();
        if (storedLogin && storedPassword) {
          if (storedLogin === this.login && storedPassword === hashedPassword) {
            let userImage = localStorage.getItem("userImage");
            if (!isTImageKey(userImage)) {
              userImage = this.getRandomImage();
              localStorage.setItem("userImage", userImage);
            }
            this.user = {
              id: 1,
              first_name: this.login,
              avatar: userImage
            };
            this.isAuthenticated = true;
            localStorage.setItem("authUser", JSON.stringify(this.user));
            this.loading = false;
            onSuccess();
          } else {
            this.loading = false;
            staticMethods.error({
              message: "Ошибка в авторизации",
              description: "Не правильно ввели логи или пароль, попробуйте еще раз или пройдите регистрацию"
            });
          }
        } else {
          this.loading = false;
          staticMethods.error({
            message: "Ошибка в авторизации",
            description: "Убедитесь в верности введенных данных"
          });
        }
      }, 2e3);
    }));
    __publicField(this, "logout", action(() => {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("authUser");
      localStorage.removeItem("signupLogin");
      localStorage.removeItem("signupPassword");
    }));
    __publicField(this, "loadUser", action(() => {
      const storedUser = localStorage.getItem("authUser");
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.isAuthenticated = true;
      }
    }));
    makeAutoObservable(this);
    this.loadUser();
  }
}
const authStore = new AuthStore();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const MainPageLazy = reactExports.lazy(async () => __vitePreload(async () => {
  const { MainPage } = await import("./MainPage-Dfj3A7YU.js");
  return { MainPage };
}, true ? __vite__mapDeps([0,1,2,3,4]) : void 0).then(({
  MainPage
}) => ({
  default: MainPage
})));
const LoginPageLazy = reactExports.lazy(async () => __vitePreload(async () => {
  const { LoginPage } = await import("./LoginPage-CYTV8E9l.js");
  return { LoginPage };
}, true ? __vite__mapDeps([5,1,2,3]) : void 0).then(({
  LoginPage
}) => ({
  default: LoginPage
})));
const NotFoundPageLazy = reactExports.lazy(async () => __vitePreload(async () => {
  const { NotFoundPage } = await import("./NotFoundPage-Bk82JbWL.js");
  return { NotFoundPage };
}, true ? __vite__mapDeps([6,1,2,3]) : void 0).then(({
  NotFoundPage
}) => ({
  default: NotFoundPage
})));
const SignUpPageLazy = reactExports.lazy(async () => __vitePreload(async () => {
  const { SignUpPage } = await import("./SignUpPage-NE7gH35D.js");
  return { SignUpPage };
}, true ? __vite__mapDeps([7,1,2,3]) : void 0).then(({
  SignUpPage
}) => ({
  default: SignUpPage
})));
const AimsPageLazy = reactExports.lazy(async () => __vitePreload(async () => {
  const { AimsPage } = await import("./AimsPage-HYZmbkK3.js");
  return { AimsPage };
}, true ? __vite__mapDeps([8,1,2,3,4]) : void 0).then(({
  AimsPage
}) => ({
  default: AimsPage
})));
const MAIN_PAGE_LINK = "/";
const AIMS_PAGE_LINK = "/aims";
const LOGIN_PAGE_LINK = "/login";
const SIGNUP_PAGE_LINK = "/signup";
const RoutePath = {
  notFound: "*",
  mainPage: MAIN_PAGE_LINK,
  loginPage: LOGIN_PAGE_LINK,
  signUpPage: SIGNUP_PAGE_LINK,
  aimsPage: AIMS_PAGE_LINK
};
const {
  notFound,
  mainPage,
  loginPage,
  signUpPage,
  aimsPage
} = RoutePath;
const routeConfig = {
  loginPage: {
    path: loginPage,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPageLazy, {}),
    authorization: false
  },
  signUpPage: {
    path: signUpPage,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(SignUpPageLazy, {}),
    authorization: false
  },
  notFound: {
    path: notFound,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPageLazy, {}),
    authorization: false
  },
  // Защищенные страницы
  mainPage: {
    path: mainPage,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(MainPageLazy, {})
  },
  aimsPage: {
    path: aimsPage,
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(AimsPageLazy, {})
  }
};
const AppRouter = observer(() => {
  const {
    isAuthenticated
  } = authStore;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
    fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, {
      children: [Object.values(routeConfig).map((route) => {
        const {
          element,
          path,
          authorization = true
        } = route;
        if (authorization && !isAuthenticated) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
            path,
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, {
              to: LOGIN_PAGE_LINK,
              replace: true
            })
          }, path);
        }
        if (isAuthenticated && (path === SIGNUP_PAGE_LINK || path === LOGIN_PAGE_LINK)) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
            path,
            element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, {
              to: MAIN_PAGE_LINK,
              replace: true
            })
          }, path);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
          path,
          element
        }, path);
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Route, {
        path: "*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPageLazy, {})
      })]
    })
  });
});
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
    fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {})
    })
  });
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, {
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
  })
}));
export {
  LOGIN_PAGE_LINK as L,
  MAIN_PAGE_LINK as M,
  authStore as a
};
