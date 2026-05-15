function Container({ children, className = "", stack = false, narrow = false, as: Tag = "div" }) {
  return (
    <Tag
      className={[
        "page-container",
        narrow ? "page-container--narrow" : "",
        stack ? "page-stack" : "",
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
