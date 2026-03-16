import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurModelSection from "@/components/OurModelSection";
import PortfolioSection from "@/components/PortfolioSection";
import PlatformCapabilitiesSection from "@/components/PlatformCapabilitiesSection";
import PartnersSection from "@/components/PartnersSection";
import AlignmentSection from "@/components/AlignmentSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <OurModelSection />
      <PortfolioSection />
      <PlatformCapabilitiesSection />
      <PartnersSection />
      <AlignmentSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
