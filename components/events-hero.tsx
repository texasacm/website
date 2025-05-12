
import Header from "@/components/header"

export default function EventsHero() {
  return (
    <section className="relative pt-20 pb-12 bg-primary">
      <Header />
      <div className="container px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">All About ACM Events</h1>
          <p className="text-xl text-white/90">Get a sneak peak at what ACM has in store for its members</p>
        </div>
      </div>
    </section>
  )
}

