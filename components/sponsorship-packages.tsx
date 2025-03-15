import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function SponsorshipPackages() {
  // Define each row of the table here.
  // If a feature is included for a tier, set it to `true`; if not, `false`.
  // If the feature is more descriptive (e.g., "4 - 12" events), just store a string.
  const tableRows = [
    {
      label: "Number of Recruiting Events",
      gold: "4",
      silver: "2",
    },
    {
      label: "Priority for septembmer events",
      gold: true,
      silver: false,
    },
    {
      label: "Access to demographics and emails of event attendees",
      gold: true,
      silver: false,
    },
    {
      label: "Access to ACM-wide resume book",
      gold: true,
      silver: false,
    },
    {
      label: "Corporate banquet ticket & banquet resume book",
      gold: true,
      silver: true,
    },
    {
      label: "Access to on-campus marketing channels",
      gold: true,
      silver: true,
    },
    {
      label: "Access to 1,000+ Members on Our Digital Platforms",
      gold: true,
      silver: true,
    },
    {
      label: "Distribute Merch to ACM Members",
      gold: true,
      silver: true,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* "Why Partner With Us?" section remains unchanged */}
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
          </ul>
        </div>

        {/* Sponsorship Packages Table */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Sponsorship Packages</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  {/* Left header cell can be empty or hold a label like "Features" */}
                  <th className="py-4 px-4 text-gray-700 font-semibold w-1/3"></th>
                  {/* Gold column */}
                  <th className="py-4 px-4 text-center">
                    <div className="text-xl font-bold text-yellow-600">GOLD</div>
                    <div className="text-sm text-gray-700">$7,000</div>
                  </th>
                  {/* Silver column */}
                  <th className="py-4 px-4 text-center">
                    <div className="text-xl font-bold text-gray-500">SILVER</div>
                    <div className="text-sm text-gray-700">$2,500</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    {/* Feature label */}
                    <td className="py-3 px-4 font-medium text-gray-700">
                      {row.label}
                    </td>
                    {/* Gold cell */}
                    <td className="py-3 px-4 text-center">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <Check className="h-5 w-5 text-green-500 inline-block" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        <span>{row.gold}</span>
                      )}
                    </td>
                    {/* Silver cell */}
                    <td className="py-3 px-4 text-center">
                      {typeof row.silver === "boolean" ? (
                        row.silver ? (
                          <Check className="h-5 w-5 text-green-500 inline-block" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        <span>{row.silver}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We’d love to discuss how we can create a partnership that meets your recruiting and branding goals while
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
