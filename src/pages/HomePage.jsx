import MainLayout from "../layouts/MainLayout";

import HeroSection from "../sections/home/HeroSection";
import AboutSection from "../sections/home/AboutSection";
import BenefitsSection from "../sections/home/BenefitsSection";
import DomainsSection from "../sections/home/DomainsSection";
import TimelineSection from "../sections/home/TimelineSection";
import FAQSection from "../sections/home/FAQSection";
import FinalCTASection from "../sections/home/FinalCTASection";

function HomePage() {
  return (
    <MainLayout>

      <HeroSection />

      <AboutSection />

      <BenefitsSection />

      <DomainsSection />

      <TimelineSection />

      <FAQSection />

     <FinalCTASection />

    </MainLayout>
  );
}

export default HomePage;