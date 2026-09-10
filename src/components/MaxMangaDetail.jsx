import { motion } from "framer-motion";
import { useState } from "react";

const apps = {
  reader: {
    eyebrow: "TFG · DAM · Android",
    title: "MaxManga",
    subtitle:
      "Aplicación Android para lectura y gestión de libros en PDF",
    description:
      "Aplicación Android desarrollada como parte de mi Trabajo de Fin de Grado de Desarrollo de Aplicaciones Multiplataforma. Está orientada a la lectura y gestión de libros en formato PDF, incorporando categorías, favoritos, comentarios y seguimiento de visualizaciones y descargas.",

    features: [
      "Lectura de libros en formato PDF",
      "Organización mediante categorías",
      "Categorías de más vistos y más descargados",
      "Sistema de favoritos",
      "Comentarios en los libros",
      "Seguimiento de visualizaciones",
      "Seguimiento de descargas",
      "Gestión del perfil de usuario",
    ],

    gallery: [
      {
        title: "Categorías y biblioteca",
        description:
          "El usuario puede navegar por las diferentes categorías y consultar listas de libros, incluyendo las secciones de más vistos y más descargados.",
        image:
          "/proyectos/maxmanga/maxmanga-categorias.png",
      },
      {
        title: "Detalle de un libro",
        description:
          "Pantalla con información detallada del libro, incluyendo categoría, fecha, tamaño, visitas, descargas, páginas y comentarios.",
        image:
          "/proyectos/maxmanga/maxmanga-detalle.png",
      },
      {
        title: "Lector PDF",
        description:
          "Lector integrado para visualizar el contenido del libro directamente desde la aplicación.",
        image:
          "/proyectos/maxmanga/maxmanga-lector.png",
      },
      {
        title: "Sistema de comentarios",
        description:
          "Los usuarios pueden consultar y publicar comentarios sobre los libros.",
        image:
          "/proyectos/maxmanga/maxmanga-comentarios.png",
      },
      {
        title: "Perfil de usuario",
        description:
          "Gestión y edición de la información del perfil del usuario.",
        image:
          "/proyectos/maxmanga/maxmanga-perfil.png",
      },
    ],
  },

  community: {
    eyebrow: "TFG · DAM · Android",
    title: "MaxManga Community",
    subtitle:
      "Aplicación Android para comunicación en tiempo real",
    description:
      "Aplicación complementaria centrada en la comunidad de usuarios. Permite buscar otros usuarios, iniciar conversaciones y comunicarse mediante un sistema de chat en tiempo real con mensajes y contenido multimedia.",

    features: [
      "Registro de usuarios",
      "Inicio de sesión mediante email",
      "Inicio de sesión con Google",
      "Recuperación de contraseña",
      "Búsqueda de usuarios",
      "Chat en tiempo real",
      "Mensajes de texto",
      "Envío de contenido multimedia",
      "Perfiles de usuario",
      "Edición del perfil",
      "Verificación de cuenta",
      "Notificaciones push",
    ],

    gallery: [
      {
        title: "Búsqueda de usuarios",
        description:
          "Listado de usuarios registrados y sistema de búsqueda para localizar usuarios con los que iniciar una conversación.",
        image:
          "/proyectos/maxmanga/community-usuarios.png",
      },
      {
        title: "Chat en tiempo real",
        description:
          "Sistema de comunicación entre usuarios mediante mensajes almacenados y sincronizados con Firebase.",
        image:
          "/proyectos/maxmanga/community-chat.png",
      },
      {
        title: "Perfil de usuario",
        description:
          "Visualización de la información pública de otros usuarios desde una conversación.",
        image:
          "/proyectos/maxmanga/community-perfil.png",
      },
    ],
  },
};

export function MaxMangaDetail({
  project,
  onBack,
}) {
  const [activeApp, setActiveApp] =
    useState(
      project?.slug ===
        "maxmanga-community"
        ? "community"
        : "reader",
    );

  const currentApp = apps[activeApp];

  const technologies = [
    "Kotlin",
    "Android",
    "Android Studio",
    "Firebase",
    "JSON",
    "XML",
  ];

  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12"
    >
      {/* Volver */}
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        ← Volver a proyectos
      </button>

      {/* Hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            {currentApp.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {currentApp.title}
          </h1>

          <p className="mt-3 text-xl font-medium text-slate-300">
            {currentApp.subtitle}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400">
            {currentApp.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Imagen destacada */}
        <motion.div
          key={currentApp.title}
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/80 p-8 shadow-2xl"
        >
          <img
            src={currentApp.gallery[0].image}
            alt={currentApp.gallery[0].title}
            className="max-h-[520px] max-w-full object-contain"
          />
        </motion.div>
      </section>

      {/* Selector de aplicación */}
      <section className="mt-16">
        <div className="mx-auto flex max-w-xl rounded-2xl border border-slate-700/60 bg-slate-900/70 p-1.5">
          <button
            type="button"
            onClick={() =>
              setActiveApp("reader")
            }
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeApp === "reader"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            📚 MaxManga
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveApp("community")
            }
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeApp === "community"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            💬 Community
          </button>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          Funcionalidades
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentApp.features.map(
            (feature, index) => (
              <motion.div
                key={feature}
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
                  delay: index * 0.03,
                }}
                className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
              >
                <div className="mb-3 text-xl text-sky-400">
                  ✓
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {feature}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* Tecnologías */}
      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          Tecnologías
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6">
            <h3 className="font-semibold text-white">
              Lenguaje
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Kotlin
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6">
            <h3 className="font-semibold text-white">
              Desarrollo
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Android Studio y Android SDK
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6">
            <h3 className="font-semibold text-white">
              Backend
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Firebase
            </p>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="mt-20">
        <div className="mb-7">
          <h2 className="text-3xl font-bold text-sky-400">
            Capturas de {currentApp.title}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Algunas de las pantallas principales de la aplicación.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {currentApp.gallery.map(
            (item, index) => (
              <motion.figure
                key={item.image}
                initial={{
                  opacity: 0,
                  y: 15,
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
                className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 shadow-xl"
              >
                <div className="flex min-h-[420px] items-center justify-center bg-slate-950 p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[620px] max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <figcaption className="border-t border-slate-700/60 px-5 py-5">
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </figcaption>
              </motion.figure>
            ),
          )}
        </div>
      </section>

      {/* GitHub */}
      <section className="mt-20 pb-8">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white">
            Código fuente
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Consulta el código fuente y la documentación del TFG
            en GitHub.
          </p>

          <a
            href="https://github.com/JaimeMGR/TFG-Desarrollo-de-aplicaciones-multiplataforma-2023-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Ver repositorio en GitHub ↗
          </a>
        </div>
      </section>
    </motion.main>
  );
}