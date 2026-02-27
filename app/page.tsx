import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";
import { AboutSection } from "@/components/sections/about-section";
import { AccentsSection } from "@/components/sections/accents-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { MethodSection } from "@/components/sections/method-section";
import { MythsSection } from "@/components/sections/myths-section";
import { CulturalContextSection } from "@/components/sections/cultural-context-section";
import { FormatSection } from "@/components/sections/format-section";
import { ForWhomSection } from "@/components/sections/for-whom-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { IdiomSection } from "@/components/sections/idiom-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <AccentsSection />
      <PhilosophySection />
      <MethodSection />
      <MythsSection />
      <CulturalContextSection />
      <FormatSection />
      <ForWhomSection />
      <TestimonialsSection />
      <IdiomSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
