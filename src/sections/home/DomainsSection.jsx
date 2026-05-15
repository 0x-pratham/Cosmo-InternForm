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

        <div className="grid-cards lg:grid-cols-2">
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
      whileHover={{ y: -4 }}
      className="h-full flex flex-col p-6 sm:p-7 rounded-2xl surface-card"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-500/15">
          <Icon className="w-5 h-5" />
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-tight">
        {domain.title}
      </h3>

      <p className="text-muted text-sm sm:text-base leading-relaxed mt-3 flex-1">
        {domain.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
        {domain.tech.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-white border border-border text-xs font-medium text-teal-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default DomainsSection;
