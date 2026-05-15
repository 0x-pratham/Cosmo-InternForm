function Section({
  id,
  children,
  className = "",
  variant = "default",
  noPadding = false,
}) {
  const variants = {
    default: "",
    alt: "bg-white/60 border-y border-border",
    muted: "bg-pearl/80",
  };

  return (
    <section
      id={id}
      className={[
        "relative w-full",
        id ? "scroll-mt-24" : "",
        noPadding ? "" : "py-20 sm:py-24 lg:py-28",
        variants[variant] ?? variants.default,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

export default Section;
