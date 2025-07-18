import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileUser } from 'lucide-react';
import Link from 'next/link';

export default function ResumeBook() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-row items-center justify-center gap-2">
                <h3 className="text-center text-2xl font-bold">ACM Resume Book</h3>
            </div>
            <p className="mb-4 text-center text-gray-700">
                Submit your resume to our resume book, which is shared with our corporate partners.
                This is a great way to get your resume in front of recruiters from top tech
                companies.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="shadow-md">
                    <CardContent className="p-8">
                        <div className="space-y-6">
                            <div className="mb-4 rounded-lg bg-gray-100 p-4">
                                <h5 className="mb-1 font-semibold">Submission Recommendations</h5>
                                <ul className="list-disc space-y-1 pl-5 text-sm">
                                    <li>Use the UTCS resume template</li>
                                    <li>Maximum 1 page</li>
                                    <li>Updated within the last 6 months</li>
                                </ul>
                            </div>
                            <Link
                                href="https://apps.cs.utexas.edu/resume/index.scgi"
                                target="_blank"
                                rel="noopener noreferrer"
                                passHref
                            >
                                <Button className="w-full">
                                    <span className="flex items-center gap-2">
                                        Submit Your Resume
                                        <ExternalLink size={16} />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Resume Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="https://careerservices.cns.utexas.edu/resources/resumes/templates"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                <span className="flex items-center gap-2">
                                    CNS Resume Templates
                                    <ExternalLink size={16} />
                                </span>
                            </Link>
                            <Link
                                href="https://careerservices.cns.utexas.edu/resources/resumes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                <span className="flex items-center gap-2">
                                    CNS Resume Tips
                                    <ExternalLink size={16} />
                                </span>
                            </Link>
                            <Link
                                href="https://utexas.12twenty.com/appointments"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                <span className="flex items-center gap-2">
                                    CNS Resume Review
                                    <ExternalLink size={16} />
                                </span>
                            </Link>
                            <Link
                                href="https://discord.gg/TYcVpYVefV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                <span className="flex items-center gap-2">
                                    Ask for Resume Tips on Discord
                                    <ExternalLink size={16} />
                                </span>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
