import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenueSection from "@/components/VenueSection";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import SponsorSection from "@/components/SponsorSection";
import OrganisersSection from "@/components/OrganisersSection";
import Footer from "@/components/Footer";
import { useScrollFade } from "@/hooks/useScrollFade";

const Index = () => {
  useScrollFade();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VenueSection />
      <SpeakersSection />
      <AgendaSection />
      <SponsorSection />
      <OrganisersSection />
      <Footer />
    </div>
  );
};

export default Index;
