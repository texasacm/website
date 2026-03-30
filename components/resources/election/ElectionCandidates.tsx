import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export interface ElectionCandidate {
    name: string;
    image: string;
    platforms: string[];
    imageWidth?: number;
    imageHeight?: number;
}

export interface ElectionCandidateSection {
    title: string;
    candidates: ElectionCandidate[];
}

export interface ElectionCandidatesData {
    sections: ElectionCandidateSection[];
}

interface ElectionCandidatesProps {
    data: ElectionCandidatesData;
}

export default function ElectionCandidates({ data }: ElectionCandidatesProps) {
    return (
        <section className="px-6 py-12 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-16">
                {data.sections.map((section) => (
                    <div key={section.title}>
                        <h1 className="mb-8 text-center text-4xl font-bold">{section.title}</h1>
                        <div className="space-y-8">
                            {section.candidates.map((candidate) => (
                                <div
                                    key={`${section.title}-${candidate.name}`}
                                    className="grid items-start gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
                                >
                                    <Card className="self-start overflow-hidden border-0 bg-transparent p-0 shadow-none">
                                        <div className="flex justify-center">
                                            <Image
                                                src={candidate.image}
                                                alt={`Campaign photo for ${candidate.name}`}
                                                width={candidate.imageWidth ?? 1000}
                                                height={candidate.imageHeight ?? 800}
                                                sizes="(min-width: 1024px) 38rem, (min-width: 768px) 50vw, 100vw"
                                                className="h-auto max-h-[560px] w-auto max-w-full rounded-2xl object-contain shadow-lg"
                                            />
                                        </div>
                                    </Card>
                                    <Card className="self-start">
                                        <CardHeader>
                                            <CardTitle>{candidate.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-md space-y-4 text-gray-700">
                                                {candidate.platforms.map((platform) => (
                                                    <p key={platform}>{platform}</p>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
