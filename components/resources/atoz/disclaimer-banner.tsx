export default function DisclaimerBanner() {
    return (
        <div className="border-l-4 border-yellow-500 bg-yellow-100 p-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <div className="py-1">
                        <svg
                            className="h-6 w-6 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-yellow-700">
                            It&apos;s possible some content may be outdated. Please check with an officer or online
                            if you are unsure about information presented here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
