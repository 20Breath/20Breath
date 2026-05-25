import React from "react";

export const h = React.createElement;

export const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.36, ease: "easeOut" }
};

export function goTo(route) {
  window.location.hash = route;
}
