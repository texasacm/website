'use client';

import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function PartnerWithUs() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('corporate@texasacm.org');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    return (
        <section className="bg-white py-16">
            <div className="mb-12 text-center">
                <h3 className="mb-4 text-2xl font-bold">Interested in Partnering with Us?</h3>
                <p className="mx-auto mb-8 max-w-2xl text-gray-700">
                    We&apos;d love to discuss how we can create a partnership that meets your
                    recruiting and branding goals while supporting our mission to prepare students
                    for successful careers.
                </p>
                <div className="group relative mb-4 flex justify-center">
                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </div>
                    <Button
                        className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 px-3 py-2 font-mono text-sm text-gray-800 transition-colors hover:bg-gray-200"
                        onClick={handleCopy}
                        role="button"
                    >
                        <span>corporate@texasacm.org</span>
                        {isCopied ? (
                            <Check className="h-4 w-4 text-green-500" />
                        ) : (
                            <Copy className="h-4 w-4" />
                        )}
                    </Button>
                </div>
                <Button size="lg" asChild>
                    <a href="mailto:corporate@texasacm.org">Contact Our Corporate Team</a>
                </Button>
            </div>
        </section>
    );
}
