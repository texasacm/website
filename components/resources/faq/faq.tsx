export default function FAQ() {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-xl p-8 shadow-sm mx-60">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>

        <div className="space-y-6">
          <div className="rounded-xl border border-dashed bg-gray-200 p-4">
            <h4 className="text-xl font-semibold mb-2">What is ACM?</h4>
            <p className="text-gray-700">
              The Association for Computing Machinery (ACM) is the world's
              largest educational and scientific computing society. Texas ACM is
              the student chapter at UT Austin, focused on promoting interest in
              computing and providing resources for CS students.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              Do I need to be a CS major to join?
            </h4>
            <p className="text-gray-700">
              No! While we primarily serve CS students, we welcome members from
              all majors who are interested in computing and technology.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              How much does membership cost?
            </h4>
            <p className="text-gray-700">
              Membership is completely free! There are no dues or fees to join
              Texas ACM.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              How can I get involved beyond basic membership?
            </h4>
            <p className="text-gray-700">
              There are many ways to get more involved! You can join a
              committee, help organize events, run for an officer position, or
              lead an initiative. Reach out to any current officer to learn more
              about these opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              Does ACM help with internships and job placements?
            </h4>
            <p className="text-gray-700">
              Yes! We host company info sessions, resume workshops, and
              networking events specifically designed to help members secure
              internships and full-time positions. Our corporate partners often
              recruit directly from our membership.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              Where do I apply to be an officer?
            </h4>
            <p className="text-gray-700">
              Officer applications for Junior positions open up at the beginning
              of each fall semester for Corporate, Marketing, and Finance. In
              the Spring, we hold elections to form ACM's Executive Board
              consisting of the President, Vice President, Treasurer, and two
              At-Large positions. After the elections, applications for Senior
              Officer and internal officer positions will open up near the end
              of the Spring semester.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              How do ACM elections work?
            </h4>
            <p className="text-gray-700">
              ACM elections use ranked-choice voting to elect candidates. Voting
              takes place only on election day, the date of which is announced
              in advance. The only requirement there is to vote is you must have
              attended at least 3 ACM events that academic year. For more
              specific questions, reach out to the executive team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
