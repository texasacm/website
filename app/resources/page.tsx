import ResourcesHero from "@/components/resources-hero"
import ResourcesList from "@/components/resources-list"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <ResourcesList />
      <Footer />
    </main>
  )
}

