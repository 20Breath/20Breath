import React from "react";
import { Share2 } from "./Icons.js?v=20260610-share-link-muted";
import { shareWebsite } from "../share.js?v=20260610-share-link-muted";
import { h } from "../utils.js";

const quickLinks = [
  ["home", "الرئيسية"],
  ["about", "عن الفريق"],
  ["join", "انضم لنا"],
  ["socials", "منصاتنا"],
  ["contact", "تواصل معنا"]
];

export function Footer() {
  const [shareMessage, setShareMessage] = React.useState("");

  async function shareSite() {
    try {
      const message = await shareWebsite();
      setShareMessage(message);
      if (message) {
        setTimeout(() => setShareMessage(""), 2200);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareMessage("تعذرت المشاركة، حاول مرة أخرى");
        setTimeout(() => setShareMessage(""), 2200);
      }
    }
  }

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
        ),
        h(
          "button",
          {
            type: "button",
            onClick: shareSite,
            className: "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-navy/72 transition hover:bg-soft hover:text-medical"
          },
          h(Share2, { size: 17 }),
          "شارك الموقع"
        ),
        shareMessage &&
          h("span", { className: "rounded-full bg-navy px-4 py-2 text-xs font-black text-white shadow-soft" }, shareMessage)
      )
    )
  );
}
