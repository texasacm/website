import Header from '@/components/header';

export default function FAQHero() {
  return (
    <section className="relative bg-primary pb-12 pt-20">
      <Header />
      <div className="container px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-xl text-white/90">
            Get your commonly answered questions about ACM and UTCS answered
            here!
          </p>
        </div>
      </div>
    </section>
  );
}
