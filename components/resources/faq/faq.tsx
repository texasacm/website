'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

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
        <section className="bg-gray-50">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4 rounded-xl bg-white p-6 shadow-md">
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="rounded-lg border-b shadow-sm drop-shadow last:border-b-0"
        >
            <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between p-4 text-left">
                    <h4 className="text-lg font-semibold">{question}</h4>
                    <ChevronDown
                        className={`transform transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        size={20}
                    />
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
                <p className="text-gray-700">{answer}</p>
            </CollapsibleContent>
        </Collapsible>
    );
}
