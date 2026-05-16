import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white/80 backdrop-blur-sm">
      <Container className="py-9 sm:py-11 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          <div className="text-center md:text-left">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">COSMOLIX</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Industrial Internship Program 2026
            </p>
            <p className="mt-2 font-label text-[10px] uppercase tracking-widest text-teal-700">
              Cosmolix Pvt Ltd
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:justify-center"
            aria-label="Footer navigation"
          >
            <Link
              to="/"
              className="text-muted transition-colors duration-200 hover:text-teal-700"
            >
              Home
            </Link>
            <Link
              to="/apply"
              className="text-muted transition-colors duration-200 hover:text-teal-700"
            >
              Apply
            </Link>
            <a
              href="https://cosmolix.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors duration-200 hover:text-teal-700"
            >
              Website
            </a>
          </nav>

          <p className="text-center text-sm leading-relaxed text-muted md:text-right">
            © 2026 Cosmolix Pvt Ltd.
            <span className="mt-1 block text-xs text-muted-light">All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
