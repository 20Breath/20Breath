import React from "react";
import { motion } from "../motion.js?v=20260628-visual-polish2";
import { h, pageTransition } from "../utils.js?v=20260628-visual-polish2";

const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbxpdEMq1xR3CQpesgOqiRAKSpw_LJsTHxS7cwOwbv-DZwsb5_W0tLGibk5N8aHq6iEm/exec";

const fields = [
  { name: "name", label: "Ø§Ù„Ø§Ø³Ù…", type: "text", placeholder: "Ø§ÙƒØªØ¨ Ø§Ø³Ù…Ùƒ" },
  { name: "email", label: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ", type: "email", placeholder: "name@example.com" },
  { name: "phone", label: "Ø±Ù‚Ù… Ø§Ù„Ø¬ÙˆØ§Ù„", type: "tel", placeholder: "05xxxxxxxx" },
  { name: "university", label: "Ø§Ù„Ø¬Ø§Ù…Ø¹Ø© / Ø§Ù„Ø¬Ù‡Ø©", type: "text", placeholder: "Ø§Ø³Ù… Ø§Ù„Ø¬Ø§Ù…Ø¹Ø© Ø£Ùˆ Ø§Ù„Ø¬Ù‡Ø©" },
  { name: "specialty", label: "Ø§Ù„ØªØ®ØµØµ", type: "text", placeholder: "Ù…Ø«Ø§Ù„: Ø¹Ù„Ø§Ø¬ ØªÙ†ÙØ³ÙŠ" },
  { name: "cv", label: "Ø±Ø§Ø¨Ø· CV (Ø§Ø®ØªÙŠØ§Ø±ÙŠ)", type: "url", placeholder: "https://..." },
  { name: "social", label: "Ø­Ø³Ø§Ø¨ Ø§Ù„ØªÙˆØ§ØµÙ„", type: "text", placeholder: "@username" }
];

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  university: "",
  specialty: "",
  cv: "",
  social: "",
  gender: "",
  requestedRole: "",
  otherRole: "",
  reason: "",
  achievements: ""
};

export function Join() {
  const [status, setStatus] = React.useState("idle");
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const role = formValues.requestedRole;

  function updateField(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
      ...(name === "requestedRole" && value !== "Ø£Ø®Ø±Ù‰" ? { otherRole: "" } : {})
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    const payload = { ...formValues };
    payload.requestedRole = payload.requestedRole === "Ø£Ø®Ø±Ù‰" ? payload.otherRole || "Ø£Ø®Ø±Ù‰" : payload.requestedRole || "";

    setStatus("sending");

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      setFormValues(initialFormValues);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return h(
    motion.main,
    { ...pageTransition, className: "form-page relative overflow-hidden px-4 pb-24 pt-32" },
    h(
      "section",
      { className: "mx-auto max-w-3xl" },
      h(
        "div",
        { className: "mb-9 text-center" },
        h("h1", { className: "text-4xl font-black text-navy sm:text-5xl" }, "Ø§Ù†Ø¶Ù… Ù„ÙØ±ÙŠÙ‚ 20 Ù†ÙØ³"),
        h("p", { className: "mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-navy/68" }, "Ø¹Ø¨Ø¦ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªÙŠ ØªØ±ØºØ¨ Ø¨Ù…Ø´Ø§Ø±ÙƒØªÙ‡Ø§ØŒ ÙˆØ³ØªØµÙ„ Ø§Ù„ØªØ³Ø¬ÙŠÙ„Ø§Øª Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ Ø¬Ø¯ÙˆÙ„ Ø§Ù„ÙØ±ÙŠÙ‚.")
      ),
      h(
        motion.form,
        { onSubmit: handleSubmit, className: "premium-form rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 sm:p-8", initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.42, delay: 0.08 } },
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
                value: formValues[field.name],
                onChange: updateField,
                required: field.name === "email",
                placeholder: field.placeholder,
                className: "premium-input w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              })
            )
          ),
          h(
            "label",
            { className: "block" },
            h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "Ø§Ù„Ø¬Ù†Ø³"),
            h(
              "select",
              {
                name: "gender",
                value: formValues.gender,
                onChange: updateField,
                className: "premium-input w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              },
              h("option", { value: "" }, "Ø§Ø®ØªÙŠØ§Ø±ÙŠ"),
              h("option", { value: "Ø°ÙƒØ±" }, "Ø°ÙƒØ±"),
              h("option", { value: "Ø£Ù†Ø«Ù‰" }, "Ø£Ù†Ø«Ù‰")
            )
          ),
          h(
            "label",
            { className: "block" },
            h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "Ø§Ù„Ø¯ÙˆØ± Ø§Ù„Ù…Ø·Ù„ÙˆØ¨"),
            h(
              "select",
              {
                name: "requestedRole",
                value: role,
                onChange: updateField,
                className: "premium-input w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              },
              h("option", { value: "" }, "Ø§Ø®ØªÙŠØ§Ø±ÙŠ"),
              h("option", { value: "Ù…ØµÙˆØ±" }, "Ù…ØµÙˆØ±"),
              h("option", { value: "Ù…Ù…Ù†ØªØ¬" }, "Ù…Ù…Ù†ØªØ¬"),
              h("option", { value: "ÙƒØ§ØªØ¨ Ù…Ø­ØªÙˆÙ‰" }, "ÙƒØ§ØªØ¨ Ù…Ø­ØªÙˆÙ‰"),
              h("option", { value: "Ù…Ù‚Ø¯Ù…" }, "Ù…Ù‚Ø¯Ù…"),
              h("option", { value: "Ø£Ø®Ø±Ù‰" }, "Ø£Ø®Ø±Ù‰")
            )
          ),
          role === "Ø£Ø®Ø±Ù‰" &&
            h(
              "label",
              { className: "block" },
              h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "Ø§ÙƒØªØ¨ Ø§Ù„Ø¯ÙˆØ±"),
              h("input", {
                name: "otherRole",
                type: "text",
                value: formValues.otherRole,
                onChange: updateField,
                placeholder: "Ø§ÙƒØªØ¨ Ø§Ù„Ø¯ÙˆØ± Ø§Ù„Ù…Ø·Ù„ÙˆØ¨",
                className: "premium-input w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
              })
            )
        ),
        h(
          "label",
          { className: "mt-5 block" },
          h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "Ø³Ø¨Ø¨ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…"),
          h("textarea", {
            name: "reason",
            rows: 5,
            value: formValues.reason,
            onChange: updateField,
            placeholder: "Ø§ÙƒØªØ¨ Ù„Ù†Ø§ Ø¨Ø§Ø®ØªØµØ§Ø± Ù„Ù…Ø§Ø°Ø§ ØªØ±ØºØ¨ Ø¨Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…",
            className: "premium-input w-full resize-none rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
          })
        ),
        h(
          "label",
          { className: "mt-5 block" },
          h("span", { className: "mb-2 block text-sm font-black text-navy/78" }, "Ø§Ù„Ø¥Ù†Ø¬Ø§Ø²Ø§Øª"),
          h("textarea", {
            name: "achievements",
            rows: 4,
            value: formValues.achievements,
            onChange: updateField,
            placeholder: "Ø§Ø°ÙƒØ± Ø£Ø¨Ø±Ø² Ø¥Ù†Ø¬Ø§Ø²Ø§ØªÙƒ Ø£Ùˆ Ù…Ø´Ø§Ø±ÙƒØ§ØªÙƒ Ø§Ù„ØªØ·ÙˆØ¹ÙŠØ© Ø£Ùˆ Ø§Ù„Ø¥Ø¹Ù„Ø§Ù…ÙŠØ©",
            className: "premium-input w-full resize-none rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-right font-medium text-navy outline-none transition focus:border-medical focus:bg-white focus:ring-4 focus:ring-medical/10"
          })
        ),
        h(
          "button",
          {
            disabled: status === "sending",
            className: "button-premium mt-6 w-full rounded-full bg-navy px-7 py-3.5 text-base font-black text-white shadow-soft transition hover:bg-medical disabled:cursor-not-allowed disabled:opacity-60"
          },
          status === "sending" ? "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¥Ø±Ø³Ø§Ù„..." : "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„ØªØ³Ø¬ÙŠÙ„"
        ),
        status === "sent" && h(motion.p, { className: "success-message mt-4 text-center text-sm font-black text-medical", initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.32 } }, h("span", { className: "success-check", "aria-hidden": "true" }), "ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ø¨Ù†Ø¬Ø§Ø­."),
        status === "error" && h("p", { className: "mt-4 text-center text-sm font-black text-red-600" }, "ØªØ¹Ø°Ø± Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ø­Ø§Ù„ÙŠÙ‹Ø§ØŒ Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰ Ù„Ø§Ø­Ù‚Ù‹Ø§.")
      )
    )
  );
}
