import { Sparkles, Briefcase, Award, ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";
import { INTERNSHIP_DOMAINS } from "../../lib/domains";

const stats = [
  { icon: Sparkles, value: "6+", label: "Internship Domains" },
  { icon: Briefcase, value: "\u20b915K", label: "Stipend Opportunities" },
  { icon: Award, value: "100%", label: "Project Based" },
];

function HeroSection() {
  return (
    <Section
      noPadding
      className="relative overflow-hidden !py-12 sm:!py-16 lg:!py-20 xl:!py-[5.25rem] flex items-center"
    >
      <Container className="relative z-[1] w-full">
        <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6 max-w-xl lg:max-w-none">
            <p className="font-label text-[11px] uppercase tracking-[0.14em] text-teal-700">
              Cosmolix Pvt Ltd
            </p>
            <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-2 text-sm font-medium text-teal-800 sm:px-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-pretty leading-snug">
                Industrial Internship Program 2026
              </span>
            </span>
            <h1 className="font-display text-[clamp(1.875rem,4.2vw+0.65rem,3rem)] font-semibold leading-[1.12] tracking-tight text-ink text-balance">
              Build Your
              <span className="block text-gradient-luxury">Tech Career</span>
              With Cosmolix
            </h1>
            <p className="text-muted max-w-[36rem] text-base leading-relaxed sm:text-lg text-pretty">
              Join a practical industry-focused internship with real-world projects, expert mentorship,
              and exposure to advanced technologies.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button to="/apply" variant="primary" className="w-full min-h-[3rem] justify-center sm:w-auto sm:min-h-0">
                Apply Now
                <ArrowRight size={16} className="shrink-0" aria-hidden />
              </Button>
              <Button href="#domains" variant="outline" className="w-full min-h-[3rem] justify-center sm:w-auto sm:min-h-0">
                Explore Domains
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3 sm:gap-3 lg:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="surface-card flex min-w-0 items-center gap-3 p-3.5 sm:p-4 lg:gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-teal-100 bg-teal-50 text-teal-700 sm:h-11 sm:w-11">
                    <stat.icon size={19} className="shrink-0" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl font-semibold leading-none text-ink sm:text-2xl tabular-nums tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-snug text-muted sm:text-[0.8125rem]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 w-full lg:justify-self-end">
            <div
              className="glass-panel flex min-h-0 w-full max-w-xl flex-col sm:max-w-none lg:max-w-md xl:max-w-[26.5rem] lg:sticky lg:top-[calc(var(--nav-height)+1.5rem)] p-5 sm:p-7 lg:ml-auto"
            >
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3 gap-y-2 border-b border-border/80 pb-5">
                <h2 className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl min-w-0 flex-1 text-balance">
                  Internship Domains
                </h2>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-100/80 bg-teal-50/90 px-2.5 py-1 font-label text-[10px] font-semibold uppercase tracking-wider text-teal-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Open
                </span>
              </div>
              <ul className="flex max-h-[min(52vh,28rem)] min-h-0 flex-col gap-2 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:thin] sm:max-h-[min(56vh,30rem)] lg:max-h-[min(70vh,34rem)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-teal-200/80">
                {INTERNSHIP_DOMAINS.map((domain) => (
                  <li
                    key={domain}
                    className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-white/95 px-3.5 py-3 text-sm font-medium leading-snug text-ink-soft shadow-[0_1px_0_rgba(12,18,34,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-teal-200/60 hover:shadow-sm sm:px-4 sm:py-3.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span className="min-w-0 flex-1 text-pretty">{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
