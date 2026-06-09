import { motion } from "../motion.js";
import { h, pageTransition } from "../utils.js";

const sections = [
  {
    title: "من نحن؟",
    text: "20 نفس هو فريق توعوي متخصص في نشر الوعي حول تخصص العلاج التنفسي Respiratory Therapy. نؤمن أن المعلومة الطبية إذا قُدمت بطريقة بسيطة وقريبة من الناس، تصنع فرقًا حقيقيًا في وعي المجتمع وصحته."
  },
  {
    title: "رسالتنا",
    text: "نهدف إلى تعريف المجتمع بدور أخصائي العلاج التنفسي، وتبسيط المعلومات المتعلقة بالجهاز التنفسي، وتسليط الضوء على الأمراض والحالات التنفسية التي قد تكون غير معروفة للكثيرين."
  },
  {
    title: "رؤيتنا",
    text: "أن نكون منصة توعوية رائدة ومؤثرة في مجال العلاج التنفسي، تقدم محتوى علميًا موثوقًا بلغة سهلة ومفهومة للجميع."
  }
];

const founders = [
  {
    src: "./assets/founder-avatar-1.jpeg",
    role: "مؤسس 1",
    name: "عبدالعزيز الجلواح"
  },
  {
    src: "./assets/founder-avatar-2.jpeg",
    role: "مؤسس 2",
    name: "محمد الفايز"
  },
  {
    src: "./assets/founder-avatar-3.jpeg",
    role: "مؤسس 3",
    name: "أحمد الرويشد"
  },
  {
    src: "./assets/founder-avatar-4.jpeg",
    role: "مؤسس 4",
    name: "حسين الرمضان"
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
        sections.map((section) =>
          h(
            motion.article,
            {
              key: section.title,
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
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
        h("p", { className: "mb-5 text-sm font-black tracking-[0.35em] text-navy/45" }, "مؤسسو 20 نفس"),
        h(
          "div",
          { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-4" },
          founders.map((founder, index) =>
            h(
              motion.article,
              {
                key: founder.name,
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.05 },
                className: "rounded-[1.5rem] border border-navy/10 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 hover:border-medical/30 hover:shadow-glow"
              },
              h(
                "div",
                { className: "mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-white p-1 ring-4 ring-medical/80" },
                h("img", {
                  src: founder.src,
                  alt: founder.name,
                  className: "h-full w-full rounded-full object-cover"
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
