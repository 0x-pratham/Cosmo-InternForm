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

        <div className="mx-auto w-full max-w-3xl space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`surface-card overflow-hidden rounded-[var(--radius-lg)] transition-[box-shadow,border-color] duration-200 ${
                active === index ? "ring-1 ring-teal-200/70 shadow-md" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-200 hover:bg-teal-50/35 sm:p-6"
                aria-expanded={active === index}
              >
                <span className="pr-2 text-base font-semibold leading-snug text-ink text-pretty sm:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: active === index ? 180 : 0 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-pill)] border border-teal-100 bg-teal-50 text-teal-700 transition-[background-color,border-color] duration-200"
                >
                  <ChevronDown className="h-4 w-4" aria-hidden />
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
                    <p className="border-t border-border px-4 pb-4 pt-4 text-pretty text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
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
