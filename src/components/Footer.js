import React from "react";
import { Share2 } from "./Icons.js?v=20260628-visual-polish2";
import { shareWebsite } from "../share.js?v=20260628-visual-polish2";
import { h } from "../utils.js?v=20260628-visual-polish2";

const quickLinks = [
  ["home", "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©"],
  ["about", "Ø¹Ù† Ø§Ù„ÙØ±ÙŠÙ‚"],
  ["join", "Ø§Ù†Ø¶Ù… Ù„Ù†Ø§"],
  ["socials", "Ù…Ù†ØµØ§ØªÙ†Ø§"],
  ["contact", "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§"]
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
        setShareMessage("ØªØ¹Ø°Ø±Øª Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ©ØŒ Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰");
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
              className: "nav-link rounded-full px-4 py-2 text-sm font-bold text-navy/72 transition hover:bg-soft hover:text-medical"
            },
            label
          )
        ),
        h(
          "button",
          {
            type: "button",
            onClick: shareSite,
            className: "nav-link inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-navy/72 transition hover:bg-soft hover:text-medical"
          },
          h(Share2, { size: 17 }),
          "Ø´Ø§Ø±Ùƒ Ø§Ù„Ù…ÙˆÙ‚Ø¹"
        ),
        shareMessage &&
          h("span", { className: "rounded-full bg-navy px-4 py-2 text-xs font-black text-white shadow-soft" }, shareMessage)
      )
    )
  );
}
