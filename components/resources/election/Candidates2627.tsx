import ElectionCandidates from '@/components/resources/election/ElectionCandidates';
import candidates2627 from '@/lib/elections/Candidates2627';

export default function Candidates2627() {
    return (
        <>
            <section className="px-6 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="border-l-4 border-green-500 bg-green-100 p-6">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="ml-3">
                                <p className="text-green-700">
                                    Voting for the Texas ACM executive board election opens on April
                                    3 at 8:00 AM CST and closes at 6:00 PM CST on the same day. To
                                    be eligible to vote, you must have attended at least three ACM
                                    events in the current academic year.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ElectionCandidates data={candidates2627} />
        </>
    );
}
