import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";

function FinalCTASection() {
  return (
    <Section className="pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel mx-auto w-full max-w-3xl px-6 py-9 text-center sm:max-w-4xl sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          <p className="mb-3 font-label text-xs uppercase tracking-[0.14em] text-teal-700 sm:mb-4">
            Start Your Journey
          </p>

          <h2 className="font-display text-balance text-[clamp(1.75rem,3.5vw+0.75rem,3rem)] font-semibold leading-[1.15] text-ink">
            Ready To Join
            <span className="mt-1.5 block text-gradient-luxury sm:mt-2">
              Cosmolix Internship?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            Apply now for practical industry exposure, mentorship, project experience, certification
            benefits, and career growth.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button to="/apply" variant="primary" className="min-h-[3rem] justify-center sm:min-h-0">
              Apply Now
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Button>
            <Button
              href="https://chat.whatsapp.com/JtK1a5O0ILG7E0olsYkbvv"
              variant="outline"
              className="min-h-[3rem] justify-center sm:min-h-0"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              Join Community
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default FinalCTASection;
