import { Header } from "@/components/charity/header"
import { HeroSection } from "@/components/charity/hero-section"
import { AboutSection } from "@/components/charity/about-section"
import { CausesSection } from "@/components/charity/causes-section"
import { ServicesSection } from "@/components/charity/services-section"
import { DonationCTASection } from "@/components/charity/donation-cta-section"
import { TeamSection } from "@/components/charity/team-section"
import { TestimonialsSection } from "@/components/charity/testimonials-section"
import { Footer } from "@/components/charity/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <CausesSection />
      <ServicesSection />
      <DonationCTASection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
 