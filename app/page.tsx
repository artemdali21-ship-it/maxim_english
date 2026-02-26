import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBarSection } from "@/components/sections/trust-bar-section";
import { AboutSection } from "@/components/sections/about-section";
import { LibrarySection } from "@/components/sections/library-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { AccentsSection } from "@/components/sections/accents-section";
import { MethodSection } from "@/components/sections/method-section";
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
      <LibrarySection />
      <AccentsSection />
      <PhilosophySection />
      <MethodSection />
      <FormatSection />
      <ForWhomSection />
      <TestimonialsSection />
      <IdiomSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
