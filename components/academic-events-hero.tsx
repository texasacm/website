import Image from 'next/image';

export default function AcademicEventsHero() {
  return (
    <section className="relative pb-24 pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-page-slides/pancakes_and_professors_24.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Academic Events
          </h1>
          <p className="text-xl text-white/90">
            Engaging our members with enriching workshops and acadamia
            meet-and-greets
          </p>
        </div>
      </div>
    </section>
  );
}
