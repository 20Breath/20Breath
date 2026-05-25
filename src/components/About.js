import { motion } from "framer-motion";
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

export function About() {
  return h(
    motion.main,
    { ...pageTransition, className: "liquid-page px-4 pb-24 pt-32" },
    h(
      "div",
      { className: "relative z-10 mx-auto max-w-6xl" },
      h(
        "div",
        { className: "mx-auto max-w-3xl space-y-5" },
        h(
          "section",
          { className: "space-y-5" },
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
        )
      )
    )
  );
}
