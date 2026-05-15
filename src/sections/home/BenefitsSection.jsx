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
                className="surface-card h-full min-w-0 p-5 sm:p-6 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-50 to-amber-50 text-teal-700 border border-teal-100 flex items-center justify-center mb-4 shrink-0">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold leading-snug text-ink">
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
          className="p-8 sm:p-10 lg:p-12 rounded-3xl panel-accent text-center"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
            Stipend Opportunities
            <span className="block text-gradient-gold mt-2 text-2xl sm:text-3xl">
              Up To ₹15,000
            </span>
          </h3>
          <p className="text-muted mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Top-performing interns may receive stipends based on project contribution,
            consistency, teamwork, innovation, and technical performance.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

export default BenefitsSection;
