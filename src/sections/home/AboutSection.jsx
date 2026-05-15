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

        <div className="grid-cards sm:grid-cols-2 lg:grid-cols-3">
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4 }}
      className="h-full p-6 sm:p-7 rounded-2xl surface-card"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center text-white mb-5 shadow-md shadow-teal-500/15">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-muted text-sm sm:text-base leading-relaxed">{description}</p>
    </motion.article>
  );
}

export default AboutSection;
