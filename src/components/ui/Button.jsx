import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  primary: "btn-luxury",
  outline: "btn-outline-luxury",
  gold: "btn-gold",
  dark: "bg-ink text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800",
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 22 },
};

function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "px-6 sm:px-8 py-3 sm:py-3.5",
    "rounded-full text-sm font-semibold whitespace-nowrap",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
