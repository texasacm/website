import { Check } from 'lucide-react';

export default function WhyPartnerWithUs() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-3xl font-bold">Why Partner With Us?</h2>
                <p className="mb-6 text-lg text-gray-700">
                    Texas ACM is the largest computer science student organization at UT Austin,
                    with over 500 active members. Our members are passionate, talented students who
                    are eager to make an impact.
                </p>
                <p className="mb-6 text-lg text-gray-700">
                    Texas ACM&apos;s events and initiatives are fully funded by our amazing
                    corporate partners.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>
                            Access to top CS talent from one of the nation&apos;s leading programs
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Direct recruiting opportunities through events and resume book</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>Brand visibility to a large, engaged student audience</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
