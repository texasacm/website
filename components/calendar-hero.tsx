import Header from "@/components/header"

export default function CalendarHero() {
  return (
    <section className="relative pt-20 pb-12 bg-primary">
      <Header />
      <div className="container px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Calendar</h1>
          <p className="text-xl text-white/90">Stay up to date with all of our upcoming events and activities</p>
        </div>
      </div>
    </section>
  )
}

