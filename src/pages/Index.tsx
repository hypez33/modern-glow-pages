import HeroSection from "@/components/HeroSection";
import TrustBarSection from "@/components/TrustBarSection";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import PhotoBreakSection from "@/components/PhotoBreakSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background neu-page pb-20 md:pb-0">
      <HeroSection />
      <ClientLogoSlider />
      <ProblemSection />
      <BenefitsSection />
      <ProcessSection />
      <PhotoBreakSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <TrustBarSection />
      <FooterSection />
      <StickyMobileCTA />
      <BackToTopButton />
    </div>
  );
};

export default Index;
