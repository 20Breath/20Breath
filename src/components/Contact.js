import { motion } from "../motion.js";
import { h, pageTransition } from "../utils.js";

export function Contact() {
  const email = "azizkj9080@gmail.com";

  return h(
    motion.main,
    { ...pageTransition, className: "px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto grid min-h-[calc(100vh-14rem)] max-w-3xl place-items-center" },
      h(
        "div",
        { className: "w-full rounded-[2rem] bg-white p-7 text-center shadow-soft ring-1 ring-navy/5 sm:p-10" },
        h("img", {
          src: "./assets/logo-20-nafas.jpeg",
          alt: "شعار 20 نفس",
          className: "mx-auto mb-6 h-28 w-28 rounded-3xl object-contain p-2 shadow-sm ring-1 ring-navy/10"
        }),
        h("h1", { className: "text-4xl font-black text-navy sm:text-5xl" }, "تواصل معنا"),
        h("p", { className: "mx-auto mt-4 max-w-xl text-lg font-medium leading-8 text-navy/68" }, "للاستفسارات والتعاون، يمكنكم مراسلتنا عبر البريد الإلكتروني."),
        h(
          "a",
          {
            href: `mailto:${email}?subject=${encodeURIComponent("تواصل مع فريق 20 نفس")}`,
            className: "mt-8 inline-flex rounded-full bg-navy px-8 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical"
          },
          email
        )
      )
    )
  );
}
