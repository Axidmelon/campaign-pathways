import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <FeaturedCampaigns />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
