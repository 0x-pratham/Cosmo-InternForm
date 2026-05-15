import { motion } from "framer-motion";
import { Sparkles, Briefcase, Award, ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";

const stats = [
  { icon: Sparkles, value: "6+", label: "Internship Domains" },
  { icon: Briefcase, value: "₹15K", label: "Stipend Opportunities" },
  { icon: Award, value: "100%", label: "Project Based" },
];

const domains = [
  "Full Stack Web Development",
  "Machine Learning & AI",
  "Cybersecurity & Ethical Hacking",
  "Mobile App Development",
  "Internet of Things (IoT)",
  "Data Science & Analytics",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function HeroSection() {
  return (
    <Section noPadding className="overflow-hidden min-h-[calc(100vh-var(--nav-height))] flex items-center py-12 sm:py-16 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-teal-500/6 blur-[100px] rounded-full"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/6 blur-[100px] rounded-full"
      />

      <Container size="wide" className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center"
        >
          <div className="space-y-6 sm:space-y-7">
            <motion.p variants={item} className="font-label uppercase text-xs text-teal-700">
              Cosmolix Pvt Ltd
            </motion.p>

            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-teal-200/80 bg-teal-50 text-teal-800 text-xs sm:text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
              Industrial Internship Program 2026
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold leading-[1.08] text-ink tracking-tight"
            >
              Build Your
              <span className="block text-gradient-luxury">Tech Career</span>
              With Cosmolix
            </motion.h1>

            <motion.p
              variants={item}
              className="text-muted text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Join a practical industry-focused internship designed for real-world
              projects, expert mentorship, and exposure to advanced technologies.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <Button to="/apply" variant="primary">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#domains" variant="outline">
                Explore Domains
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 sm:flex-col sm:items-start lg:flex-row lg:items-center rounded-2xl surface-card p-4 border border-border"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-50 to-amber-50 text-teal-700 border border-teal-100 shrink-0">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-1 leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={item} className="hidden lg:flex justify-end">
            <div className="w-full max-w-md rounded-3xl glass-panel p-6 xl:p-8">
              <motion.div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="font-display text-xl xl:text-2xl font-semibold text-ink">
                  Internship Domains
                </h3>
                <span className="flex items-center gap-1.5 text-[10px] text-teal-700 font-label uppercase tracking-wider shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open
                </span>
              </motion.div>

              <ul className="space-y-2.5">
                {domains.map((domain) => (
                  <li
                    key={domain}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-border text-sm text-ink-soft font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 shrink-0" />
                    <span className="leading-snug">{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default HeroSection;
