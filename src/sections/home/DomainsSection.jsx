import {
  Cpu,
  Laptop,
  ShieldCheck,
  Smartphone,
  Wifi,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const domains = [
  {
    title: "Full Stack Web Development",
    description:
      "Build modern responsive web applications using frontend and backend technologies with real-world deployment workflows.",
    tech: ["React", "Node.js", "MongoDB", "APIs"],
    icon: Laptop,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Work on intelligent systems, AI models, automation workflows, and practical machine learning implementations.",
    tech: ["Python", "TensorFlow", "AI Models", "Automation"],
    icon: Cpu,
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Learn security testing, penetration testing, vulnerability analysis, and cyber defense concepts.",
    tech: ["Kali Linux", "Networking", "Pentesting", "OSINT"],
    icon: ShieldCheck,
  },
  {
    title: "Mobile App Development",
    description:
      "Develop Android and cross-platform mobile applications using modern frameworks and backend integrations.",
    tech: ["Java", "Flutter", "Firebase", "UI/UX"],
    icon: Smartphone,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Create smart automation systems using sensors, embedded systems, and connected hardware technologies.",
    tech: ["Arduino", "Sensors", "ESP32", "Automation"],
    icon: Wifi,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Analyze data, generate insights, visualize information, and understand modern data-driven decision systems.",
    tech: ["Python", "Pandas", "Visualization", "Analytics"],
    icon: BarChart3,
  },
];

function DomainsSection() {
  return (
    <Section id="domains">
      <Container stack>
        <SectionHeader
          label="Internship Domains"
          title="Explore Modern"
          highlight="Technology Domains"
          description="Choose from high-demand technology domains designed for practical exposure and real-world implementation experience."
        />

        <div className="ui-grid ui-grid--2">
          {domains.map((domain, index) => (
            <DomainCard key={domain.title} domain={domain} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DomainCard({ domain, index }) {
  const Icon = domain.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-40px" }}
      className="surface-card flex h-full min-w-0 flex-col p-6 sm:p-7 lg:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-teal-600 to-teal-400 text-white shadow-md shadow-teal-500/15">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
      </div>

      <h3 className="font-display text-balance text-xl font-semibold leading-tight text-ink sm:text-[1.375rem] lg:text-2xl">
        {domain.title}
      </h3>

      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted sm:text-base">
        {domain.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
        {domain.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-[var(--radius-pill)] border border-border bg-white px-2.5 py-1 text-xs font-medium text-teal-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default DomainsSection;
