import AboutHero from "@/components/about-hero"
import WhatWeDo from "@/components/what-we-do"
import Footer from "@/components/footer"
import OfficerHero from "@/components/officer-hero"
import OfficerTeam from "@/components/officer-team"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <WhatWeDo />
      <OfficerHero />
      <OfficerTeam />
      <Footer />
    </main>
  )
}

