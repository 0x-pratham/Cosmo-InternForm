import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const getNavHref = (hash) => (isHome ? hash : `/${hash}`);

  const handleNavClick = (e, hash) => {
    if (!isHome) return;
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-[var(--nav-height)] transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <Container className="h-full">
        <motion.div className="flex h-full items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group shrink-0 min-w-0">
            <img
              src={logo}
              alt="Cosmolix"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />
            <div className="min-w-0">
              <h1 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink truncate">
                COSMOLIX
              </h1>
              <p className="font-label text-[9px] sm:text-[10px] text-muted tracking-widest truncate">
                BEYOND THE LIMITS
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={getNavHref(link.hash)}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="relative font-label text-[11px] uppercase tracking-wider text-muted hover:text-teal-700 whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button to="/apply" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="lg:hidden p-2.5 rounded-xl border border-border text-ink shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <Container className="py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.hash}
                  href={getNavHref(link.hash)}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="block font-label text-xs uppercase tracking-wider text-muted hover:text-teal-700 py-3 px-1"
                >
                  {link.label}
                </a>
              ))}
              <motion.div className="pt-3">
                <Button to="/apply" variant="primary" className="w-full !rounded-xl !py-3.5">
                  Apply Now
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
