import Header from "@/components/header"

export default function OfficerHero() {
  return (
    <section className="relative pt-20 pb-12 bg-primary">
      <Header />
      <div className="container px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Officer Team</h1>
          <p className="text-xl text-white/90">Meet the dedicated students who lead Texas ACM</p>
        </div>
      </div>
    </section>
  )
}

