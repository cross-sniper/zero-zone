// react-zero.ts
export function jsx(type: any, props: any, ...children: any[]) {
  let domElem;

  if (typeof type === "function") {
    // Handle components (functions that return JSX)
    return type(props); // Execute component and return the result
  }

  domElem = type === "Fragment" ? document.createDocumentFragment() : document.createElement(type);

  // Handle properties (attributes and event listeners)
  for (const prop in props) {
    if (prop === "children") continue; // We handle children separately
    
    if (prop.startsWith("on")) {
      // Event listener (e.g., onClick)
      const eventName = prop.substring(2).toLowerCase();
      domElem.addEventListener(eventName, props[prop]);
    } else {
      // Set as an attribute
      domElem.setAttribute(prop, props[prop]);
    }
  }

  // Append children
  children.forEach(child => {
    if (typeof child === 'string' || typeof child === 'number') {
      domElem.appendChild(document.createTextNode(child.toString()));
    } else if (child instanceof Node) {
      domElem.appendChild(child);
    }
  });

  return domElem;
}

export const Fragment = "Fragment";

// Export as default object
export default {
  createElement: jsx,
  Fragment
};
