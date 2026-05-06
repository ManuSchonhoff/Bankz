import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BrandPillars from "@/components/BrandPillars";
import SecuritySection from "@/components/SecuritySection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PrivateExperience from "@/components/PrivateExperience";
import LocationSection from "@/components/LocationSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BrandPillars />
        <SecuritySection />
        <ServicesSection />
        <ExperienceTimeline />
        <PrivateExperience />
        <LocationSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
