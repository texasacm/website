// app/events/page.tsx
import CSWeekHero from '@/components/cs-week/cs-week-hero';
import CSWeekInfo from '@/components/cs-week/cs-week-info';
import CSWeekSchedule from '@/components/cs-week/cs-week-schedule';
import CSWeekSponsors from '@/components/cs-week/cs-week-prize-providers';
import Footer from '@/components/footer';
import Image from 'next/image';

const grassSprites = [
    { src: '/cs-week/assets/grass1.png', width: 125, height: 159, size: '3.75rem' },
    { src: '/cs-week/assets/grass2.png', width: 137, height: 163, size: '4rem' },
    { src: '/cs-week/assets/grass3.png', width: 228, height: 180, size: '4.5rem' },
] as const;

const grassDecorations = Array.from({ length: 42 }, (_, index) => {
    const sprite = grassSprites[index % grassSprites.length];
    const offsets = ['0rem', '0.2rem', '0.4rem', '0.1rem', '0.35rem', '0.15rem'] as const;
    const rotations = [-9, 6, -4, 8, -7, 5, -5, 7, -3, 4] as const;

    return {
        ...sprite,
        left: `${1 + index * 2.4}%`,
        bottom: offsets[index % offsets.length],
        rotate: rotations[index % rotations.length],
    };
});

export default async function CSGuidePage() {
    return (
        <main className="min-h-screen overflow-x-clip">
            <CSWeekHero />
            <CSWeekInfo />
            <div className="pointer-events-none relative z-10 h-20 w-full overflow-hidden bg-[#7A8F56] sm:h-24 md:h-28">
                {grassDecorations.map((grass, index) => (
                    <Image
                        key={`${grass.src}-${index}`}
                        src={grass.src}
                        alt=""
                        width={grass.width}
                        height={grass.height}
                        aria-hidden="true"
                        className="absolute h-auto"
                        style={{
                            left: grass.left,
                            bottom: grass.bottom,
                            width: `clamp(2.75rem, 4vw, ${grass.size})`,
                            transform: `translateX(-50%) rotate(${grass.rotate}deg)`,
                        }}
                    />
                ))}
            </div>
            <div className="relative -mt-1 bg-[#7A8F56]">
                <div className="absolute inset-x-0 top-0 h-4 bg-[#7A8F56]" />
                <div className="relative">
                    <CSWeekSchedule />
                </div>
            </div>
            <CSWeekSponsors />
            <Footer />
        </main>
    );
}
