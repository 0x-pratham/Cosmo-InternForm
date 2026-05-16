import { motion } from "framer-motion";
import {
  Mail,
  BadgeCheck,
  Award,
  Handshake,
  FileText,
  Gift,
  Trophy,
  DollarSign,
} from "lucide-react";
import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const benefits = [
  { title: "Official Offer Letter", icon: Mail },
  { title: "Internship Completion Certificate", icon: BadgeCheck },
  { title: "Performance Grade Certificate", icon: Award },
  { title: "Letter of Recommendation", icon: Handshake },
  { title: "Internship Completion Letter", icon: FileText },
  { title: "Exclusive Goodies", icon: Gift },
  { title: "Awards For Top Performers", icon: Trophy },
  { title: "Stipend Opportunities", icon: DollarSign },
];

function BenefitsSection() {
  return (
    <Section id="benefits" variant="alt">
      <Container stack>
        <SectionHeader
          label="Internship Benefits"
          title="What You"
          highlight="Will Receive"
        />

        <div className="ui-grid ui-grid--4">
          {benefits.map((item) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="surface-card flex h-full min-w-0 flex-col p-5 sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-teal-100 bg-gradient-to-br from-teal-50 to-amber-50 text-teal-700">
                  <ItemIcon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold leading-snug text-ink sm:text-[0.9375rem] text-pretty">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-accent rounded-[var(--radius-xl)] p-7 text-center sm:p-10 lg:p-12"
        >
          <h3 className="font-display text-[clamp(1.5rem,3vw+0.5rem,2.25rem)] font-semibold leading-snug text-ink text-balance">
            Stipend Opportunities
            <span className="mt-2 block text-gradient-gold text-[clamp(1.25rem,2.5vw+0.5rem,1.875rem)] sm:mt-3">
              Up To ₹15,000
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
            Top-performing interns may receive stipends based on project contribution,
            consistency, teamwork, innovation, and technical performance.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

export default BenefitsSection;
