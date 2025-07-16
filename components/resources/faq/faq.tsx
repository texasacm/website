import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="mx-40 rounded-xl bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {/* Question 1 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">What is ACM?</h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                The Association for Computing Machinery (ACM) is the world's
                largest educational and scientific computing society. Texas ACM
                is the student chapter at UT Austin, focused on promoting
                interest in computing and providing resources for CS students.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 2 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  Do I need to be a CS major to join?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                No! While we primarily serve CS students, we welcome members
                from all majors who are interested in computing and technology.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 3 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  How much does membership cost?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                Membership is completely free! There are no dues or fees to join
                Texas ACM.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 4 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  How can I get involved beyond basic membership?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                There are many ways to get more involved! You can join a
                committee, help organize events, run for an officer position, or
                lead an initiative. Reach out to any current officer to learn
                more about these opportunities.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 5 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  Does ACM help with internships and job placements?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                Yes! We host company info sessions, resume workshops, and
                networking events specifically designed to help members secure
                internships and full-time positions. Our corporate partners
                often recruit directly from our membership.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 6 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  Where do I apply to be an officer?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                Officer applications for Junior positions open up at the
                beginning of each fall semester for Corporate, Marketing, and
                Finance. In the Spring, we hold elections to form ACM's
                Executive Board consisting of the President, Vice President,
                Treasurer, and two At-Large positions. After the elections,
                applications for Senior Officer and internal officer positions
                will open up near the end of the Spring semester.
              </p>
            </CollapsibleContent>
          </Collapsible>

          {/* Question 7 */}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button className="w-full rounded-xl border border-dashed bg-gray-200 p-4 text-left">
                <h4 className="mb-2 text-xl font-semibold">
                  How do ACM elections work?
                </h4>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-gray-700">
                ACM elections use ranked-choice voting to elect candidates.
                Voting takes place only on election day, the date of which is
                announced in advance. The only requirement there is to vote is
                you must have attended at least 3 ACM events that academic year.
                For more specific questions, reach out to the executive team.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
