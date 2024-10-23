import { o as observer, l as jsxRuntimeExports } from "./react-vendor-daDPvq-_.js";
import { a as authStore } from "./index-TlG_X-3H.js";
const Header = observer(() => {
  var _a, _b;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
    children: authStore.isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        src: (_a = authStore.user) == null ? void 0 : _a.avatar,
        alt: "User Avatar"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: (_b = authStore.user) == null ? void 0 : _b.first_name
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        onClick: () => authStore.logout(),
        children: "Logout"
      })]
    })
  });
});
export {
  Header as H
};
