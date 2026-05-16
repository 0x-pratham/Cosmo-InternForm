import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { hash: "#about", label: "About" },
  { hash: "#domains", label: "Domains" },
  { hash: "#benefits", label: "Benefits" },
  { hash: "#faq", label: "FAQ" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);
  const closeMobileMenu = () => setMobileOpen(false);

  const handleNavClick = (e, hash) => {
    closeMobileMenu();
    if (!isHome) return;
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 min-h-[var(--nav-height)] border-b transition-[box-shadow,background-color,border-color] duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-border shadow-[0_1px_0_rgba(12,18,34,0.04),0_12px_40px_-20px_rgba(12,18,34,0.12)]"
          : "bg-white/88 backdrop-blur-md border-border/50"
      }`}
    >
      <Container className="relative h-[var(--nav-height)] !py-0 flex items-center">
        <div className="flex w-full min-w-0 items-center justify-between gap-3 sm:gap-4">
          <Link
  to="/"
  onClick={() => {
    closeMobileMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
            className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2.5 sm:gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="Cosmolix"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
            />
            <div className="min-w-0 hidden sm:block">
              <p className="font-display text-base sm:text-lg font-semibold text-ink leading-tight tracking-tight">
                COSMOLIX
              </p>
              <p className="font-label text-[10px] text-muted tracking-widest">
                BEYOND THE LIMITS
              </p>
            </div>
          </Link>

          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:pointer-events-auto lg:flex lg:items-center lg:gap-7 xl:gap-8"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={getNavHref(link.hash)}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="pointer-events-auto font-label text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-teal-700 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-teal-600/70 after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="hidden lg:block">
              <Button
                to="/apply"
                variant="primary"
                className="!py-2.5 !px-5 !text-[11px] !tracking-[0.08em]"
                onClick={closeMobileMenu}
              >
                Apply Now
              </Button>
            </div>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-border bg-white/90 text-ink shadow-sm transition-[color,box-shadow,border-color,background-color] duration-200 hover:border-teal-200/70 hover:bg-teal-50/40 hover:shadow-md"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-white/98 backdrop-blur-xl shadow-[0_24px_48px_-28px_rgba(12,18,34,0.18)]"
          >
            <Container className="py-5">
              <nav className="flex flex-col divide-y divide-border/80" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.hash}
                    href={getNavHref(link.hash)}
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className="font-label text-xs font-medium uppercase tracking-[0.12em] text-muted py-3.5 pr-2 transition-colors duration-200 first:pt-1 hover:text-teal-700"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button
                to="/apply"
                variant="primary"
                className="mt-5 w-full !rounded-[var(--radius-md)] !py-3.5 justify-center"
                onClick={closeMobileMenu}
              >
                Apply Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
