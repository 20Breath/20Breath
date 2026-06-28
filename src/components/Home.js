import { motion } from "../motion.js?v=20260628-visual-polish2";
import { Activity, Brain, Clapperboard, HeartPulse, Stethoscope } from "./Icons.js?v=20260628-visual-polish2";
import { goTo, h, pageTransition, revealItem, staggerContainer, viewportReveal } from "../utils.js?v=20260628-visual-polish2";

const cards = [
  {
    icon: Stethoscope,
    title: "Ø§Ù„ØªØ¹Ø±ÙŠÙ Ø¨Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠ",
    body: "Ø´Ø±Ø­ Ù…Ø¨Ø³Ø· Ø¹Ù† Ø§Ù„ØªØ®ØµØµ ÙˆØ¯ÙˆØ±Ù‡ ÙˆÙ†Ø´Ø£ØªÙ‡ ÙˆØ£ÙŠÙ† ÙŠØªÙ… ØªØ¯Ø±ÙŠØ³Ù‡ ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©ØŒ ÙˆÙ…Ø§Ù‡ÙŠ Ø§Ù„ØªØ®ØµØµØ§Øª Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø© Ø§Ù„ØªØ§Ø¨Ø¹Ø© Ù„Ù‡."
  },
  {
    icon: HeartPulse,
    title: "Ø§Ù„ØªÙˆØ¹ÙŠØ© Ø¨Ø§Ù„Ø£Ù…Ø±Ø§Ø¶ Ø§Ù„ØªÙ†ÙØ³ÙŠØ©",
    body: "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ø¶Ø­Ø© Ø¹Ù† Ø£Ù…Ø±Ø§Ø¶ ÙˆØ­Ø§Ù„Ø§Øª ØªÙ†ÙØ³ÙŠØ© Ù‚Ø¯ Ù„Ø§ ÙŠØ¹Ø±ÙÙ‡Ø§ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ØŒ Ø¨Ù„ØºØ© Ù‚Ø±ÙŠØ¨Ø© ÙˆØ³Ù‡Ù„Ø©."
  },
  {
    icon: Brain,
    title: "ØªØµØ­ÙŠØ­ Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ… Ø§Ù„Ø®Ø§Ø·Ø¦Ø©",
    body: "ØªØ¨Ø³ÙŠØ· Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø·Ø¨ÙŠØ© ÙˆØªØµØ­ÙŠØ­ Ø§Ù„Ø´Ø§Ø¦Ø¹ Ù…Ù†Ù‡Ø§ Ø¨Ø£Ø³Ù„ÙˆØ¨ Ø¹Ù„Ù…ÙŠ Ø¨Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯."
  },
  {
    icon: Clapperboard,
    title: "Ù…Ø­ØªÙˆÙ‰ Ù…Ø±Ø¦ÙŠ Ù‚ØµÙŠØ±",
    body: "Ù…Ù‚Ø§Ø·Ø¹ TikTok ÙˆReels ØªØ¹Ù„ÙŠÙ…ÙŠØ©ØŒ Ø³Ø±ÙŠØ¹Ø© Ø§Ù„ÙÙ‡Ù…ØŒ ÙˆÙ…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù…Ø´Ø§Ù‡Ø¯Ø© Ø§Ù„ÙŠÙˆÙ…ÙŠØ©."
  }
];

export function Home() {
  return h(
    motion.main,
    { ...pageTransition, className: "hero-grid relative overflow-hidden px-4 pb-20 pt-32 md:pt-36" },
    h("div", { className: "ecg-line" }),
    h("div", { className: "lung-watermark -right-20 top-40" }),
    h("div", { className: "oxygen-field", "aria-hidden": "true" }),
    h(
      "section",
      { className: "relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl place-items-center py-10" },
      h(
        "div",
        { className: "mx-auto max-w-3xl text-center" },
        h(
          motion.div,
          {
            className: "logo-breath mx-auto mb-7",
            initial: { opacity: 0, scale: 0.9, y: 12 },
            animate: { opacity: 1, scale: 1, y: [0, -8, 0] },
            transition: { opacity: { duration: 0.45 }, scale: { duration: 0.45 }, y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }
          },
          h("span", { className: "breath-ring breath-ring-one" }),
          h("span", { className: "breath-ring breath-ring-two" }),
          h("img", {
            src: "./assets/logo-20-nafas.jpeg",
            alt: "Ø´Ø¹Ø§Ø± ÙØ±ÙŠÙ‚ 20 Ù†ÙØ³",
            className: "relative z-10 h-44 w-44 rounded-[2rem] bg-white object-contain p-3 shadow-glow ring-1 ring-navy/10 sm:h-56 sm:w-56"
          })
        ),
        h(motion.div, { className: "mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-medical shadow-sm ring-1 ring-medical/10 backdrop-blur", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.36, delay: 0.12 } }, h(Activity, { size: 18 }), "ÙØ±ÙŠÙ‚ ØªÙˆØ¹ÙˆÙŠ ÙÙŠ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠ"),
        h(motion.h1, { className: "text-4xl font-black leading-tight text-navy sm:text-6xl", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.18 } }, "20 Ù†ÙØ³ | ØªÙ†ÙØ³ Ø¨Ø£Ù…Ø§Ù†"),
        h(
          motion.p,
          { className: "mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-navy/72 sm:text-xl", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.24 } },
          "ÙØ±ÙŠÙ‚ ØªÙˆØ¹ÙˆÙŠ ÙŠÙ‡Ø¯Ù Ø¥Ù„Ù‰ ØªØ¹Ø±ÙŠÙ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ Ø¨ØªØ®ØµØµ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ ÙˆØ±ÙØ¹ Ø§Ù„ÙˆØ¹ÙŠ Ø¨Ø£Ù…Ø±Ø§Ø¶ Ø§Ù„Ø¬Ù‡Ø§Ø² Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ ÙˆØªØµØ­ÙŠØ­ Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ… Ø§Ù„Ø®Ø§Ø·Ø¦Ø© Ø¨Ø£Ø³Ù„ÙˆØ¨ Ø¨Ø³ÙŠØ·ØŒ Ø¹Ù„Ù…ÙŠØŒ ÙˆÙ…Ù…ØªØ¹."
        ),
        h(
          motion.div,
          { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.3 } },
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("about"), className: "button-premium rounded-full bg-navy px-8 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical" }, "ØªØ¹Ø±Ù Ø¹Ù„ÙŠÙ†Ø§"),
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("join"), className: "button-premium rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "Ø§Ù†Ø¶Ù… Ù„Ù†Ø§"),
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("contact"), className: "button-premium rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§")
        )
      )
    ),
    h(
      "section",
      { className: "relative mx-auto max-w-6xl py-8" },
      h(motion.h2, { className: "mb-7 text-center text-3xl font-black text-navy", initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportReveal, transition: { duration: 0.42 } }, "Ù…Ø§Ø°Ø§ Ù†Ù‚Ø¯Ù…ØŸ"),
      h(
        motion.div,
        { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4", variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: viewportReveal },
        cards.map((card, index) =>
          h(
            motion.article,
            {
              key: card.title,
              variants: revealItem,
              whileHover: { y: -8 },
              className: "premium-card group rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-navy/5"
            },
            h("div", { className: "icon-tile mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-medical/10 text-medical" }, h(card.icon, { size: 24 })),
            h("h3", { className: "mb-3 text-xl font-black text-navy" }, card.title),
            h("p", { className: "text-sm font-medium leading-7 text-navy/68" }, card.body)
          )
        )
      )
    )
  );
}
