import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PricingSection />
      <EnterpriseSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Index;
