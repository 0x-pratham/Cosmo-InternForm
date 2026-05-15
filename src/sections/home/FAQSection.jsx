import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const faqs = [
  {
    question: "Is the internship project based?",
    answer:
      "Yes. The internship is completely project-based and focuses on practical implementation instead of traditional theory sessions.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes. Students receive internship certificates, offer letters, recommendation letters, and completion letters.",
  },
  {
    question: "Are there stipend opportunities?",
    answer:
      "Yes. Top-performing interns may receive stipends of up to ₹15,000 based on performance and contribution.",
  },
  {
    question: "Will sessions be conducted by industry experts?",
    answer:
      "Yes. Sessions are conducted by experienced industry professionals and international experts.",
  },
  {
    question: "Is the internship online or offline?",
    answer:
      "The internship may include online or hybrid sessions depending on the selected domain and program structure.",
  },
];

function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <Section id="faq">
      <Container stack>
        <SectionHeader
          label="FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />

        <div className="w-full max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl surface-card overflow-hidden ${
                active === index ? "ring-1 ring-teal-200/60" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                aria-expanded={active === index}
              >
                <span className="text-base sm:text-lg font-semibold text-ink pr-2">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: active === index ? 180 : 0 }}
                  className="shrink-0 w-9 h-9 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted text-sm sm:text-base leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FAQSection;
