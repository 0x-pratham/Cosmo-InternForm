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

        <ol className="mx-auto grid w-full max-w-3xl gap-4 sm:max-w-4xl sm:gap-5 lg:gap-6">
          {timeline.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 sm:gap-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-teal-600 to-amber-500 font-label text-sm font-bold text-white shadow-lg shadow-teal-500/20 sm:h-14 sm:w-14 sm:text-base">
                {item.step}
              </span>
              <div className="surface-card min-w-0 flex-1 p-5 sm:p-6">
                <h3 className="font-display text-balance text-lg font-semibold text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted sm:text-base">
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
