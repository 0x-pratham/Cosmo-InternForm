function Section({
  id,
  children,
  className = "",
  variant = "default",
  noPadding = false,
}) {
  const variants = {
    default: "",
    alt: "bg-white/70 border-y border-border",
    muted: "bg-pearl/80",
  };

  return (
    <section
      id={id}
      className={[
        "page-section w-full",
        id ? "scroll-mt-[calc(var(--nav-height)+1rem)]" : "",
        noPadding ? "!py-0" : "",
        variants[variant] ?? "",
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
