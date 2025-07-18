import { Users } from 'lucide-react';
import Image from 'next/image';

export default function SocialEventsHero() {
  return (
    <section className="relative pb-24 pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-page-slides/acm_thanksgiving_24.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-black/80 px-8 py-8 shadow-xl max-w-md text-center">
          <div className="flex flex-col items-center text-red-400">
            <Users size={48} className="mb-4" />
            <h1 className="text-4xl font-bold leading-tight text-white">
              Social Events
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}