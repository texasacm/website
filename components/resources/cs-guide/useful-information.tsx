import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CollapsibleInfo = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <Collapsible className="mb-6 overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <CollapsibleTrigger className="group flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <ChevronDown className="h-5 w-5 text-gray-600 transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
                <div className="bg-white px-6 py-4">{children}</div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default function UsefulInformation() {
    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">Useful Information</h1>
            </div>
            <CollapsibleInfo title="Prospective Students">
                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            FRI (Freshman Research Initiative)
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>Hands-on experience in a research field of your choosing</li>
                            <li>
                                CS-related FRI streams include Robotics Quantum Computing, and Big
                                Data in Biology
                            </li>
                            <li>
                                Year-long program starting in Freshman year Spring to sophomore year
                                Fall
                            </li>
                            <li>
                                Apply the Summer before first semester{' '}
                                <Link
                                    href={'https://fri.cns.utexas.edu/students/apply-fall'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            CS Honors Programs
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                UTCS offers two types of honors programs: CSB and Turing Scholars.
                            </li>
                            <li>
                                CSB, or Computer Science + Business, is a dual major program with
                                honors status.
                            </li>
                            <li>
                                Turing Scholars is a traditional CS Honors program with honors
                                versions of core courses.
                            </li>
                            <li>
                                More info on CSB{' '}
                                <Link
                                    href={'https://csb.utexas.edu/'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>{' '}
                                and more info on Turing Scholars{' '}
                                <Link
                                    href={'https://www.cs.utexas.edu/turing-scholars'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            X+CS Dual Degree Programs
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                Aside from CSB, UTCS provides specialized support for certain dual
                                majors
                            </li>
                            <li>
                                If you&apos;re at all interested in something outside of CS, do
                                check them out
                            </li>
                            <li>
                                More info on X+CS programs can be found{' '}
                                <Link
                                    href={
                                        'https://www.cs.utexas.edu/undergraduate-program/x-cs-degree-program'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            First time in Austin?
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                Austin is a fast-growing tech hub with a variety of big tech
                                companies and small startups
                            </li>
                            <li>
                                Because of that, Austin has a lot of job opportunities across the CS
                                discipline
                            </li>
                            <li>
                                There&apos;s lots of amazing food and live music to experience here!
                            </li>
                        </ul>
                    </div>
                </div>
            </CollapsibleInfo>

            <CollapsibleInfo title="First Year Good-to-Knows">
                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Degree Plan Resources
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>Read your degree plan fully to know what to expect</li>
                            <li>
                                Meet with your academic advisor if you have any questions or
                                concerns
                            </li>
                            <li>
                                Access UTCS degree plans{' '}
                                <Link
                                    href={
                                        'https://www.cs.utexas.edu/undergraduate-program/academics/curriculum/degree-plans'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Registration Tips
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                In your first year, you&apos;ll have reserved spots for core CS
                                classes
                            </li>
                            <li>Make sure to meet with your advisor if you have any questions</li>
                            <li>
                                It&apos;s common to not get all of the classes you want. Plan ahead
                                with backup schedules
                            </li>
                            <li>
                                For registration planning, we highly recommend the{' '}
                                <Link
                                    href={
                                        'https://chromewebstore.google.com/detail/ut-registration-plus/hboadpjkoaieogjimneceaahlppnipaa?hl=en'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    UT Registration Plus
                                </Link>{' '}
                                chrome extension
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">General UT Tips</h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                Attend office hours - professors and TAs want to help you succeed!
                            </li>
                            <li>Form study groups early in challenging classes</li>
                            <li>
                                College is HARD. Seek help if you are feeling burnt out at{' '}
                                <Link
                                    href={'https://healthyhorns.utexas.edu/cmhc/'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    UT&apos;s CMHC
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </CollapsibleInfo>

            <CollapsibleInfo title="UTCS Good-to-Knows">
                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Department Job Opportunities
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                <strong>Teaching Assistant (TA):</strong> Help with grading, office
                                hours, and exam proctoring
                                <ul className="mt-2 list-[circle] pl-6">
                                    <li>10-15 hrs/week</li>
                                    <li>
                                        Applications open near the end of each semester via email to
                                        your UTCS email address
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>CS Pod Mentor:</strong> Run weekly CS Pods for first-year
                                students
                                <ul className="mt-2 list-[circle] pl-6">
                                    <li>4-5 hrs/week</li>
                                    <li>
                                        Applications typically open in the spring semester{' '}
                                        <Link
                                            href={
                                                'https://www.cs.utexas.edu/undergraduate-program/student-support/first-year-connections/cs-pods'
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 hover:underline"
                                        >
                                            here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>CS Ambassador:</strong> Host tours of the GDC with students
                                and their families
                            </li>
                            <ul className="mt-2 list-[circle] pl-6">
                                <li>1-4 hrs/week</li>
                                <li>
                                    Applications typically open in the spring semester via email to
                                    your UTCS email address
                                </li>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Research Opportunities
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                Every semester, CS professors offer CS 370 electives as research
                                opportunities
                            </li>
                            <li>
                                Work directly with faculty on their research projects in a wide
                                range of fields
                            </li>
                            <li>
                                UTCS encompasses plenty of research labs. Find a list of them{' '}
                                <Link
                                    href={
                                        'https://www.cs.utexas.edu/research/artificial-intelligence'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                            <li>
                                To work in a lab, get to know the professor(s) and reach out to them
                                directly
                            </li>
                        </ul>
                    </div>
                </div>
            </CollapsibleInfo>

            <CollapsibleInfo title="Upperclassmen Good to Knows">
                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Upper Division Course Selection
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>CS majors are required to take upper division courses.</li>
                            <li>
                                Popular courses fill quickly - expect to take them later in your
                                academic career
                            </li>
                            <li>
                                <Link
                                    href={
                                        'https://utdirect.utexas.edu/apps/student/coursedocs/nlogon/'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    Past syllabi
                                </Link>{' '}
                                and{' '}
                                <Link
                                    href={
                                        'https://reports.utexas.edu/spotlight-data/ut-course-grade-distributions'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    grading distributions{' '}
                                </Link>{' '}
                                are available for upper div courses
                            </li>
                            <li>
                                <strong>ACM&apos;s Pancakes with Professors</strong>: An even where
                                you can learn more about upper division courses directly from their
                                professors
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            Job Search Advice
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>Start early - it&apos;s tough out there!</li>
                            <li>Attend career fairs, info sessions, and networking events</li>
                            <li>Practice coding interviews regularly on platforms like LeetCode</li>
                            <li>Consider both large tech companies and local Austin startups</li>
                            <li>
                                Don&apos;t neglect soft skills - communication is crucial in tech
                                roles
                            </li>
                        </ul>
                    </div>
                </div>
            </CollapsibleInfo>

            <CollapsibleInfo title="Graduate School Good to Knows">
                <div className="space-y-4">
                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            UT Austin Programs
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                <strong>Integrated BS/MS Program:</strong> Complete both a Bachelors
                                and Masters in CS in 5 years total
                            </li>
                            <li>
                                Apply during end of fall semester junior year with two letters of
                                recommendations
                            </li>
                            <li>
                                More info and a link to apply can be found{' '}
                                <Link
                                    href={
                                        'https://www.cs.utexas.edu/undergraduate-program/academics/curriculum/5-year-cs-bsms'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-medium text-gray-800">
                            UT Online Master&apos;s Programs
                        </h3>
                        <ul className="list-disc space-y-1 pl-6 text-gray-700">
                            <li>
                                UT offers online MS in Computer Science and AI for working
                                professionals
                            </li>
                            <li>Same curriculum and faculty as on-campus program</li>
                            <li>Flexible scheduling for those already in the workforce</li>
                            <li>
                                More info and a link to apply can be found{' '}
                                <Link
                                    href={'https://cdso.utexas.edu/'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline"
                                >
                                    here
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </CollapsibleInfo>
        </div>
    );
}
