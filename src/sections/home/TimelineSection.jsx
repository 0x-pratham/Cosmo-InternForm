import { motion } from "framer-motion";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const timeline = [
  {
    step: "01",
    title: "Application Submission",
    description:
      "Complete the internship application form with your academic and domain details.",
  },
  {
    step: "02",
    title: "Application Review",
    description:
      "Our team reviews applications based on interest, technical background, and domain preference.",
  },
  {
    step: "03",
    title: "Selection Confirmation",
    description:
      "Selected students receive confirmation and onboarding details via email or WhatsApp.",
  },
  {
    step: "04",
    title: "Internship Begins",
    description:
      "Project-based sessions begin under industry experts and international mentors.",
  },
];

function TimelineSection() {
  return (
    <Section variant="muted">
      <Container stack>
        <SectionHeader
          label="Internship Process"
          title="Your Journey"
          highlight="Starts Here"
        />

        <ol className="grid gap-4 sm:gap-5 max-w-3xl mx-auto w-full">
          {timeline.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 sm:gap-5 items-start"
            >
              <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-teal-600 to-amber-500 flex items-center justify-center text-white font-label font-bold text-sm shadow-lg shadow-teal-500/20">
                {item.step}
              </span>
              <div className="flex-1 min-w-0 p-5 sm:p-6 rounded-2xl surface-card">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export default TimelineSection;
