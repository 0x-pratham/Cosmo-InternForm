import { Link } from "react-router-dom";

const variants = {
  primary: "btn-luxury",
  outline: "btn-outline-luxury",
  gold: "btn-gold",
};

function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  type = "button",
  onClick,
  disabled,
  ...props
}) {
  const classes = ["btn", variants[variant], className].filter(Boolean).join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
