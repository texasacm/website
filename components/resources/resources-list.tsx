import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Book, Calendar, Users, Award, Download } from 'lucide-react';

export default function ResourcesList() {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="cs-guide">CS A to Z</TabsTrigger>
              <TabsTrigger value="resume">Resume Book</TabsTrigger>
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

                <div>
                  <div>
                    <p className="mb-4 text-gray-700">
                      Submit your resume to be included in our resume book,
                      which is shared with our corporate partners and sponsors.
                      This is a great way to get your resume in front of
                      recruiters from top tech companies.
                    </p>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <h5 className="mb-1 font-semibold">
                          Submission Requirements
                        </h5>
                        <ul className="list-disc space-y-1 pl-5 text-sm">
                          <li>PDF format only</li>
                          <li>Maximum 1 page</li>
                          <li>Updated within the last 6 months</li>
                        </ul>
                      </div>
                      <Button className="w-full">Submit Your Resume</Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-2 text-xl font-semibold">
                    Resume Resources
                  </h4>
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
          </Tabs>
        </div>
      </div>
    </section>
  );
}
