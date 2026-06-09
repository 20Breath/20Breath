import React from "react";
import { motion } from "../motion.js";
import { h, pageTransition } from "../utils.js";

const FORM_ENDPOINT = "";

const fields = [
  { name: "name", label: "الاسم", type: "text", placeholder: "اكتب اسمك" },
  { name: "email", label: "البريد الإلكتروني", type: "email", placeholder: "name@example.com" },
  { name: "phone", label: "رقم الجوال", type: "tel", placeholder: "05xxxxxxxx" },
  { name: "university", label: "الجامعة / الجهة", type: "text", placeholder: "اسم الجامعة أو الجهة" },
  { name: "specialty", label: "التخصص", type: "text", placeholder: "مثال: علاج تنفسي" },
  { name: "cv", label: "رابط CV", type: "url", placeholder: "https://..." },
  { name: "social", label: "حساب التواصل", type: "text", placeholder: "@username" }
];

export function Join() {
  const [status, setStatus] = React.useState("idle");
  const [role, setRole] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("missing-endpoint");
      return;
    }

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.requestedRole = payload.requestedRole === "أخرى" ? payload.otherRole || "أخرى" : payload.requestedRole || "";

    setStatus("sending");

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      event.currentTarget.reset();
      setRole("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return h(
    motion.main,
    { ...pageTransition, className: "px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto max-w-3xl" },
      h(
        "div",
        { className: "mb-9 text-center" },
        h("h1", { className: "text-4xl font-black text-navy sm:text-5xl" }, "انضم لفريق 20 نفس"),
        h("p", { className: "mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-navy/68" }, "عبئ البيانات التي ترغب بمشاركتها، وستصل التسجيلات إلى جدول الفريق بعد تفعيل الربط.")
      ),
      h(
        "form",
        { onSubmit: handleSubmit, className: "rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 sm:p-8" },
        h(
          "div",
          { className: "grid gap-5 sm:grid-cols-2" },
          fields.map((field) =>
            h(
              "label",
              { key: field.name, className: "block" },
              h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, field.label),
              h("input", {
                name: field.name,
                type: field.type,
                placeholder: field.placeholder,
                className: "w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              })
            )
          ),
          h(
            "label",
            { className: "block" },
            h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "الجنس"),
            h(
              "select",
              {
                name: "gender",
                defaultValue: "",
                className: "w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              },
              h("option", { value: "" }, "اختياري"),
              h("option", { value: "ذكر" }, "ذكر"),
              h("option", { value: "أنثى" }, "أنثى")
            )
          ),
          h(
            "label",
            { className: "block" },
            h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "الدور المطلوب"),
            h(
              "select",
              {
                name: "requestedRole",
                value: role,
                onChange: (event) => setRole(event.target.value),
                className: "w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              },
              h("option", { value: "" }, "اختياري"),
              h("option", { value: "مصور" }, "مصور"),
              h("option", { value: "ممنتج" }, "ممنتج"),
              h("option", { value: "كاتب محتوى" }, "كاتب محتوى"),
              h("option", { value: "مقدم" }, "مقدم"),
              h("option", { value: "أخرى" }, "أخرى")
            )
          ),
          role === "أخرى" &&
            h(
              "label",
              { className: "block" },
              h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "اكتب الدور"),
              h("input", {
                name: "otherRole",
                type: "text",
                placeholder: "اكتب الدور المطلوب",
                className: "w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              })
            )
        ),
        h(
          "label",
          { className: "mt-5 block" },
          h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "سبب الانضمام"),
          h("textarea", {
            name: "reason",
            rows: 5,
            placeholder: "اكتب لنا باختصار لماذا ترغب بالانضمام",
            className: "w-full resize-none rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
          })
        ),
        h(
          "label",
          { className: "mt-5 block" },
          h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "الإنجازات"),
          h("textarea", {
            name: "achievements",
            rows: 4,
            placeholder: "اذكر أبرز إنجازاتك أو مشاركاتك التطوعية أو الإعلامية",
            className: "w-full resize-none rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
          })
        ),
        h(
          "button",
          {
            disabled: status === "sending",
            className: "mt-6 w-full rounded-full bg-navy px-7 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical disabled:cursor-not-allowed disabled:opacity-60"
          },
          status === "sending" ? "جاري الإرسال..." : "إرسال التسجيل"
        ),
        status === "sent" && h("p", { className: "mt-4 text-center text-sm font-black text-medical" }, "تم إرسال التسجيل بنجاح."),
        status === "missing-endpoint" && h("p", { className: "mt-4 text-center text-sm font-black text-amber-700" }, "النموذج جاهز، وتبقى إضافة رابط Google Apps Script لتفعيل الإرسال."),
        status === "error" && h("p", { className: "mt-4 text-center text-sm font-black text-red-600" }, "تعذر الإرسال، حاول مرة أخرى.")
      )
    )
  );
}
