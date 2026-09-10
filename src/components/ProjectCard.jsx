
export function ProjectCard({
  project,
  featured = false,
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`group overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/60 shadow-lg ${
        featured
          ? "lg:flex lg:min-h-[390px]"
          : "flex flex-col"
      }`}
    >
      {project.image && (
        <div
          className={`overflow-hidden bg-slate-900/70 ${
            featured
              ? "lg:w-5/12"
              : "aspect-[16/9]"
          }`}
        >
          <img
            src={`/${project.image.replace(
              /^\//,
              "",
            )}`}
            alt={`Captura o logotipo de ${project.title}`}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
              featured
                ? "min-h-[230px] lg:min-h-full"
                : ""
            }`}
            loading={
              featured ? "eager" : "lazy"
            }
            decoding="async"
          />
        </div>
      )}

      <div
        className={`flex flex-1 flex-col p-6 ${
          featured ? "lg:p-8" : ""
        }`}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3
            className={`font-semibold text-white ${
              featured
                ? "text-2xl"
                : "text-lg"
            }`}
          >
            {project.title}
          </h3>

          {featured && (
            <span className="shrink-0 rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-300">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm leading-6 text-slate-400">
          {project.desc}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-sky-400/10 px-2.5 py-1 text-xs text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-medium text-sky-300 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {project.linkLabel || "Ver proyecto"}
            <span aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </div>
    </motion.article>
  );
}