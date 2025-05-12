import Footer from "@/components/footer"
import FAQ from "@/components/resources/faq/faq"
import FAQHero from "@/components/resources/faq/faq-hero"
import { FaQ } from "react-icons/fa6"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQHero />
      <FAQ />
      <Footer />
    </main>
  )
}

