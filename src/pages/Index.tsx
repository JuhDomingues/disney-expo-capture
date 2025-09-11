import { HeroSection } from "@/components/HeroSection";
import { FormSection } from "@/components/FormSection";
import { RegulamentSection } from "@/components/RegulamentSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="form-section">
        <FormSection />
      </div>
      <RegulamentSection />
      <Footer />
    </div>
  );
};

export default Index;
