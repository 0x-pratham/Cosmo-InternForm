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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] border-b transition-shadow ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-border shadow-sm"
          : "bg-white/90 backdrop-blur-md border-border/60"
      }`}
    >
      <Container className="h-full !py-0 flex items-center">
        <div className="grid w-full grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 min-w-0 justify-self-start"
          >
            <img src={logo} alt="Cosmolix" className="w-10 h-10 object-contain shrink-0" />
            <div className="min-w-0 hidden sm:block">
              <p className="font-display text-lg font-semibold text-ink leading-tight">COSMOLIX</p>
              <p className="font-label text-[10px] text-muted tracking-widest">BEYOND THE LIMITS</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={getNavHref(link.hash)}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="font-label text-[11px] uppercase tracking-wider text-muted hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <div className="hidden lg:block">
              <Button to="/apply" variant="primary" className="!py-2.5 !px-5 !text-xs" onClick={closeMobileMenu}>
                Apply Now
              </Button>
            </div>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2.5 rounded-xl border border-border"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <Container className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.hash}
                  href={getNavHref(link.hash)}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="block font-label text-xs uppercase tracking-wider text-muted py-3"
                >
                  {link.label}
                </a>
              ))}
              <Button to="/apply" variant="primary" className="w-full !rounded-xl mt-2" onClick={closeMobileMenu}>
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
