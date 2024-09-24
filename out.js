"use strict";
(() => {
  // src/react-zero.ts
  function jsx(type, props, ...children) {
    const domElem = type === "Fragment" ? document.createDocumentFragment() : document.createElement(type);
    for (const prop in props) {
      if (prop === "children") {
        continue;
      }
      if (prop.startsWith("on")) {
        const eventName = prop.substring(2).toLowerCase();
        domElem.addEventListener(eventName, props[prop]);
      } else {
        domElem.setAttribute(prop, props[prop]);
      }
    }
    children.forEach((child) => {
      if (typeof child === "string" || typeof child === "number") {
        domElem.appendChild(document.createTextNode(child.toString()));
      } else if (child instanceof Node) {
        domElem.appendChild(child);
      }
    });
    return domElem;
  }
  var Fragment = "Fragment";
  var react_zero_default = {
    createElement: jsx,
    Fragment
  };

  // src/App.tsx
  function App() {
    return /* @__PURE__ */ react_zero_default.createElement(react_zero_default.Fragment, null, /* @__PURE__ */ react_zero_default.createElement("button", { onClick: () => alert("Hello!") }, "hello, world"));
  }
  var App_default = App;

  // src/main.tsx
  root = document.getElementById("root");
  root.appendChild(App_default());
})();
