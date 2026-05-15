import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import Button from "../../components/ui/Button";

function FinalCTASection() {
  return (
    <Section className="pb-24 sm:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 sm:p-12 lg:p-14 rounded-3xl glass-panel max-w-4xl mx-auto"
        >
          <p className="font-label uppercase text-xs text-teal-700 mb-4">
            Start Your Journey
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-ink">
            Ready To Join
            <span className="block text-gradient-luxury mt-1">
              Cosmolix Internship?
            </span>
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-5">
            Apply now for practical industry exposure, mentorship, project experience,
            certification benefits, and career growth.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            <Button to="/apply" variant="primary">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="https://chat.whatsapp.com/EAHPR4kmq7A5eu0xsK9kJF"
              variant="outline"
            >
              <MessageCircle className="w-4 h-4" />
              Join Community
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default FinalCTASection;
