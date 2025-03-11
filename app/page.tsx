import Hero from "@/components/hero"
import FeaturedEvents from "@/components/featured-events"
import JoinSection from "@/components/join-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedEvents />
      <JoinSection />
      <Footer />
    </main>
  )
}

