import AboutSection from "@/our-components/homepage/AboutSection";
import FAQSection from "@/our-components/homepage/FAQSection";
import FeaturesSection from "@/our-components/homepage/FeaturesSection";
import BrandsSection from "@/our-components/homepage/BrandsSection";
import HeroSection from "@/our-components/homepage/HeroSection";
import FeatureDemoSection from "@/our-components/homepage/FeatureDemoSection";
import PricingSection from "@/our-components/homepage/PricingSection";
import CTASection from "@/our-components/homepage/CTASection";

export default function Home() {
  return (
  <>
    <HeroSection />
    <BrandsSection />
    <AboutSection />
    <FeatureDemoSection />
    <FeaturesSection />
    <PricingSection />
    <CTASection />
    <FAQSection />
  </>
  );
}
