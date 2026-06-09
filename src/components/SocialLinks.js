import { motion } from "../motion.js?v=20260610-smooth-join-email-required";
import { Camera, Music2 } from "./Icons.js?v=20260610-share-site";
import { h, pageTransition } from "../utils.js";

const platforms = [
  { name: "TikTok", icon: Music2, url: "https://www.tiktok.com/@20breaths?_r=1&_t=ZS-96dxY9ZpqJk" },
  { name: "Instagram", icon: Camera, url: "https://instagram.com/20_breath" }
];

export function SocialLinks() {
  return h(
    motion.main,
    { ...pageTransition, className: "px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto max-w-6xl" },
      h("div", { className: "mb-10 text-center" }, h("h1", { className: "text-4xl font-black text-navy sm:text-5xl" }, "تابعونا على منصاتنا"), h("p", { className: "mx-auto mt-4 max-w-xl text-lg font-medium leading-8 text-navy/68" }, "نشارك محتوى قصير وواضح عن العلاج التنفسي، بطريقة قريبة من الناس.")),
      h(
        "div",
        { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" },
        platforms.map((platform, index) =>
          h(
            motion.article,
            {
              key: platform.name,
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.04 },
              whileHover: { y: -6 },
              className: "rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-navy/5"
            },
            h("div", { className: "mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white" }, h(platform.icon, { size: 26 })),
            h("h2", { className: "mb-5 text-2xl font-black text-navy" }, platform.name),
            h(
              "a",
              {
                href: platform.url,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex rounded-full bg-navy px-6 py-3 text-sm font-black text-white transition hover:bg-medical"
              },
              "زيارة الحساب"
            )
          )
        )
      )
    )
  );
}
