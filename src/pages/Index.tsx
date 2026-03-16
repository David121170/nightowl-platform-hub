import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import PlatformSection from "@/components/PlatformSection";
import OurModelSection from "@/components/OurModelSection";
import PlatformCapabilitiesSection from "@/components/PlatformCapabilitiesSection";
import PartnersSection from "@/components/PartnersSection";
import AlignmentSection from "@/components/AlignmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <PlatformSection />
      <OurModelSection />
      <PlatformCapabilitiesSection />
      <PartnersSection />
      <AlignmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
