import { motion } from "framer-motion";
import {
  Layers,
  Users,
  Globe,
  TrendingUp,
  Network,
  Building2,
} from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const features = [
  {
    icon: Layers,
    title: "Project Based Learning",
    description:
      "Work on practical real-world projects instead of traditional theory-only sessions.",
  },
  {
    icon: Users,
    title: "Industry Expert Sessions",
    description:
      "Guidance from experienced professionals across multiple technical domains.",
  },
  {
    icon: Globe,
    title: "International Experts",
    description:
      "Bi-weekly sessions from international industry experts for global exposure.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Enhance technical skills, resume quality, teamwork, and professional growth.",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    description:
      "Collaborate with students, mentors, developers, and technical communities.",
  },
  {
    icon: Building2,
    title: "Real Industry Exposure",
    description:
      "Understand modern workflows, technologies, and professional teamwork culture.",
  },
];

function AboutSection() {
  return (
    <Section id="about">
      <Container stack>
        <SectionHeader
          label="About Program"
          title="Practical Industry"
          highlight="Focused Internship"
          description="The Cosmolix Industrial Internship Program 2026 provides students with real-world technical exposure through project-based implementation, industry mentorship, and practical collaboration."
        />

        <div className="ui-grid ui-grid--3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="surface-card h-full min-w-0 p-6 sm:p-7 lg:p-8"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-teal-600 to-teal-400 text-white">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-display mb-2 text-lg font-semibold leading-snug text-ink text-balance sm:text-xl">
        {title}
      </h3>
      <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">{description}</p>
    </motion.article>
  );
}

export default AboutSection;


