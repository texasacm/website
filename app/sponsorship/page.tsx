import SponsorshipHero from "@/components/sponsorship-hero"
import SponsorshipPackages from "@/components/sponsorship-packages"
import CurrentSponsors from "@/components/current-sponsors"
import Footer from "@/components/footer"

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen">
      <SponsorshipHero />
      <SponsorshipPackages />
      <CurrentSponsors />
      <Footer />
    </main>
  )
}

