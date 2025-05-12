import Image from 'next/image';

export default function CorporateEventsHero() {
  return (
    <section className="relative pb-24 pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-page-slides//paycom_fa24.jpeg"
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
            Corporate Events
          </h1>
          <p className="text-xl text-white/90">
            Facilitating networking between our passionate members and industry
            professionals
          </p>
        </div>
      </div>
    </section>
  );
}
