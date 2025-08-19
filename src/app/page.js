import AboutSection from "@/our-components/homepage/AboutSection";
import FAQSection from "@/our-components/homepage/FAQSection";
import FeaturesSection from "@/our-components/homepage/FeaturesSection";
import BrandsSection from "@/our-components/homepage/BrandsSection";
import HeroSection from "@/our-components/homepage/HeroSection";
import FeatureDemoSection from "@/our-components/homepage/FeatureDemoSection";
import PricingSection from "@/our-components/homepage/PricingSection";
import CTASection from "@/our-components/homepage/CTASection";
import TestimonialsSection from "@/our-components/homepage/TestimonialsSection";
import StatsSection from "@/our-components/homepage/StatsSection";

export default function Home() {
  return (
  <>
    <HeroSection />
    <AboutSection />
    <FeatureDemoSection />
    <StatsSection />
    <PricingSection />
    <FeaturesSection />
    <BrandsSection />
    <TestimonialsSection />
    <CTASection />
    <FAQSection />
  </>
  );
}
