import { motion } from "../motion.js";
import { Activity, Brain, Clapperboard, HeartPulse, Stethoscope } from "./Icons.js";
import { goTo, h, pageTransition } from "../utils.js";

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
    h(
      "section",
      { className: "relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl place-items-center py-10" },
      h(
        "div",
        { className: "mx-auto max-w-3xl text-center" },
        h(motion.img, {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.45 },
          src: "./assets/logo-20-nafas.jpeg",
          alt: "شعار فريق 20 نفس",
          className: "mx-auto mb-7 h-44 w-44 rounded-[2rem] bg-white object-contain p-3 shadow-glow ring-1 ring-navy/10 sm:h-56 sm:w-56"
        }),
        h("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-medical shadow-sm" }, h(Activity, { size: 18 }), "فريق توعوي في العلاج التنفسي"),
        h("h1", { className: "text-4xl font-black leading-tight text-navy sm:text-6xl" }, "20 نفس | تنفس بأمان"),
        h(
          "p",
          { className: "mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-navy/72 sm:text-xl" },
          "فريق توعوي يهدف إلى تعريف المجتمع بتخصص العلاج التنفسي، ورفع الوعي بأمراض الجهاز التنفسي، وتصحيح المفاهيم الخاطئة بأسلوب بسيط، علمي، وممتع."
        ),
        h(
          "div",
          { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row" },
          h("button", { onClick: () => goTo("about"), className: "rounded-full bg-navy px-8 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical" }, "تعرف علينا"),
          h("button", { onClick: () => goTo("join"), className: "rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "انضم لنا"),
          h("button", { onClick: () => goTo("contact"), className: "rounded-full bg-white px-8 py-3.5 text-base font-black text-navy shadow-soft transition hover:bg-medical hover:text-white" }, "تواصل معنا")
        )
      )
    ),
    h(
      "section",
      { className: "relative mx-auto max-w-6xl py-8" },
      h("h2", { className: "mb-7 text-center text-3xl font-black text-navy" }, "ماذا نقدم؟"),
      h(
        "div",
        { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4" },
        cards.map((card, index) =>
          h(
            motion.article,
            {
              key: card.title,
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.35 },
              transition: { duration: 0.34, delay: index * 0.05 },
              whileHover: { y: -7 },
              className: "rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-navy/5"
            },
            h("div", { className: "mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-medical/10 text-medical" }, h(card.icon, { size: 24 })),
            h("h3", { className: "mb-3 text-xl font-black text-navy" }, card.title),
            h("p", { className: "text-sm font-medium leading-7 text-navy/68" }, card.body)
          )
        )
      )
    )
  );
}
