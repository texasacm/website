import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export default function FeaturedEvents() {

  return (
    <section className="py-20 bg-white">
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Get your resume reviewed by industry professionals and learn how to make it stand out to recruiters.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>September 15, 2023 • 5:00 PM - 7:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">GDC 2.216</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Interview Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Practice technical interview questions and learn strategies for success in coding interviews.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>September 22, 2023 • 6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">GDC 3.302</div>
                </CardContent>
              </Card>
            </div>
          </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
    </section>
  )
}

