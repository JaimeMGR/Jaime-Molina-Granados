import React from "react";

export function ContactButton({ lang }) {
  function sendEmailEncoded() {
    const emailB64 = "amFpbWVtZzEzMTJAZ21haWwuY29t"; // tu correo en base64
    const subjectB64 = "Q29uc3VsdGEgZGVzZGUgbGEgd2Vi"; // "Consulta desde la web"
    const bodyB64 = "SG9sYSwgcXVpc2llcmEgbcOhcyBpbmZvcm1hY2nDs24gc29icmUuLi4="; // "Hola, quisiera más información sobre..."

    const email = atob(emailB64);
    const subject = atob(subjectB64);
    const body = atob(bodyB64);

    const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const a = document.createElement("a");
    a.href = mailto;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <button
      type="button"
      onClick={sendEmailEncoded}
      className="inline-block border border-slate-700 text-slate-200 px-4 py-2 rounded-xl hover:bg-slate-700/30 transition no-underline"
    >
      {lang === "es" ? "Enviar correo" : "Send email"}
    </button>
  );
}
