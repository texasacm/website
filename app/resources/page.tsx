import Footer from "@/components/footer"
import ResourcesHero from "@/components/resources/resources-hero"
import ResourcesList from "@/components/resources/resources-list"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourcesList />
      <Footer />
    </main>
  )
}

