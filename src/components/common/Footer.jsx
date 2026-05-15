import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white/70">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          <div className="text-center md:text-left">
            <h2 className="font-display text-xl font-semibold text-ink">COSMOLIX</h2>
            <p className="text-sm text-muted mt-1.5">
              Industrial Internship Program 2026
            </p>
            <p className="font-label text-[10px] uppercase tracking-widest text-teal-700 mt-2">
              Cosmolix Pvt Ltd
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
            aria-label="Footer navigation"
          >
            <Link to="/" className="text-muted hover:text-teal-700 transition-colors">
              Home
            </Link>
            <Link to="/apply" className="text-muted hover:text-teal-700 transition-colors">
              Apply
            </Link>
            <a
              href="https://cosmolix.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-teal-700 transition-colors"
            >
              Website
            </a>
          </nav>

          <p className="text-sm text-muted text-center md:text-right">
            © 2026 Cosmolix Pvt Ltd.
            <span className="block text-muted-light text-xs mt-1">
              All rights reserved.
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
