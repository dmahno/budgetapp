import { o as observer, l as jsxRuntimeExports } from "./react-vendor-daDPvq-_.js";
import { a as authStore } from "./index-CHyRofl2.js";
const image1 = "/assets/1-sJkgyE0G.jpg";
const image2 = "/assets/2-Cf2csoBt.jpg";
const image3 = "/assets/3-BqxNZqaK.jpg";
const image4 = "/assets/4-D2I8g40-.jpg";
const image5 = "/assets/5-DINBPloV.jpg";
const images = {
  "1.jpg": image1,
  "2.jpg": image2,
  "3.jpg": image3,
  "4.jpg": image4,
  "5.jpg": image5
};
const Header = observer(() => {
  var _a, _b;
  const avatarKey = (_a = authStore.user) == null ? void 0 : _a.avatar;
  const userAvatar = avatarKey ? images[avatarKey] : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", {
    children: authStore.isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [userAvatar && /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        src: userAvatar,
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
