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
        <p className="font-label mb-3 text-xs uppercase tracking-[0.14em] text-teal-700 sm:mb-4">
          {label}
        </p>
      )}

      <h2 className="font-display text-balance text-[clamp(1.625rem,2.5vw+1rem,2.5rem)] font-semibold leading-[1.15] text-ink sm:text-[clamp(1.75rem,2.2vw+1rem,2.75rem)] lg:text-[clamp(1.875rem,2vw+1rem,2.75rem)]">
        {title}
        {highlight && (
          <span className="mt-1.5 block text-gradient-luxury sm:mt-2">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}

      <div className="luxury-divider" />
    </motion.header>
  );
}

export default SectionHeader;
