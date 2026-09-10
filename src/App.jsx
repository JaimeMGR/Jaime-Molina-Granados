import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SteamGamesDetail } from "./components/SteamGamesDetail";
import { MaxMangaDetail } from "./components/MaxMangaDetail";
import { ProjectDetail } from "./components/ProjectDetail";
import { portfolioData } from "./data/portfolio";
import { ContactButton } from "./components/ContactButton";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";
import { SectionTitle } from "./components/SectionTitle";
import { SkillsGrid } from "./components/SkillsGrid";

function SocialLinks({ data, compact = false }) {
  const links = [
    {
      label: "GitHub",
      href: data.github,
    },
    {
      label: "LinkedIn",
      href: data.linkedin,
    },
  ];

  return (
    <div
      className={`flex flex-wrap gap-3 ${compact ? "justify-center" : ""
        }`}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function PdfModal({
  url,
  title,
  closeLabel,
  downloadLabel,
  onClose,
}) {
  useEffect(() => {
    if (!url) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [url, onClose]);

  if (!url) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex items-center justify-between gap-4 bg-slate-950 px-5 py-4">
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          {closeLabel}
        </button>
      </div>

      <iframe
        src={url}
        title={title}
        className="min-h-0 w-full flex-1"
      />

      <div className="flex justify-end bg-slate-950 p-4">
        <a
          href={url}
          download
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          {downloadLabel}
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("es");
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [selectedProject, setSelectedProject] =
    useState(null);
  const t = portfolioData[lang];

  const featuredProjects = useMemo(
    () =>
      t.projects.filter(
        (project) => project.featured,
      ),
    [t.projects],
  );

  const otherProjects = useMemo(
    () =>
      t.projects.filter(
        (project) => !project.featured,
      ),
    [t.projects],
  );

  useEffect(() => {
    document.documentElement.lang = lang;

    document.title = `${t.name} | ${t.title}`;
  }, [lang, t.name, t.title]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize,
      );
  }, []);

  useEffect(() => {
    const syncProjectFromHash = () => {
      const hash = window.location.hash;

      if (!hash.startsWith("#project=")) {
        setSelectedProject(null);
        return;
      }

      const slug = decodeURIComponent(
        hash.slice("#project=".length),
      );

      const project = t.projects.find(
        (item) => item.slug === slug,
      );

      setSelectedProject(project || null);

      if (project) {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }
    };

    syncProjectFromHash();

    window.addEventListener(
      "hashchange",
      syncProjectFromHash,
    );

    window.addEventListener(
      "popstate",
      syncProjectFromHash,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        syncProjectFromHash,
      );

      window.removeEventListener(
        "popstate",
        syncProjectFromHash,
      );
    };
  }, [t.projects]);

  const toggleLanguage = () => {
    setLang((current) =>
      current === "es" ? "en" : "es",
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openProject = (project) => {
    setSelectedProject(project);

    window.history.pushState(
      {},
      "",
      `#project=${project.slug}`,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeProject = () => {
    setSelectedProject(null);

    window.history.pushState(
      {},
      "",
      window.location.pathname,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (event, href) => {
    closeMenu();

    if (!selectedProject) {
      return;
    }

    event.preventDefault();

    setSelectedProject(null);

    window.history.pushState(
      {},
      "",
      window.location.pathname,
    );

    window.requestAnimationFrame(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  const navItems = [
    {
      href: "#projects",
      label: t.sections.projects,
    },
    {
      href: "#experience",
      label: t.sections.experience,
    },
    {
      href: "#education",
      label: t.sections.education,
    },
    {
      href: "#skills",
      label: t.sections.skills,
    },
    {
      href: "#contact",
      label: t.sections.contact,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        {t.ui.skip}
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
          <a
            href="#top"
            onClick={
              selectedProject
                ? (event) => {
                  event.preventDefault();
                  closeProject();
                }
                : undefined
            }
            className="no-underline"
            aria-label="Inicio"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-sky-400">
                &lt;JM/&gt;
              </span>

              <div>
                <div className="font-semibold text-white">
                  {t.name}
                </div>

                <div className="text-xs text-slate-400">
                  {t.title}
                </div>
              </div>
            </div>
          </a>

          <nav
            className="hidden items-center gap-4 lg:flex"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(event, item.href)
                }
                className="rounded-md px-2 py-1 text-sm text-slate-300 transition hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-2 rounded-xl bg-slate-800 px-3 py-2 text-xs text-slate-200 transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={t.ui.changeLanguage}
            >
              {lang === "es"
                ? "🇬🇧 English"
                : "🇪🇸 Español"}
            </button>

            <a
              href={t.cv}
              className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              CV
            </a>
          </nav>

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(
                (open) => !open,
              )
            }
            className="rounded-lg p-2 text-2xl text-sky-400 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label={t.ui.menu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={closeMenu}
        >
          <nav
            id="mobile-menu"
            className="absolute right-0 top-16 flex h-[calc(100%-4rem)] w-72 flex-col gap-3 border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(event, item.href)
                }
                className="rounded-lg px-3 py-2 text-sm text-slate-200 no-underline transition hover:bg-slate-800 hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-auto flex gap-3 border-t border-slate-800 pt-5">
              <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-xl bg-slate-800 px-3 py-2 text-xs text-slate-200 transition hover:bg-slate-700"
                aria-label={t.ui.changeLanguage}
              >
                {lang === "es"
                  ? "🇬🇧 English"
                  : "🇪🇸 Español"}
              </button>

              <a
                href={t.cv}
                onClick={closeMenu}
                className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-slate-950 no-underline transition hover:bg-sky-400"
              >
                CV
              </a>
            </div>
          </nav>
        </div>
      )}

      <main
        id="main-content"
        className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12"
      >
        {selectedProject ? (
          selectedProject.slug === "maxmanga" ||
            selectedProject.slug === "maxmanga-community" ? (
            <MaxMangaDetail
              project={selectedProject}
              onBack={closeProject}
            />
          ) : selectedProject.slug === "steam-games" ? (
            <SteamGamesDetail
              project={selectedProject}
              lang={lang}
              onBack={closeProject}
            />
          ) : (
            <ProjectDetail
              project={selectedProject}
              lang={lang}
              onBack={closeProject}
            />
          )
        ) : (
          <>
            <section
              id="top"
              className="grid items-center gap-10 py-6 md:grid-cols-[1.3fr_0.7fr] md:py-14"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Full Stack Developer · Data Engineering
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  {t.greeting[lang]}{" "}
                  <span className="text-sky-400">
                    {t.name}
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
                  {t.about}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {t.sections.projects}
                  </a>

                  <a
                    href={t.cv}
                    className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 no-underline transition hover:border-sky-400/40 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {t.ui.downloadCV}
                  </a>

                  <ContactButton
                    label={t.ui.sendEmail}
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "PHP",
                    "SQL",
                    "Python",
                    "dbt",
                    "Snowflake",
                    "Power BI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.aside
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-7 text-center shadow-2xl"
              >
                <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-sky-400/20 bg-sky-500/10 p-1 shadow-xl">
                  <img
                    src="/jaime.jpg"
                    alt={`Foto de ${t.name}`}
                    className="h-full w-full rounded-full object-cover"
                    fetchpriority="high"
                  />
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {t.title}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {t.location}
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  {t.englishLevel}
                </p>

                <a
                  href={`mailto:${t.email}`}
                  className="mt-2 block text-sm text-sky-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {t.email}
                </a>

                <div className="mt-6">
                  <SocialLinks
                    data={t}
                    compact
                  />
                </div>
              </motion.aside>
            </section>

            <section
              id="projects"
              className="mt-10 scroll-mt-24"
            >
              <SectionTitle>
                {t.sections.projects}
              </SectionTitle>

              <div className="space-y-6">
                {featuredProjects.map(
                  (project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      featured
                      onOpen={openProject}
                    />
                  ),
                )}
              </div>

              <div className="mt-12">
                <h3 className="mb-5 text-xl font-semibold text-white">
                  {t.sections.otherProjects}
                </h3>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherProjects.map(
                    (project) => (
                      <ProjectCard
                        key={project.title}
                        project={project}
                        onOpen={openProject}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="mt-7 flex justify-center">
                <a
                  href={t.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-medium text-slate-200 no-underline transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {t.ui.moreOnGitHub}
                </a>
              </div>
            </section>

            <section
              id="experience"
              className="mt-20 scroll-mt-24"
            >
              <SectionTitle>
                {t.sections.experience}
              </SectionTitle>

              <div className="grid gap-6 md:grid-cols-2">
                {t.experiences.map(
                  (experience) => (
                    <ExperienceCard
                      key={`${experience.role}-${experience.company}`}
                      experience={experience}
                      onRecommendation={setPdfUrl}
                      recommendationLabel={
                        t.ui.recommendation
                      }
                    />
                  ),
                )}
              </div>
            </section>

            <section
              id="education"
              className="mt-20 scroll-mt-24"
            >
              <SectionTitle>
                {t.sections.education}
              </SectionTitle>

              <div className="grid gap-5 md:grid-cols-2">
                {t.education.map(
                  (education) => (
                    <motion.article
                      key={education.title}
                      initial={{
                        opacity: 0,
                        y: 14,
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
                      <div className="flex items-start gap-4">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-white">
                            {education.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            {education.org}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {education.dates}
                          </p>
                        </div>

                        <img
                          src={`/${education.image}`}
                          alt={`Logo de ${education.org}`}
                          className="h-16 w-16 shrink-0 rounded-2xl bg-white/5 object-contain p-1"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </motion.article>
                  ),
                )}
              </div>
            </section>

            <section
              id="skills"
              className="mt-20 scroll-mt-24"
            >
              <SectionTitle>
                {t.sections.skills}
              </SectionTitle>

              <SkillsGrid
                lang={lang}
                skills={t.skills}
              />
            </section>

            <section className="mt-20">
              <SectionTitle>
                {t.sections.certifications}
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-3">
                {t.certifications.map(
                  (certification) => (
                    <article
                      key={certification.title}
                      className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
                    >
                      <h3 className="font-semibold text-white">
                        {certification.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {certification.date}
                      </p>

                      {certification.recommendationLink && (
                        <a
                          href={
                            certification.recommendationLink
                          }
                          className="mt-4 inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        >
                          {t.ui.recommendation}
                        </a>
                      )}
                    </article>
                  ),
                )}
              </div>
            </section>

            <section
              id="contact"
              className="mt-20 scroll-mt-24 pb-8"
            >
              <SectionTitle>
                {t.sections.contact}
              </SectionTitle>

              <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-7 shadow-xl md:flex md:items-center md:justify-between md:gap-8">
                <div>
                  <p className="text-xl font-semibold text-white">
                    {t.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {t.title} · {t.location}
                  </p>

                  <a
                    href={`mailto:${t.email}`}
                    className="mt-2 inline-block text-sm text-sky-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {t.email}
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
                  <a
                    href={t.cv}
                    className="rounded-xl bg-sky-500 px-4 py-2 font-medium text-slate-950 no-underline transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {t.ui.downloadCV}
                  </a>

                  <SocialLinks data={t} />
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-slate-800/80 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()}{" "}
        {t.name} ·{" "}
        {lang === "es"
          ? "Todos los derechos reservados."
          : "All rights reserved."}
      </footer>

      <PdfModal
        url={pdfUrl}
        title={t.ui.recommendation}
        closeLabel={t.ui.close}
        downloadLabel={t.ui.downloadPDF}
        onClose={() => setPdfUrl(null)}
      />
    </div>
  );
}