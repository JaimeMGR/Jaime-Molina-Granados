import { motion } from "framer-motion";

export function ProjectCard({
  project,
  featured = false,
  onOpen,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          className={`flex items-center justify-center overflow-hidden bg-slate-950/70 ${
            featured
              ? "h-[260px] lg:h-auto lg:w-5/12"
              : "h-44 w-full"
          }`}
        >
          <img
            src={`/${project.image.replace(
              /^\//,
              "",
            )}`}
            alt={`Imagen de ${project.title}`}
            className="max-h-full max-w-full object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
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

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          {project.slug && onOpen && (
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {project.detailLabel || "Ver proyecto"}
              <span aria-hidden="true">→</span>
            </button>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {project.linkLabel || "Ver proyecto"}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
