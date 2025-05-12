import Header from '@/components/header';

export default function CalendarHero() {
  return (
    <section className="relative bg-primary pb-12 pt-20">
      <Header />
      <div className="container px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Event Calendar</h1>
          <p className="text-xl text-white/90">
            Stay up to date with all of our upcoming events and activities
          </p>
        </div>
      </div>
    </section>
  );
}
