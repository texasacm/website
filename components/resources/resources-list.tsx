import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Book, Calendar, Users, Award, Download } from "lucide-react"

export default function ResourcesList() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="cs-guide">CS A to Z</TabsTrigger>
              <TabsTrigger value="resume">Resume Book</TabsTrigger>
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

                <div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      Submit your resume to be included in our resume book, which is shared with our corporate partners
                      and sponsors. This is a great way to get your resume in front of recruiters from top tech
                      companies.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">Submission Requirements</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>PDF format only</li>
                          <li>Maximum 1 page</li>
                          <li>Updated within the last 6 months</li>
                        </ul>
                      </div>
                      <Button className="w-full">Submit Your Resume</Button>
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
          </Tabs>
        </div>
      </div>
    </section>
  )
}

