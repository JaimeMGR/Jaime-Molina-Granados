import { motion } from "framer-motion";
const categories = {
  es: [
    ["Lenguajes", "languages"],
    ["Web", "web"],
    ["Mobile", "mobile"],
    ["Bases de datos", "db"],
    ["Data Engineering", "data"],
    ["Herramientas", "tools"],
    ["Otros", "other"],
  ],

  en: [
    ["Languages", "languages"],
    ["Web", "web"],
    ["Mobile", "mobile"],
    ["Databases", "db"],
    ["Data Engineering", "data"],
    ["Tools", "tools"],
    ["Other", "other"],
  ],
};

export function SkillsGrid({
  lang,
  skills,
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories[lang].map(
        ([label, key], index) => (
          <motion.div
            key={key}
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
              delay: index * 0.04,
            }}
            className="rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-md"
          >
            <h3 className="mb-3 font-semibold text-white">
              {label}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills[key].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-xs text-sky-300"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        ),
      )}
    </div>
  );
}