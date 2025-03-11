import Navbar from "@/components/navbar"

export default function SponsorshipHero() {
  return (
    <section className="relative pt-20 pb-12 bg-primary">
      <Navbar />
      <div className="container px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Corporate Partnerships</h1>
          <p className="text-xl text-white/90">
            Partner with Texas ACM to connect with top computer science talent at UT Austin
          </p>
        </div>
      </div>
    </section>
  )
}

