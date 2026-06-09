import { h } from "../utils.js";

const quickLinks = [
  ["home", "الرئيسية"],
  ["about", "عن الفريق"],
  ["join", "انضم لنا"],
  ["socials", "منصاتنا"],
  ["contact", "تواصل معنا"]
];

export function Footer() {
  return h(
    "footer",
    { className: "border-t border-navy/10 bg-white/78 px-4 py-9" },
    h(
      "div",
      { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row" },
      h(
        "div",
        { className: "flex flex-wrap items-center justify-center gap-2" },
        quickLinks.map(([id, label]) =>
          h(
            "button",
            {
              key: id,
              onClick: () => (window.location.hash = id),
              className: "rounded-full px-4 py-2 text-sm font-bold text-navy/72 transition hover:bg-soft hover:text-medical"
            },
            label
          )
        )
      )
    )
  );
}
