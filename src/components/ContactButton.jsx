export function ContactButton({ label }) {
  const subject = encodeURIComponent(
    "Consulta desde mi portfolio",
  );

  const body = encodeURIComponent(
    "Hola Jaime, me gustaría contactar contigo.",
  );

  return (
    <a
      href={`mailto:jaimemg1312@gmail.com?subject=${subject}&body=${body}`}
      className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:bg-slate-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      {label}
    </a>
  );
}