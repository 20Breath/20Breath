import { motion } from "../motion.js?v=20260628-visual-polish2";
import { h, pageTransition, revealItem, staggerContainer, viewportReveal } from "../utils.js?v=20260628-visual-polish2";

const sections = [
  {
    title: "Ù…Ù† Ù†Ø­Ù†ØŸ",
    text: "20 Ù†ÙØ³ Ù‡Ùˆ ÙØ±ÙŠÙ‚ ØªÙˆØ¹ÙˆÙŠ Ù…ØªØ®ØµØµ ÙÙŠ Ù†Ø´Ø± Ø§Ù„ÙˆØ¹ÙŠ Ø­ÙˆÙ„ ØªØ®ØµØµ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠ Respiratory Therapy. Ù†Ø¤Ù…Ù† Ø£Ù† Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© Ø§Ù„Ø·Ø¨ÙŠØ© Ø¥Ø°Ø§ Ù‚ÙØ¯Ù…Øª Ø¨Ø·Ø±ÙŠÙ‚Ø© Ø¨Ø³ÙŠØ·Ø© ÙˆÙ‚Ø±ÙŠØ¨Ø© Ù…Ù† Ø§Ù„Ù†Ø§Ø³ØŒ ØªØµÙ†Ø¹ ÙØ±Ù‚Ù‹Ø§ Ø­Ù‚ÙŠÙ‚ÙŠÙ‹Ø§ ÙÙŠ ÙˆØ¹ÙŠ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ ÙˆØµØ­ØªÙ‡."
  },
  {
    title: "Ø±Ø³Ø§Ù„ØªÙ†Ø§",
    text: "Ù†Ù‡Ø¯Ù Ø¥Ù„Ù‰ ØªØ¹Ø±ÙŠÙ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ Ø¨Ø¯ÙˆØ± Ø£Ø®ØµØ§Ø¦ÙŠ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ ÙˆØªØ¨Ø³ÙŠØ· Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ù…ØªØ¹Ù„Ù‚Ø© Ø¨Ø§Ù„Ø¬Ù‡Ø§Ø² Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ ÙˆØªØ³Ù„ÙŠØ· Ø§Ù„Ø¶ÙˆØ¡ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù…Ø±Ø§Ø¶ ÙˆØ§Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„ØªÙ†ÙØ³ÙŠØ© Ø§Ù„ØªÙŠ Ù‚Ø¯ ØªÙƒÙˆÙ† ØºÙŠØ± Ù…Ø¹Ø±ÙˆÙØ© Ù„Ù„ÙƒØ«ÙŠØ±ÙŠÙ†."
  },
  {
    title: "Ø±Ø¤ÙŠØªÙ†Ø§",
    text: "Ø£Ù† Ù†ÙƒÙˆÙ† Ù…Ù†ØµØ© ØªÙˆØ¹ÙˆÙŠØ© Ø±Ø§Ø¦Ø¯Ø© ÙˆÙ…Ø¤Ø«Ø±Ø© ÙÙŠ Ù…Ø¬Ø§Ù„ Ø§Ù„Ø¹Ù„Ø§Ø¬ Ø§Ù„ØªÙ†ÙØ³ÙŠØŒ ØªÙ‚Ø¯Ù… Ù…Ø­ØªÙˆÙ‰ Ø¹Ù„Ù…ÙŠÙ‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ù‹Ø§ Ø¨Ù„ØºØ© Ø³Ù‡Ù„Ø© ÙˆÙ…ÙÙ‡ÙˆÙ…Ø© Ù„Ù„Ø¬Ù…ÙŠØ¹."
  }
];

const founders = [
  {
    src: "./assets/founder-avatar-1.jpeg",
    role: "Ù…Ø¤Ø³Ø³",
    name: "Ø¹Ø¨Ø¯Ø§Ù„Ø¹Ø²ÙŠØ² Ø§Ù„Ø¬Ù„ÙˆØ§Ø­"
  },
  {
    src: "./assets/founder-avatar-4.jpeg",
    role: "Ù…Ø¤Ø³Ø³",
    name: "Ù…Ø­Ù…Ø¯ Ø§Ù„ÙØ§ÙŠØ²"
  },
  {
    src: "./assets/founder-avatar-3.jpeg",
    role: "Ù…Ø¤Ø³Ø³",
    name: "Ø£Ø­Ù…Ø¯ Ø§Ù„Ø±ÙˆÙŠØ´Ø¯"
  },
  {
    src: "./assets/founder-avatar-2.jpeg",
    role: "Ù…Ø¤Ø³Ø³",
    name: "Ø­Ø³ÙŠÙ† Ø§Ù„Ø±Ù…Ø¶Ø§Ù†"
  }
];

export function About() {
  return h(
    motion.main,
    { ...pageTransition, className: "liquid-page px-4 pb-24 pt-32" },
    h(
      "div",
      { className: "relative z-10 mx-auto max-w-6xl" },
      h(
        "section",
        { className: "mx-auto max-w-3xl space-y-5" },
        sections.map((section, index) =>
          h(
            motion.article,
            {
              key: section.title,
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: viewportReveal,
              transition: { duration: 0.42, delay: index * 0.05 },
              className: "liquid-card rounded-[2rem] p-7"
            },
            h("h1", { className: "mb-4 text-3xl font-black text-navy sm:text-4xl" }, section.title),
            h("p", { className: "text-lg font-medium leading-9 text-navy/75" }, section.text)
          )
        )
      ),
      h(
        "section",
        { className: "mt-14" },
        h("p", { className: "mb-5 text-sm font-black tracking-[0.35em] text-navy/45" }, "Ù…Ø¤Ø³Ø³Ùˆ 20 Ù†ÙØ³"),
        h(
          motion.div,
          { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-4", variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: viewportReveal },
          founders.map((founder, index) =>
            h(
              motion.article,
              {
                key: founder.name,
                variants: revealItem,
                whileHover: { y: -8 },
                className: "founder-card premium-card rounded-[1.5rem] border border-navy/10 bg-white p-7 text-center shadow-soft transition hover:border-medical/30 hover:shadow-glow"
              },
              h(
                "div",
                { className: "founder-orbit mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-white p-1 ring-4 ring-medical/80" },
                h("img", {
                  src: founder.src,
                  alt: founder.name,
                  className: "founder-image h-full w-full rounded-full object-cover"
                })
              ),
              h("p", { className: "mb-2 text-sm font-black text-medical" }, founder.role),
              h("h2", { className: "text-xl font-black text-navy" }, founder.name)
            )
          )
        )
      )
    )
  );
}
