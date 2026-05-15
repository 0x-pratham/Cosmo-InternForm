import { motion } from "framer-motion";

function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={[
        "w-full max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <p
          className={[
            "font-label uppercase text-xs text-teal-700 mb-4",
            "flex items-center gap-3",
            isCenter ? "justify-center" : "justify-start",
          ].join(" ")}
        >
          {isCenter && (
            <span className="hidden sm:block flex-1 max-w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
          )}
          <span className="shrink-0">{label}</span>
          {isCenter && (
            <span className="hidden sm:block flex-1 max-w-12 h-px bg-gradient-to-l from-transparent to-teal-500/50" />
          )}
        </p>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-ink tracking-tight">
        {title}
        {highlight && (
          <span className="block text-gradient-luxury mt-1">{highlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={[
            "text-muted text-base sm:text-lg mt-5 leading-relaxed",
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
          ].join(" ")}
        >
          {description}
        </p>
      )}

      <div
        className={[
          "luxury-divider mt-8",
          isCenter ? "mx-auto max-w-24" : "max-w-24",
        ].join(" ")}
      />
    </motion.header>
  );
}

export default SectionHeader;
