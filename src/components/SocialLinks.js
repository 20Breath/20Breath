import { motion } from "../motion.js?v=20260628-visual-polish2";
import { Camera, Music2 } from "./Icons.js?v=20260628-visual-polish2";
import { h, pageTransition, revealItem, staggerContainer, viewportReveal } from "../utils.js?v=20260628-visual-polish2";

const platforms = [
  { name: "TikTok", icon: Music2, url: "https://www.tiktok.com/@20breaths?_r=1&_t=ZS-96dxY9ZpqJk" },
  { name: "Instagram", icon: Camera, url: "https://instagram.com/20_breath" }
];

export function SocialLinks() {
  return h(
    motion.main,
    { ...pageTransition, className: "social-page relative overflow-hidden px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto max-w-6xl" },
      h("div", { className: "mb-10 text-center" }, h(motion.h1, { className: "text-4xl font-black text-navy sm:text-5xl", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }, "ØªØ§Ø¨Ø¹ÙˆÙ†Ø§ Ø¹Ù„Ù‰ Ù…Ù†ØµØ§ØªÙ†Ø§"), h(motion.p, { className: "mx-auto mt-4 max-w-xl text-lg font-medium leading-8 text-navy/68", initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: 0.08 } }, "Ù†Ø´Ø§Ø±Ùƒ Ù…Ø­ØªÙˆÙ‰ Ù‚ØµÙŠØ± ÙˆÙˆØ§Ø¶Ø­ Ø¹Ù† Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ Ø¨Ø·Ø±ÙŠÙ‚Ø© Ù‚Ø±ÙŠØ¨Ø© Ù…Ù† Ø§Ù„Ù†Ø§Ø³.")),
      h(
        motion.div,
        { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: viewportReveal },
        platforms.map((platform, index) =>
          h(
            motion.article,
            {
              key: platform.name,
              variants: revealItem,
              whileHover: { y: -8 },
              className: "social-card premium-card group rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-navy/5"
            },
            h("div", { className: "icon-tile mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white" }, h(platform.icon, { size: 26 })),
            h("h2", { className: "mb-5 text-2xl font-black text-navy" }, platform.name),
            h(
              motion.a,
              {
                href: platform.url,
                target: "_blank",
                rel: "noreferrer",
                whileHover: { y: -2 },
                whileTap: { scale: 0.98 },
                className: "button-premium inline-flex rounded-full bg-navy px-6 py-3 text-sm font-black text-white transition hover:bg-medical"
              },
              "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ø­Ø³Ø§Ø¨"
            )
          )
        )
      )
    )
  );
}
