import { motion } from "framer-motion";

function SectionHeader({ label, title, highlight, description }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: "-40px" }}
      className="section-heading"
    >
      {label && (
        <p className="font-label uppercase text-xs text-teal-700 mb-4 tracking-widest">
          {label}
        </p>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-ink">
        {title}
        {highlight && (
          <span className="block text-gradient-luxury mt-2">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="luxury-divider" />
    </motion.header>
  );
}

export default SectionHeader;
