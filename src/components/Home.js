import { motion } from "../motion.js?v=20260628-visual-polish";
import { Activity, Brain, Clapperboard, HeartPulse, Stethoscope } from "./Icons.js?v=20260628-visual-polish";
import { goTo, h, pageTransition, revealItem, staggerContainer, viewportReveal } from "../utils.js?v=20260628-visual-polish";

const cards = [
  {
    icon: Stethoscope,
    title: "التعريف بالعلاج التنفسي",
    body: "شرح مبسط عن التخصص ودوره ونشأته وأين يتم تدريسه في المملكة العربية السعودية، وماهي التخصصات الدقيقة التابعة له."
  },
  {
    icon: HeartPulse,
    title: "التوعية بالأمراض التنفسية",
    body: "معلومات واضحة عن أمراض وحالات تنفسية قد لا يعرفها المجتمع، بلغة قريبة وسهلة."
  },
  {
    icon: Brain,
    title: "تصحيح المفاهيم الخاطئة",
    body: "تبسيط المعلومات الطبية وتصحيح الشائع منها بأسلوب علمي بدون تعقيد."
  },
  {
    icon: Clapperboard,
    title: "محتوى مرئي قصير",
    body: "مقاطع TikTok وReels تعليمية، سريعة الفهم، ومناسبة للمشاهدة اليومية."
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
            alt: "شعار فريق 20 نفس",
            className: "relative z-10 h-44 w-44 rounded-[2rem] bg-white object-contain p-3 shadow-glow ring-1 ring-navy/10 sm:h-56 sm:w-56"
          })
        ),
        h(motion.div, { className: "mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-medical shadow-sm ring-1 ring-medical/10 backdrop-blur", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.36, delay: 0.12 } }, h(Activity, { size: 18 }), "فريق توعوي في العلاج التنفسي"),
        h(motion.h1, { className: "text-4xl font-black leading-tight text-navy sm:text-6xl", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.18 } }, "20 نفس | تنفس بأمان"),
        h(
          motion.p,
          { className: "mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-navy/72 sm:text-xl", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.24 } },
          "فريق توعوي يهدف إلى تعريف المجتمع بتخصص العلاج التنفسي، ورفع الوعي بأمراض الجهاز التنفسي، وتصحيح المفاهيم الخاطئة بأسلوب بسيط، علمي، وممتع."
        ),
        h(
          motion.div,
          { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row", initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.3 } },
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("about"), className: "button-premium rounded-full bg-navy px-8 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical" }, "تعرف علينا"),
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("join"), className: "button-premium rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "انضم لنا"),
          h(motion.button, { whileHover: { y: -3 }, whileTap: { scale: 0.98 }, onClick: () => goTo("contact"), className: "button-premium rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "تواصل معنا")
        )
      )
    ),
    h(
      "section",
      { className: "relative mx-auto max-w-6xl py-8" },
      h(motion.h2, { className: "mb-7 text-center text-3xl font-black text-navy", initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportReveal, transition: { duration: 0.42 } }, "ماذا نقدم؟"),
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
