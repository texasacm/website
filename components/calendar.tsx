"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [filter, setFilter] = useState("all")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const events = [
    {
      id: 1,
      title: "Resume Workshop",
      date: "2023-09-15",
      time: "5:00 PM - 7:00 PM",
      location: "GDC 2.216",
      category: "career",
      description: "Get your resume reviewed by industry professionals and learn how to make it stand out.",
    },
    {
      id: 2,
      title: "Technical Interview Prep",
      date: "2023-09-22",
      time: "6:00 PM - 8:00 PM",
      location: "GDC 3.302",
      category: "career",
      description: "Practice technical interview questions and learn strategies for success.",
    },
    {
      id: 3,
      title: "Game Night",
      date: "2023-09-29",
      time: "7:00 PM - 10:00 PM",
      location: "GDC Atrium",
      category: "social",
      description: "Join us for a fun night of board games, video games, and snacks!",
    },
    {
      id: 4,
      title: "Google Info Session",
      date: "2023-10-05",
      time: "6:30 PM - 8:00 PM",
      location: "GDC Auditorium",
      category: "corporate",
      description: "Learn about internship and full-time opportunities at Google.",
    },
    {
      id: 5,
      title: "Intro to Machine Learning Workshop",
      date: "2023-10-12",
      time: "5:00 PM - 7:00 PM",
      location: "GDC 6.302",
      category: "academic",
      description: "A beginner-friendly introduction to machine learning concepts and applications.",
    },
    {
      id: 6,
      title: "Hackathon Kickoff",
      date: "2023-10-20",
      time: "6:00 PM",
      location: "GDC Atrium",
      category: "academic",
      description: "The start of our 48-hour hackathon. Form teams and start building!",
    },
  ]

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true
    return event.category === filter
  })

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "career":
        return "bg-blue-100 text-blue-800"
      case "social":
        return "bg-green-100 text-green-800"
      case "academic":
        return "bg-purple-100 text-purple-800"
      case "corporate":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Calendar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with all of our upcoming events, workshops, and activities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-xl font-medium">
                {months[currentMonth]} {currentYear}
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="career">Career</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>
                          {event.date} • {event.time}
                        </CardDescription>
                      </div>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <CalendarIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-900">No events found</h3>
                <p className="text-gray-500 mt-2">There are no events matching your filter criteria for this month.</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Want to stay updated with our events? Subscribe to our calendar or follow us on social media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Subscribe to Calendar
              </Button>
              <Button>View All Events</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

