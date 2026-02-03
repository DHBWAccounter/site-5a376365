import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoSection } from "@/components/logo-section";
import { MissionSection } from "@/components/mission-section";
import { AboutJoinSection } from "@/components/about-join-section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSection />
      <MissionSection />
      <AboutJoinSection />
      <Footer />
    </>
  );
}
