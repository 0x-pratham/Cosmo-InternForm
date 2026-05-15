const SIZES = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  narrow: "max-w-3xl",
  form: "max-w-4xl",
};

function Container({
  children,
  className = "",
  size = "default",
  stack = false,
  as: Tag = "div",
}) {
  const stackClasses = stack
    ? "flex flex-col gap-12 sm:gap-14 lg:gap-16"
    : "";

  return (
    <Tag
      className={[
        "w-full mx-auto",
        SIZES[size] ?? SIZES.default,
        "px-4 sm:px-6 lg:px-8",
        stackClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

export default Container;
