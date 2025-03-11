import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Texas ACM is dedicated to promoting computing knowledge and career readiness among UT Austin students. We
            strive to create a supportive community where students can develop technical skills, connect with industry
            professionals, and prepare for successful careers in technology.
          </p>
          <p className="text-lg text-gray-700">
            As the largest computer science student organization at UT Austin, we organize a wide range of events and
            activities designed to enhance the academic and professional development of our members.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Industry & Career Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Resume workshops and reviews</li>
                  <li>Technical interview preparation</li>
                  <li>Industry panels and networking events</li>
                  <li>Company info sessions and recruiting events</li>
                  <li>Hackathons and coding competitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Peer tutoring and study groups</li>
                  <li>Technical workshops and skill-building sessions</li>
                  <li>Research opportunities and presentations</li>
                  <li>Course selection guidance</li>
                  <li>Academic resources and materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Social events and game nights</li>
                  <li>Mentorship programs</li>
                  <li>Community service projects</li>
                  <li>Annual banquets and celebrations</li>
                  <li>Collaborative projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Initiatives</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Open Source Projects</h4>
                <p className="text-gray-700">
                  We contribute to and maintain open source projects that benefit the UT Austin community and beyond.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Technical Workshops</h4>
                <p className="text-gray-700">
                  We host regular workshops on cutting-edge technologies and fundamental computer science concepts.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Mentorship Program</h4>
                <p className="text-gray-700">
                  We connect underclassmen with experienced upperclassmen to provide guidance on academics, internships,
                  and more.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Industry Connections</h4>
                <p className="text-gray-700">
                  We build and maintain relationships with tech companies to create opportunities for our members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

