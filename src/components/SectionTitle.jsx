import { motion } from "framer-motion";

export function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-6 text-3xl font-bold text-sky-400"
    >
      {children}
    </motion.h2>
  );
}