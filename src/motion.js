import React from "react";

const ignoredMotionProps = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "whileInView",
  "viewport",
  "whileHover"
]);

const motionElementCache = new Map();

function createMotionElement(tag) {
  return function MotionElement(props) {
    const cleanProps = {};

    for (const [key, value] of Object.entries(props || {})) {
      if (!ignoredMotionProps.has(key)) {
        cleanProps[key] = value;
      }
    }

    return React.createElement(tag, cleanProps);
  };
}

export const motion = new Proxy(
  {},
  {
    get: (_, tag) => {
      if (!motionElementCache.has(tag)) {
        motionElementCache.set(tag, createMotionElement(tag));
      }

      return motionElementCache.get(tag);
    }
  }
);

export function AnimatePresence({ children }) {
  return children;
}
