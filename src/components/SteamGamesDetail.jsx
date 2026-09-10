import { motion } from "framer-motion";

const content = {
  es: {
    eyebrow: "Proyecto final · Data Engineering",
    title: "Steam Games — Data Engineering Pipeline",
    subtitle:
      "Pipeline end-to-end para transformar datos de Steam en modelos analíticos y dashboards",
    description:
      "Proyecto final de la certificación en Data Engineering. El pipeline parte de datos de juegos de Steam y de un dominio de partidas multijugador generado con Python, y los transforma mediante una arquitectura Medallion en Snowflake. dbt se encarga de la limpieza, normalización, modelado, testing y control histórico antes de llevar los datos a Power BI.",
    ctaGitHub: "Ver repositorio en GitHub ↗",
    back: "← Volver a proyectos",
    metricsTitle: "El proyecto en cifras",
    metrics: [
      ["67.000", "juegos de Steam en el catálogo inicial"],
      ["400.712", "registros de estadísticas de partidas"],
      ["50.000", "partidas multijugador simuladas"],
      ["5.200", "jugadores generados para el dominio de partidas"],
      ["13", "tablas normalizadas en Silver"],
      ["2", "data marts dimensionales en Gold"],
    ],
    architectureTitle: "Arquitectura Medallion",
    architectureText:
      "El pipeline separa la ingesta, la transformación y el consumo analítico en tres capas con responsabilidades claramente definidas.",
    layers: [
      {
        name: "Bronze",
        text: "Ingesta cruda desde CSV. Los datos se mantienen sin transformar y los campos se reciben como VARCHAR para evitar que datos corruptos rompan la carga.",
      },
      {
        name: "Silver",
        text: "Limpieza, tipado y normalización. El modelo se organiza en 13 tablas según el modelo entidad-relación y las relaciones N:M se resuelven mediante tablas puente.",
      },
      {
        name: "Gold",
        text: "Modelo dimensional preparado para consumo analítico. Incluye dos data marts en esquema estrella y dimensiones conformadas compartidas.",
      },
    ],
    technicalTitle: "Decisiones técnicas",
    technical: [
      "Modelos incrementales para fct_juego y fct_match_player, procesando solo datos nuevos.",
      "Snapshot SCD-2 sobre GAMES_RAW para conservar el histórico de cambios.",
      "Hash MD5 sobre el email del jugador para anonimizar datos personales antes de Gold.",
      "Variables de entorno para separar los entornos DEV y PRO en Snowflake.",
      "Tablas puente para resolver relaciones muchos a muchos como géneros y tecnologías.",
      "Staging 1:1 con el origen y normalización posterior en la capa intermediate.",
    ],
    difficultiesTitle: "Dificultades superadas",
    difficulties: [
      ["Descoordinación entre capas", "Un full-refresh parcial dejó la fact y la dimensión desalineadas. La solución fue reconstruir el mart completo cuando cambia la lógica que lo afecta."],
      ["Filas fantasma en incrementales", "Un registro con métricas vacías sobrevivió en un modelo incremental. El aprendizaje fue colocar los filtros de calidad lo más arriba posible y usar full-refresh cuando cambia la lógica."],
      ["Configuración YAML", "Un job fallaba por una sección seeds: anidada dentro de models:. Corregir la estructura dejó la configuración de dbt válida y el job operativo."],
    ],
    qualityTitle: "Calidad de datos y testing",
    qualityIntro:
      "La calidad del dato es una parte central del proyecto. Se combinan tests nativos de dbt, tests custom y tests singulares con reglas de negocio.",
    quality: [
      ["Tests genéricos", "unique, not_null, accepted_range y relationships."],
      ["Tests custom", "Reglas reutilizables para KDA, fechas, porcentajes y coherencia temporal."],
      ["Tests singulares", "Reglas de negocio específicas para métricas, porcentajes y relaciones referenciales."],
      ["Macros", "limpiar_texto, parsear_fecha, obtener_segmento y generate_schema_name."],
    ],
    powerBiTitle: "Casos de uso en Power BI",
    powerBiIntro:
      "La capa Gold se consume desde Power BI para responder preguntas analíticas sobre rendimiento, catálogo y tecnologías.",
    powerBi: [
      ["Top 10 por KDA", "Ranking de jugadores filtrable por juego, modo y región."],
      ["Análisis de géneros", "Géneros dominantes y valoración media utilizando la tabla puente."],
      ["Estudios y desarrolladoras", "Análisis de editores y desarrolladores por puntuación y jugadores."],
      ["Rendimiento de tecnologías", "Relación entre engines utilizados, popularidad y calidad de los juegos."],
    ],
    galleryTitle: "Arquitectura y modelado",
    gallery: [
      ["Arquitectura Medallion", "Flujo completo Bronze → Silver → Gold.", "/proyectos/steam/steam-architecture.png"],
      ["Modelo entidad-relación en Silver", "Estructura normalizada de 13 tablas y sus relaciones.", "/proyectos/steam/steam-silver-erd.png"],
      ["Modelo dimensional en Gold", "Dos data marts en esquema estrella con dimensiones conformadas.", "/proyectos/steam/steam-gold-model.png"],
      ["Demo de dbt", "Snapshot SCD-2, ingesta incremental, dbt run y dbt test.", "/proyectos/steam/steam-dbt-demo.png"],
      ["Calidad y testing", "Capas de validación, macros, snapshots y reglas de negocio.", "/proyectos/steam/steam-testing.png"],
      ["Casos de uso en Power BI", "Los cuatro análisis planteados para el consumo del modelo Gold.", "/proyectos/steam/steam-powerbi.png"],
    ],
    repositoryTitle: "Código fuente",
    repositoryText:
      "Consulta en GitHub los modelos dbt, macros, snapshots, tests, seeds y la configuración del proyecto.",
  },

  en: {
    eyebrow: "Final project · Data Engineering",
    title: "Steam Games — Data Engineering Pipeline",
    subtitle:
      "End-to-end pipeline transforming Steam data into analytical models and dashboards",
    description:
      "Final project for the Data Engineering certification. The pipeline combines Steam game data with a multiplayer match domain generated in Python and transforms them through a Medallion Architecture on Snowflake. dbt handles cleaning, normalization, modeling, testing and historical tracking before the data is consumed in Power BI.",
    ctaGitHub: "View repository on GitHub ↗",
    back: "← Back to projects",
    metricsTitle: "Project at a glance",
    metrics: [
      ["67,000", "Steam games in the initial catalog"],
      ["400,712", "match statistics records"],
      ["50,000", "simulated multiplayer matches"],
      ["5,200", "players generated for the match domain"],
      ["13", "normalized tables in Silver"],
      ["2", "dimensional data marts in Gold"],
    ],
    architectureTitle: "Medallion Architecture",
    architectureText:
      "The pipeline separates ingestion, transformation and analytical consumption into three layers with clearly defined responsibilities.",
    layers: [
      {
        name: "Bronze",
        text: "Raw CSV ingestion. Data is kept untransformed and fields are loaded as VARCHAR so corrupted values cannot break ingestion.",
      },
      {
        name: "Silver",
        text: "Cleaning, typing and normalization. The model is organized into 13 tables according to the ERD, with bridge tables resolving many-to-many relationships.",
      },
      {
        name: "Gold",
        text: "Analytical dimensional model. It contains two star-schema data marts and shared conformed dimensions.",
      },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Incremental models for fct_juego and fct_match_player, processing only new records.",
      "SCD-2 snapshot over GAMES_RAW to preserve change history.",
      "MD5 hashing of player emails to anonymize personal data before Gold.",
      "Environment variables to separate DEV and PRO in Snowflake.",
      "Bridge tables to resolve many-to-many relationships such as genres and technologies.",
      "1:1 staging with the source and normalization later in the intermediate layer.",
    ],
    difficultiesTitle: "Problems solved",
    difficulties: [
      ["Layer synchronization", "A partial full-refresh left a fact table and its dimension out of sync. The solution was to rebuild the affected mart when its logic changes."],
      ["Ghost rows in incrementals", "A record with empty metrics survived in an incremental model. The lesson was to place quality filters as early as possible and use a full-refresh when logic changes."],
      ["YAML configuration", "A job failed because seeds: was nested inside models:. Fixing the structure restored the valid dbt configuration and the job."],
    ],
    qualityTitle: "Data quality and testing",
    qualityIntro:
      "Data quality is a core part of the project. Native dbt tests, custom tests and singular business-rule tests are combined to validate the pipeline.",
    quality: [
      ["Generic tests", "unique, not_null, accepted_range and relationships."],
      ["Custom tests", "Reusable rules for KDA, dates, percentages and temporal consistency."],
      ["Singular tests", "Business-specific rules for metrics, percentages and referential integrity."],
      ["Macros", "limpiar_texto, parsear_fecha, obtener_segmento and generate_schema_name."],
    ],
    powerBiTitle: "Power BI use cases",
    powerBiIntro:
      "The Gold layer is consumed through Power BI to answer analytical questions about performance, catalog data and technologies.",
    powerBi: [
      ["Top 10 by KDA", "Player ranking filterable by game, mode and region."],
      ["Genre analysis", "Dominant genres and average rating using the bridge table."],
      ["Publishers and developers", "Analysis of publishers and developers by rating and players."],
      ["Technology performance", "Relationship between game engines, popularity and quality."],
    ],
    galleryTitle: "Architecture and modeling",
    gallery: [
      ["Medallion Architecture", "Complete Bronze → Silver → Gold flow.", "/proyectos/steam/steam-architecture.png"],
      ["Silver entity-relationship model", "Normalized structure of 13 tables and their relationships.", "/proyectos/steam/steam-silver-erd.png"],
      ["Gold dimensional model", "Two star-schema data marts with conformed dimensions.", "/proyectos/steam/steam-gold-model.png"],
      ["dbt demo", "SCD-2 snapshot, incremental ingestion, dbt run and dbt test.", "/proyectos/steam/steam-dbt-demo.png"],
      ["Quality and testing", "Validation layers, macros, snapshots and business rules.", "/proyectos/steam/steam-testing.png"],
      ["Power BI use cases", "The four analytical use cases defined for the Gold model.", "/proyectos/steam/steam-powerbi.png"],
    ],
    repositoryTitle: "Source code",
    repositoryText:
      "Explore the dbt models, macros, snapshots, tests, seeds and project configuration on GitHub.",
  },
};

export function SteamGamesDetail({ project, lang = "es", onBack }) {
  const t = content[lang] || content.es;
  const repositoryUrl =
    project?.link ||
    "https://github.com/JaimeMGR/DBT_LSAT_PROJECT";

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        {t.back}
      </button>

      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
            {t.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            {t.title}
          </h1>

          <p className="mt-3 text-xl font-medium text-slate-300">
            {t.subtitle}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Python",
              "SQL",
              "dbt",
              "Snowflake",
              "Power BI",
              "GitHub",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {t.ctaGitHub}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/80 p-4 shadow-2xl">
          <img
            src="/proyectos/steam/steam-architecture.png"
            alt={t.gallery[0][0]}
            className="w-full rounded-2xl object-contain"
            fetchpriority="high"
          />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {t.metricsTitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.metrics.map(([value, label]) => (
            <motion.div
              key={value + label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 shadow-md"
            >
              <div className="text-3xl font-bold text-white">
                {value}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold text-sky-400">
            {t.architectureTitle}
          </h2>

          <p className="text-base leading-7 text-slate-400">
            {t.architectureText}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.layers.map((layer, index) => (
            <motion.article
              key={layer.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {layer.name}
                </h3>
                <span className="text-sm font-mono text-sky-400">
                  0{index + 1}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                {layer.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {t.technicalTitle}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {t.technical.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
            >
              <div className="mb-2 text-sky-400">✓</div>
              <p className="text-sm leading-6 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-bold text-sky-400">
          {t.difficultiesTitle}
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {t.difficulties.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 shadow-md"
            >
              <span className="font-mono text-sm text-sky-400">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold text-sky-400">
            {t.qualityTitle}
          </h2>

          <p className="text-base leading-7 text-slate-400">
            {t.qualityIntro}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.quality.map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 shadow-md"
            >
              <h3 className="font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold text-sky-400">
            {t.powerBiTitle}
          </h2>

          <p className="text-base leading-7 text-slate-400">
            {t.powerBiIntro}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.powerBi.map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-6 shadow-md"
            >
              <h3 className="font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-7 text-3xl font-bold text-sky-400">
          {t.galleryTitle}
        </h2>

        <div className="grid gap-7 md:grid-cols-2">
          {t.gallery.map(([title, description, image], index) => (
            <motion.figure
              key={image}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className={`overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 shadow-xl ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex min-h-[300px] items-center justify-center bg-slate-950 p-4 md:min-h-[360px]">
                <img
                  src={image}
                  alt={title}
                  className="max-h-[650px] w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <figcaption className="border-t border-slate-700/60 px-5 py-5">
                <h3 className="font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="mt-20 pb-8">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white">
            {t.repositoryTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            {t.repositoryText}
          </p>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            {t.ctaGitHub}
          </a>
        </div>
      </section>
    </motion.main>
  );
}
