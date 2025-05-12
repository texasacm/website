import Header from '@/components/header';

export default function ResumeBookHero() {
  return (
    <section className="relative bg-primary pb-12 pt-20">
      <Header />
      <div className="container px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Resume Book</h1>
          <p className="text-xl text-white/90">
            Add your resume to our Resume Book that our corporate partners can
            access.
          </p>
        </div>
      </div>
    </section>
  );
}
