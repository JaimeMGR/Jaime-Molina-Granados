import { motion } from "framer-motion";

const mnzoneContent = {
  es: {
    eyebrow: "Trabajo de Fin de Grado · DAW",
    subtitle:
      "Plataforma web para la gestión de un centro gaming",
    intro:
      "MNZone es una plataforma web full stack desarrollada como Trabajo de Fin de Grado de Desarrollo de Aplicaciones Web. El sistema centraliza la gestión de un centro gaming, incluyendo usuarios, reservas, productos, servicios, noticias y funcionalidades administrativas.",
    back: "← Volver a proyectos",
    github: "GitHub ↗",
    otherProjects: "Ver otros proyectos",
    featuresTitle: "Funcionalidades",
    technologiesTitle: "Tecnologías",
    galleryTitle: "Capturas del proyecto",
    sourceTitle: "Código fuente",
    sourceText:
      "Puedes consultar el código fuente, la estructura del proyecto y la documentación de MNZone en GitHub.",
    sourceButton: "Ver repositorio en GitHub ↗",
    features: [
      "Registro y autenticación de usuarios",
      "Sistema de reservas de salas y equipos",
      "Catálogo y compra de productos y servicios",
      "Gestión de noticias y contenido",
      "Sistema de testimonios y valoraciones",
      "Panel de administración",
      "Gestión de socios, productos, servicios y reservas",
      "Aplicación auxiliar en Python para gestionar tiempos de uso",
    ],
    technologies: [
      {
        title: "Frontend",
        text: "HTML5, CSS3 y JavaScript",
      },
      {
        title: "Backend",
        text: "PHP",
      },
      {
        title: "Base de datos",
        text: "MySQL",
      },
      {
        title: "Aplicación auxiliar",
        text: "Python",
      },
    ],
    gallery: [
      {
        title: "Página de inicio",
        image: "/proyectos/mnzone-home.png",
      },
      {
        title: "Sistema de reservas",
        image: "/proyectos/mnzone-reservas.png",
      },
      {
        title: "Tienda",
        image: "/proyectos/mnzone-tienda.png",
      },
      {
        title: "Administración de productos",
        image: "/proyectos/mnzone-admin-productos.png",
      },
      {
        title: "Gestión de socios",
        image: "/proyectos/mnzone-admin-socios.png",
      },
    ],
  },

  en: {
    eyebrow: "Final Project · DAW",
    subtitle:
      "Web platform for gaming center management",
    intro:
      "MNZone is a full-stack web platform developed as my final DAW project. The system centralizes the management of a gaming center, including users, bookings, products, services, news and administration features.",
    back: "← Back to projects",
    github: "GitHub ↗",
    otherProjects: "View other projects",
    featuresTitle: "Features",
    technologiesTitle: "Technologies",
    galleryTitle: "Project screenshots",
    sourceTitle: "Source code",
    sourceText:
      "You can explore the source code, project structure and MNZone documentation on GitHub.",
    sourceButton: "View GitHub repository ↗",
    features: [
      "User registration and authentication",
      "Room and equipment booking system",
      "Product and service catalog and purchases",
      "News and content management",
      "Testimonials and ratings",
      "Administration panel",
      "Management of members, products, services and bookings",
      "Complementary Python application for usage-time management",
    ],
    technologies: [
      {
        title: "Frontend",
        text: "HTML5, CSS3 and JavaScript",
      },
      {
        title: "Backend",
        text: "PHP",
      },
      {
        title: "Database",
        text: "MySQL",
      },
      {
        title: "Complementary app",
        text: "Python",
      },
    ],
    gallery: [
      {
        title: "Home page",
        image: "/proyectos/mnzone-home.png",
      },
      {
        title: "Booking system",
        image: "/proyectos/mnzone-reservas.png",
      },
      {
        title: "Store",
        image: "/proyectos/mnzone-tienda.png",
      },
      {
        title: "Product administration",
        image: "/proyectos/mnzone-admin-productos.png",
      },
      {
        title: "Member management",
        image: "/proyectos/mnzone-admin-socios.png",
      },
    ],
  },
};

export function ProjectDetail({
  project,
  lang,
  onBack,
}) {
  const content =
    mnzoneContent[lang] || mnzoneContent.es;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        {content.back}
      </button>

      <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            {content.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {project.title.split(" — ")[0]}
          </h1>

          <p className="mt-3 text-xl font-medium text-slate-300">
            {content.subtitle}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400">
            {content.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/JaimeMGR/MNZone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {content.github}
            </a>

            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {content.otherProjects}
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 shadow-2xl">
          <img
            src="/proyectos/mnzone-home.png"
            alt={
              lang === "es"
                ? "Página de inicio de MNZone"
                : "MNZone home page"
            }
            className="h-full w-full object-contain"
            decoding="async"
          />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {content.featuresTitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
            >
              <div
                className="mb-3 text-xl text-sky-400"
                aria-hidden="true"
              >
                ✓
              </div>

              <p className="text-sm leading-6 text-slate-300">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {content.technologiesTitle}
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.technologies.map(
            (technology) => (
              <div
                key={technology.title}
                className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5"
              >
                <h3 className="font-semibold text-white">
                  {technology.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {technology.text}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {content.galleryTitle}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {content.gallery.map(
            (item, index) => (
              <motion.figure
                key={item.image}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className={`overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 shadow-xl ${
                  index === 0
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="flex min-h-[260px] items-center justify-center bg-slate-950 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[650px] w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <figcaption className="border-t border-slate-700/60 px-5 py-4 text-sm font-medium text-slate-300">
                  {item.title}
                </figcaption>
              </motion.figure>
            ),
          )}
        </div>
      </section>

      <section className="mt-20 pb-8">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white">
            {content.sourceTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            {content.sourceText}
          </p>

          <a
            href="https://github.com/JaimeMGR/MNZone"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            {content.sourceButton}
          </a>
        </div>
      </section>
    </motion.div>
  );
}
