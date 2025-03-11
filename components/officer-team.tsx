import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OfficerTeam() {
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
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-gray-700">
            Our officers are dedicated to serving the UT Austin CS community and ensuring that Texas ACM provides
            valuable experiences for all members. Feel free to reach out to any of our officers if you have questions or
            ideas!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
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

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Officer Election Timeline</h3>
            <p className="text-gray-700 mb-6">
              Interested in becoming an officer? Elections for officer positions are held annually. Here's our typical
              timeline:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Applications Open: February</li>
              <li>Candidate Presentations: March</li>
              <li>Elections: Late March</li>
              <li>Transition Period: April</li>
              <li>New Officers Begin: May</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

