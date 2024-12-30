import { HeroSection } from "@/components/HeroSection";
import { CoreConcept } from "@/components/CoreConcept";
import { KeyElements } from "@/components/KeyElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <CoreConcept />
      <KeyElements />
    </div>
  );
};

export default Index;