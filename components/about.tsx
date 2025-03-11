import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const officers = [
    {
      name: "Jane Doe",
      position: "President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Computer Science senior with a passion for AI and machine learning.",
    },
    {
      name: "John Smith",
      position: "Vice President",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Junior studying Computer Science with a focus on cybersecurity.",
    },
    {
      name: "Alex Johnson",
      position: "Treasurer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Computer Engineering sophomore interested in embedded systems.",
    },
    {
      name: "Sam Wilson",
      position: "Secretary",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Computer Science junior specializing in full-stack development.",
    },
    {
      name: "Taylor Brown",
      position: "Events Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Senior in Computer Science with a minor in Business.",
    },
    {
      name: "Jordan Lee",
      position: "Corporate Relations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Junior double-majoring in Computer Science and Mathematics.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Texas ACM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the largest computer science student organization at UT Austin, dedicated to promoting computing
            knowledge and career readiness.
          </p>
        </div>

        <Tabs defaultValue="what-we-do" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="what-we-do">What We Do</TabsTrigger>
            <TabsTrigger value="officers">Officer Team</TabsTrigger>
            <TabsTrigger value="get-involved">Get Involved</TabsTrigger>
          </TabsList>

          <TabsContent value="what-we-do" className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
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
                    <li>Diversity and inclusion initiatives</li>
                    <li>Community service projects</li>
                    <li>Annual banquets and celebrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Initiatives</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Competitive Programming</h4>
                  <p className="text-gray-700">
                    We organize and participate in programming contests, including the ACM International Collegiate
                    Programming Contest (ICPC).
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Diversity in Tech</h4>
                  <p className="text-gray-700">
                    We're committed to promoting diversity and inclusion in computer science through targeted events and
                    support systems.
                  </p>
                </div>
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
              </div>
            </div>
          </TabsContent>

          <TabsContent value="officers">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src={officer.image || "/placeholder.svg"} alt={officer.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{officer.name}</CardTitle>
                    <CardDescription>{officer.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{officer.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="get-involved">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">How to Get Involved</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Become a Member</h4>
                  <p className="text-gray-700 mb-4">
                    Join Texas ACM to access exclusive events, resources, and networking opportunities. Membership is
                    open to all UT Austin students interested in computing.
                  </p>
                  <Button asChild>
                    <Link href="#join">Join Now</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Attend Our Events</h4>
                  <p className="text-gray-700 mb-4">
                    Most of our events are open to all UT Austin students. Check our calendar for upcoming workshops,
                    socials, and tech talks.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#calendar">View Calendar</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2">Leadership Opportunities</h4>
                <p className="text-gray-700 mb-4">
                  Interested in taking on a leadership role? Elections for officer positions are held annually, and we
                  also have committee positions and project leads throughout the year.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Officer Election Timeline</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Applications Open: February</li>
                    <li>Candidate Presentations: March</li>
                    <li>Elections: Late March</li>
                    <li>Transition Period: April</li>
                    <li>New Officers Begin: May</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

