import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function SponsorshipPackages() {
  const sponsorshipTiers = [
    {
      name: "Bronze",
      price: "$1,000",
      description: "Basic visibility and recruiting opportunities",
      features: ["Logo on website", "1 recruiting event per year", "Resume book access", "Social media recognition"],
    },
    {
      name: "Silver",
      price: "$2,500",
      description: "Enhanced visibility and engagement opportunities",
      features: [
        "All Bronze benefits",
        "2 recruiting events per year",
        "Workshop or tech talk opportunity",
        "Newsletter features",
        "Medium logo placement",
      ],
    },
    {
      name: "Gold",
      price: "$5,000",
      description: "Premium partnership with extensive benefits",
      features: [
        "All Silver benefits",
        "3 recruiting events per year",
        "Hackathon sponsorship",
        "Exclusive networking session",
        "Large logo placement",
        "Featured job postings",
      ],
    },
    {
      name: "Platinum",
      price: "$10,000+",
      description: "Elite partnership with maximum exposure",
      features: [
        "All Gold benefits",
        "Unlimited recruiting events",
        "Named event sponsorship",
        "Custom partnership benefits",
        "Premium logo placement",
        "Year-round promotion",
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Texas ACM is the largest computer science student organization at UT Austin, with over 500 active members.
            Our members are passionate, talented students who are eager to make an impact in the tech industry.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Access to top CS talent from one of the nation's leading programs</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Direct recruiting opportunities through events and resume book</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Brand visibility to a large, engaged student audience</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Opportunities to host technical workshops and presentations</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Support the development of future tech leaders</span>
            </li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Sponsorship Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <Card key={index} className={tier.name === "Gold" ? "border-primary shadow-lg" : ""}>
                {tier.name === "Gold" && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">{tier.price}</div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.name === "Gold" ? "default" : "outline"}>
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We'd love to discuss how we can create a partnership that meets your recruiting and branding goals while
              supporting our mission to prepare students for successful careers in tech.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:corporate@texasacm.org">Contact Our Corporate Team</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

