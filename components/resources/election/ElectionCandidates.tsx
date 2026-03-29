import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export interface ElectionCandidate {
    name: string;
    image: string;
    platforms: string[];
    alt?: string;
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
                                    className="grid items-stretch gap-8 md:grid-cols-2"
                                >
                                    <Card className="overflow-hidden text-center">
                                        <div className="relative aspect-square w-full">
                                            <Image
                                                src={candidate.image}
                                                alt={
                                                    candidate.alt ??
                                                    `Campaign photo for ${candidate.name}`
                                                }
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </Card>
                                    <Card className="h-full">
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
