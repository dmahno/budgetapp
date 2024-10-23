import { r as reactExports, j as jsxRuntimeExports, c as createRoot } from "./react-vendor-DrrBIhui.js";
import "./vendor-K__oi9SH.js";
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
const viteLogo = "/vite.svg";
const reactLogo = "/assets/react-CHdo91hT.svg";
function App() {
  const [count, setCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        href: "https://vite.dev",
        target: "_blank",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        href: "https://react.dev",
        target: "_blank",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo"
        })
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
      children: "Vite + React"
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "card",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        onClick: () => setCount((count2) => count2 + 1),
        children: ["count is ", count]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
        children: ["Edit ", /* @__PURE__ */ jsxRuntimeExports.jsx("code", {
          children: "src/App.tsx"
        }), " and save to test HMR"]
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "read-the-docs",
      children: "Click on the Vite and React logos to learn more"
    })]
  });
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, {
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
}));
