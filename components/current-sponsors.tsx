import Image from "next/image"
import type { FC, JSX } from "react"

type Tier = "Gold" | "Silver" | "Bronze"

interface Sponsor {
  name: string
  logo: string
  tier: Tier
  url: string
}

const currentSponsors: Sponsor[] = [
  {
    name: "Paycom",
    logo: "/paycom.png",
    tier: "Silver",
    url: "https://www.paycom.com",
  },
  {
    name: "Intuit",
    logo: "/intuit.svg",
    tier: "Bronze",
    url: "https://www.intuit.com",
  },
  {
    name: "PwC",
    logo: "/pwc.png",
    tier: "Bronze",
    url: "https://www.pwc.com",
  },
]

export const CurrentSponsors: FC = (): JSX.Element => {
  // map each tier to a text color
  const tierColors: Record<Tier, string> = {
    Gold: "text-yellow-600",
    Silver: "text-gray-400",
    Bronze: "text-amber-600",
  }

  // group sponsors by tier
  const sponsorsByTier = currentSponsors.reduce<Partial<Record<Tier, Sponsor[]>>>(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = []
      acc[sponsor.tier]!.push(sponsor)
      return acc
    },
    {}
  )

  // define the order you want tiers to appear
  const tierOrder: Tier[] = ["Silver", "Bronze"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Current Sponsors
          </h3>

          {tierOrder.map((tier) => {
            const list = sponsorsByTier[tier]
            if (!list || list.length === 0) return null

            return (
              <div key={tier} className="mb-12 text-center">
                <h4
                  className={`text-xl font-semibold mb-6 ${tierColors[tier]}`}
                >
                  {tier} Sponsors
                </h4>
                <div className="flex flex-wrap justify-center gap-12">
                  {list.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="flex flex-col items-center"
                    >
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-white p-6 rounded-lg shadow-sm
                          w-60 h-60
                          flex items-center justify-center
                          transition-colors duration-200
                          hover:shadow-lg hover:bg-gray-100
                          cursor-pointer
                        "
                      >
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </a>
                      <div className="mt-4 text-center">
                        <p className="font-medium text-lg">{sponsor.name}</p>
                        <p className="text-xs text-gray-500">
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CurrentSponsors
