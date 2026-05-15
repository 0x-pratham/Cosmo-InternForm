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
      className="relative overflow-hidden !py-14 sm:!py-16 lg:!py-20 min-h-[calc(100vh-var(--nav-height))] flex items-center"
    >
      <Container>
        <div className="grid w-full lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-6 min-w-0">
            <p className="font-label uppercase text-xs text-teal-700">Cosmolix Pvt Ltd</p>
            <span className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-800 text-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Industrial Internship Program 2026
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] text-ink">
              Build Your
              <span className="block text-gradient-luxury">Tech Career</span>
              With Cosmolix
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              Join a practical industry-focused internship with real-world projects,
              expert mentorship, and exposure to advanced technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button to="/apply" variant="primary">
                Apply Now
                <ArrowRight size={16} />
              </Button>
              <Button href="#domains" variant="outline">
                Explore Domains
              </Button>
            </div>
            <div className="ui-grid ui-grid--3 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card flex items-center gap-4 p-4 sm:p-5 min-w-0">
                  <div className="flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
                    <stat.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-2xl font-semibold text-ink leading-none">{stat.value}</p>
                    <p className="text-muted text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full min-w-0 lg:justify-self-end">
            <div className="glass-panel p-6 sm:p-8 w-full">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                  Internship Domains
                </h2>
                <span className="font-label text-[10px] uppercase text-teal-700 flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Open
                </span>
              </div>
              <ul className="space-y-2">
                {INTERNSHIP_DOMAINS.map((domain) => (
                  <li
                    key={domain}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border text-sm font-medium text-ink-soft"
                  >
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-teal-500" />
                    {domain}
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




