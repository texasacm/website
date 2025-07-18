import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ResumeBook() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <h3 className="mb-6 text-center text-2xl font-bold">ACM Resume Book</h3>
            <p className="mb-4 text-gray-700">
                Submit your resume to be included in our resume book, which is shared with our
                corporate partners and sponsors. This is a great way to get your resume in front of
                recruiters from top tech companies.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-white p-8 shadow-sm">
                    <div className="space-y-4">
                        <div className="rounded-lg bg-gray-50 p-4">
                            <h5 className="mb-1 font-semibold">Submission Recommendations</h5>
                            <ul className="list-disc space-y-1 pl-5 text-sm">
                                <li>PDF format only</li>
                                <li>Maximum 1 page</li>
                                <li>Updated within the last 6 months</li>
                            </ul>
                        </div>
                        <Button className="w-full">Submit Your Resume</Button>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-8 shadow-sm">
                    <h4 className="mb-4 text-xl font-semibold">Resume Resources</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-primary hover:underline"
                        >
                            Resume Template
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-primary hover:underline"
                        >
                            Resume Writing Guide
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-primary hover:underline"
                        >
                            Sample Resumes
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-primary hover:underline"
                        >
                            Technical Skills Checklist
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
