import { motion } from "../motion.js?v=20260628-visual-polish";
import { h, pageTransition } from "../utils.js?v=20260628-visual-polish";

export function Contact() {
  const email = "azizkj9080@gmail.com";
  const phone = "0591061424";

  return h(
    motion.main,
    { ...pageTransition, className: "px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto grid min-h-[calc(100vh-14rem)] max-w-3xl place-items-center" },
      h(
        motion.div,
        { className: "premium-card w-full rounded-[2rem] bg-white p-7 text-center shadow-soft ring-1 ring-navy/5 sm:p-10", initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42 } },
        h(motion.img, {
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.42, delay: 0.08 },
          src: "./assets/logo-20-nafas.jpeg",
          alt: "شعار 20 نفس",
          className: "mx-auto mb-6 h-28 w-28 rounded-3xl object-contain p-2 shadow-sm ring-1 ring-navy/10"
        }),
        h("h1", { className: "text-4xl font-black text-navy sm:text-5xl" }, "تواصل معنا"),
        h("p", { className: "mx-auto mt-4 max-w-xl text-lg font-medium leading-8 text-navy/68" }, "للاستفسارات والتعاون، يمكنكم التواصل معنا عبر البريد الإلكتروني أو رقم التواصل."),
        h(
          "div",
          { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" },
          h("p", { className: "contact-pill rounded-full bg-navy px-8 py-3.5 text-base font-black text-white shadow-soft" }, email),
          h("p", { className: "contact-pill rounded-full bg-soft px-8 py-3.5 text-base font-black text-navy shadow-soft ring-1 ring-navy/10" }, phone)
        )
      )
    )
  );
}
