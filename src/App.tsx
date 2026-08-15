import { MotionConfig } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LoadingScreen />
      <main>
        <Hero />
        <BentoGrid />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
