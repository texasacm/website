import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Book, Calendar, Users, Award, Download } from "lucide-react"

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources for CS Majors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Texas ACM provides a variety of resources to help computer science students succeed academically and
            professionally.
          </p>
        </div>

        <Tabs defaultValue="faq" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="faq">ACM FAQ</TabsTrigger>
            <TabsTrigger value="cs-guide">CS A to Z</TabsTrigger>
            <TabsTrigger value="resume">Resume Book</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
          </TabsList>
          <TabsContent value="cs-guide">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">CS A to Z Guide</h3>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={16} />
                  Download Full Guide
                </Button>
              </div>

              <p className="text-gray-700 mb-6">
                Our comprehensive guide to navigating the Computer Science program at UT Austin, from freshman year to
                graduation and beyond.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book size={20} />
                      Course Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Recommended course sequences</li>
                      <li>Professor reviews and recommendations</li>
                      <li>Tips for balancing your schedule</li>
                      <li>Elective suggestions based on career goals</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar size={20} />
                      Academic Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Four-year degree planning templates</li>
                      <li>Study abroad opportunities</li>
                      <li>Research and thesis guidelines</li>
                      <li>Double major and certificate strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users size={20} />
                      Career Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Internship application timeline</li>
                      <li>Resume and portfolio building</li>
                      <li>Technical interview preparation</li>
                      <li>Networking strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award size={20} />
                      Beyond the Classroom
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Student organizations and competitions</li>
                      <li>Hackathons and coding challenges</li>
                      <li>Open source contribution opportunities</li>
                      <li>Community service and leadership</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resume">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">ACM Resume Book</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">For Students</h4>
                  <p className="text-gray-700 mb-4">
                    Submit your resume to be included in our resume book, which is shared with our corporate partners
                    and sponsors. This is a great way to get your resume in front of recruiters from top tech companies.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-1">Submission Requirements</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Must be a current ACM member</li>
                        <li>PDF format only</li>
                        <li>Maximum 1 page</li>
                        <li>Updated within the last 6 months</li>
                      </ul>
                    </div>
                    <Button className="w-full">Submit Your Resume</Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">For Companies</h4>
                  <p className="text-gray-700 mb-4">
                    Access our curated collection of resumes from talented UT Austin computer science students. Our
                    resume book is available to corporate partners and sponsors.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-1">Resume Book Benefits</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Pre-screened, high-quality candidates</li>
                        <li>Updated each semester</li>
                        <li>Organized by graduation year and specialization</li>
                        <li>Direct contact information included</li>
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">
                      Request Access
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Resume Resources</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    <FileText size={16} />
                    Resume Template
                  </Link>
                  <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    <FileText size={16} />
                    Resume Writing Guide
                  </Link>
                  <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    <FileText size={16} />
                    Sample Resumes
                  </Link>
                  <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    <FileText size={16} />
                    Technical Skills Checklist
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="membership">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Become a Member</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Membership Benefits</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access to member-only events and workshops</li>
                    <li>Priority registration for popular events</li>
                    <li>Inclusion in the ACM resume book</li>
                    <li>Networking opportunities with industry professionals</li>
                    <li>Mentorship from upperclassmen and alumni</li>
                    <li>Leadership and volunteer opportunities</li>
                    <li>ACM-branded merchandise</li>
                    <li>Access to our private Discord community</li>
                  </ul>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Annual Membership</CardTitle>
                      <CardDescription>Valid for the entire academic year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold mb-2">$30</div>
                      <p className="text-gray-700">
                        Membership fees help fund our events, workshops, and other activities throughout the year.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Join Now</Button>
                    </CardFooter>
                  </Card>

                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Payment Methods</h5>
                    <p className="text-sm text-gray-700">
                      We accept payment via Venmo, cash, or credit card at our in-person events. Online payment options
                      are also available through our website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Membership FAQ</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">When does membership expire?</h5>
                    <p className="text-sm text-gray-700">
                      Membership is valid for the entire academic year (Fall through Spring semesters). Summer
                      membership is included if you join in the preceding Spring.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Can I join mid-year?</h5>
                    <p className="text-sm text-gray-700">
                      Yes! You can join at any time during the academic year. The membership fee remains the same
                      regardless of when you join.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Is financial assistance available?</h5>
                    <p className="text-sm text-gray-700">
                      We offer a limited number of sponsored memberships for students with financial need. Please
                      contact our Treasurer for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

