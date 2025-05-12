import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Book, Calendar, Users, Award, Download } from 'lucide-react';

export default function Resources() {
  return (
    <section id="resources" className="bg-gray-50 py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Resources for CS Majors
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Texas ACM provides a variety of resources to help computer science
            students succeed academically and professionally.
          </p>
        </div>

        <Tabs defaultValue="faq" className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="faq">ACM FAQ</TabsTrigger>
            <TabsTrigger value="cs-guide">CS A to Z</TabsTrigger>
            <TabsTrigger value="resume">Resume Book</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
          </TabsList>
          <TabsContent value="cs-guide">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">CS A to Z Guide</h3>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={16} />
                  Download Full Guide
                </Button>
              </div>

              <p className="mb-6 text-gray-700">
                Our comprehensive guide to navigating the Computer Science
                program at UT Austin, from freshman year to graduation and
                beyond.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book size={20} />
                      Course Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5">
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
                    <ul className="list-disc space-y-1 pl-5">
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
                    <ul className="list-disc space-y-1 pl-5">
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
                    <ul className="list-disc space-y-1 pl-5">
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
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">ACM Resume Book</h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xl font-semibold">For Students</h4>
                  <p className="mb-4 text-gray-700">
                    Submit your resume to be included in our resume book, which
                    is shared with our corporate partners and sponsors. This is
                    a great way to get your resume in front of recruiters from
                    top tech companies.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h5 className="mb-1 font-semibold">
                        Submission Requirements
                      </h5>
                      <ul className="list-disc space-y-1 pl-5 text-sm">
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
                  <h4 className="mb-2 text-xl font-semibold">For Companies</h4>
                  <p className="mb-4 text-gray-700">
                    Access our curated collection of resumes from talented UT
                    Austin computer science students. Our resume book is
                    available to corporate partners and sponsors.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h5 className="mb-1 font-semibold">
                        Resume Book Benefits
                      </h5>
                      <ul className="list-disc space-y-1 pl-5 text-sm">
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

              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h4 className="mb-2 text-xl font-semibold">Resume Resources</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FileText size={16} />
                    Resume Template
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FileText size={16} />
                    Resume Writing Guide
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FileText size={16} />
                    Sample Resumes
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FileText size={16} />
                    Technical Skills Checklist
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="membership">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">Become a Member</h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xl font-semibold">
                    Membership Benefits
                  </h4>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Access to member-only events and workshops</li>
                    <li>Priority registration for popular events</li>
                    <li>Inclusion in the ACM resume book</li>
                    <li>
                      Networking opportunities with industry professionals
                    </li>
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
                      <CardDescription>
                        Valid for the entire academic year
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2 text-4xl font-bold">$30</div>
                      <p className="text-gray-700">
                        Membership fees help fund our events, workshops, and
                        other activities throughout the year.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Join Now</Button>
                    </CardFooter>
                  </Card>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h5 className="mb-2 font-semibold">Payment Methods</h5>
                    <p className="text-sm text-gray-700">
                      We accept payment via Venmo, cash, or credit card at our
                      in-person events. Online payment options are also
                      available through our website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h4 className="mb-2 text-xl font-semibold">Membership FAQ</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold">
                      When does membership expire?
                    </h5>
                    <p className="text-sm text-gray-700">
                      Membership is valid for the entire academic year (Fall
                      through Spring semesters). Summer membership is included
                      if you join in the preceding Spring.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Can I join mid-year?</h5>
                    <p className="text-sm text-gray-700">
                      Yes! You can join at any time during the academic year.
                      The membership fee remains the same regardless of when you
                      join.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold">
                      Is financial assistance available?
                    </h5>
                    <p className="text-sm text-gray-700">
                      We offer a limited number of sponsored memberships for
                      students with financial need. Please contact our Treasurer
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
