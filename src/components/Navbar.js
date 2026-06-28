import React from "react";
import { Menu, Share2, X } from "./Icons.js?v=20260628-visual-polish";
import { shareWebsite } from "../share.js?v=20260628-visual-polish";
import { h } from "../utils.js";

const links = [
  ["home", "الرئيسية"],
  ["about", "عن 20 نفس"],
  ["join", "انضم لنا"],
  ["socials", "منصاتنا"],
  ["contact", "تواصل معنا"]
];

export function Navbar({ route }) {
  const [open, setOpen] = React.useState(false);
  const [shareMessage, setShareMessage] = React.useState("");

  async function shareSite() {
    try {
      const message = await shareWebsite();
      setShareMessage(message);
      if (message) {
        setTimeout(() => setShareMessage(""), 2200);
      }

      setOpen(false);
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareMessage("تعذرت المشاركة، حاول مرة أخرى");
        setTimeout(() => setShareMessage(""), 2200);
      }
    }
  }

  const linkButton = ([id, label], mobile = false) =>
    h(
      "button",
      {
        key: id,
        onClick: () => {
          window.location.hash = id;
          setOpen(false);
        },
        className: [
          "nav-link rounded-full px-4 py-2 text-sm font-bold transition",
          route === id ? "bg-navy text-white shadow-soft" : "text-navy/75 hover:bg-white hover:text-navy",
          mobile ? "w-full text-right" : ""
        ].join(" ")
      },
      label
    );

  return h(
    "header",
    { className: "fixed inset-x-0 top-0 z-50 px-4 pt-4" },
    h(
      "nav",
      { className: "nav-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3" },
      h(
        "button",
        {
          onClick: () => (window.location.hash = "home"),
          className: "flex items-center gap-3 rounded-full text-right"
        },
        h("img", {
          src: "./assets/logo-20-nafas.jpeg",
          alt: "شعار 20 نفس",
          className: "h-11 w-11 rounded-full object-contain ring-1 ring-navy/10"
        }),
        h(
          "span",
          { className: "leading-tight" },
          h("span", { className: "block text-base font-black text-navy" }, "20 نفس"),
          h("span", { className: "block text-xs font-bold text-medical" }, "تنفس بأمان")
        )
      ),
      h(
        "div",
        { className: "hidden items-center gap-1 md:flex" },
        links.map((link) => linkButton(link)),
        h(
          "button",
          {
            type: "button",
            onClick: shareSite,
            className: "nav-link inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-navy/75 transition hover:bg-white hover:text-navy"
          },
          h(Share2, { size: 17 }),
          "شارك الموقع"
        )
      ),
      h(
        "button",
        {
          className: "grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-sm md:hidden",
          onClick: () => setOpen((value) => !value),
          "aria-label": open ? "إغلاق القائمة" : "فتح القائمة"
        },
        open ? h(X, { size: 21 }) : h(Menu, { size: 21 })
      )
    ),
    open &&
      h(
        "div",
        { className: "nav-glass mx-auto mt-3 max-w-6xl rounded-3xl p-3 md:hidden" },
        h(
          "div",
          { className: "grid gap-2" },
          links.map((link) => linkButton(link, true)),
          h(
            "button",
            {
              type: "button",
              onClick: shareSite,
              className: "nav-link flex w-full items-center justify-end gap-2 rounded-full px-4 py-2 text-right text-sm font-bold text-navy/75 transition hover:bg-white hover:text-navy"
            },
            "شارك الموقع",
            h(Share2, { size: 17 })
          )
        )
      ),
    shareMessage &&
      h(
        "div",
        { className: "mx-auto mt-3 max-w-6xl px-2 text-left md:text-left" },
        h("span", { className: "inline-flex rounded-full bg-navy px-4 py-2 text-xs font-black text-white shadow-soft" }, shareMessage)
      )
  );
}
