
export function ExperienceCard({
  experience,
  onRecommendation,
  recommendationLabel,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
    >
      <div className="flex gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-white">
            {experience.role}
          </h3>

          <div className="text-sm text-slate-400">
            {experience.company}
          </div>

          <div className="mt-1 text-xs text-slate-500">
            {experience.dates}
          </div>
        </div>

        <img
          src={`/${experience.picture}`}
          alt={`Logo de ${experience.company}`}
          className="h-16 w-16 shrink-0 rounded-2xl bg-white/5 object-contain p-1"
          loading="lazy"
          decoding="async"
        />
      </div>

      <ul className="mt-4 list-inside list-disc space-y-1 text-sm leading-6 text-slate-400">
        {experience.bullets.map(
          (bullet) => (
            <li key={bullet}>
              {bullet}
            </li>
          ),
        )}
      </ul>

      {experience.recommendationLink && (
        <button
          type="button"
          onClick={() =>
            onRecommendation(
              experience.recommendationLink,
            )
          }
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {recommendationLabel}
        </button>
      )}
    </motion.article>
  );
}