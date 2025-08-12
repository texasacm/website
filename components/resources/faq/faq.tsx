'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const faqItems = [
    {
        question: 'What is ACM/Texas ACM?',
        answer: "The Association for Computing Machinery (ACM) is the world's largest scientific computing organization. Texas ACM is the student chapter at UT Austin, focused on promoting interest in computer science and providing resources for CS students.",
    },
    {
        question: 'Do I need to be a CS major to join?',
        answer: 'No! While we primarily serve CS students, we welcome members from all majors who are interested in computing and technology.',
    },
    {
        question: 'Are there membership dues?',
        answer: 'Membership is completely free! There are no dues or fees to join Texas ACM.',
    },
    {
        question: 'How can I get more involved?',
        answer: 'The best way to get more involved is to attend our events! From there, you can ask an officer about leading an initiative and apply for officer positions when they open up.',
    },
    {
        question: 'Does ACM help with internships and jobs?',
        answer: 'Yes! We host company info sessions, resume workshops, and networking events specifically designed to help members secure internships and full-time positions. We also have a resume book that companies can access to find candidates. On top of that, leading an initiative or being an officer looks great on your resume and can help you build valuable skills.',
    },
    {
        question: 'Where do I apply to be an officer?',
        answer: 'Officer applications for Junior positions open at the beginning of each fall semester. In the Spring, we hold elections for the Executive Board. After elections, applications for Senior and internal officer positions open near the end of the Spring semester.',
    },
    {
        question: 'How do ACM elections work?',
        answer: 'ACM elections use ranked-choice voting. To vote, you must have attended at least 3 ACM events in the same academic year. For more specific questions, reach out to the executive team.',
    },
];

export default function FAQ() {
    return (
        <section>
            <div className="mx-auto max-w-4xl p-6">
                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <Collapsible className="mb-6 overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <CollapsibleTrigger className="group flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100">
                <h4 className="text-xl font-semibold text-gray-800">{question}</h4>
                <ChevronDown className="h-5 w-5 text-gray-600 transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
                <div className="bg-white px-6 py-4">
                    <p className="text-gray-700">{answer}</p>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
