import { h } from "../utils.js";

function SvgIcon({ children, size = 24, ...props }) {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...props
    },
    children
  );
}

export const Menu = (props) => h(SvgIcon, props, h("path", { d: "M4 6h16M4 12h16M4 18h16" }));
export const X = (props) => h(SvgIcon, props, h("path", { d: "M18 6 6 18M6 6l12 12" }));
export const Share2 = (props) => h(SvgIcon, props, h("circle", { cx: "18", cy: "5", r: "3" }), h("circle", { cx: "6", cy: "12", r: "3" }), h("circle", { cx: "18", cy: "19", r: "3" }), h("path", { d: "m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" }));
export const Activity = (props) => h(SvgIcon, props, h("path", { d: "M3 12h4l3-8 4 16 3-8h4" }));
export const Stethoscope = (props) => h(SvgIcon, props, h("path", { d: "M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M14 8a5 5 0 0 0 10 0v-1M19 13v3a5 5 0 0 1-10 0v-2" }));
export const HeartPulse = (props) => h(SvgIcon, props, h("path", { d: "M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" }), h("path", { d: "M3 12h4l2-3 3 7 2-4h7" }));
export const Brain = (props) => h(SvgIcon, props, h("path", { d: "M9 3a4 4 0 0 0-4 4 4 4 0 0 0-2 6.9A4 4 0 0 0 7 20h2V3ZM15 3a4 4 0 0 1 4 4 4 4 0 0 1 2 6.9A4 4 0 0 1 17 20h-2V3Z" }), h("path", { d: "M9 8H6M15 8h3M9 13H5M15 13h4" }));
export const Clapperboard = (props) => h(SvgIcon, props, h("path", { d: "M4 11h16v9H4zM4 11l3-7h4l-3 7M11 11l3-7h4l-3 7" }));
export const Camera = (props) => h(SvgIcon, props, h("path", { d: "M4 7h4l2-3h4l2 3h4v13H4z" }), h("circle", { cx: "12", cy: "13", r: "4" }));
export const Music2 = (props) => h(SvgIcon, props, h("path", { d: "M9 18V5l10-2v13" }), h("circle", { cx: "6", cy: "18", r: "3" }), h("circle", { cx: "16", cy: "16", r: "3" }));
