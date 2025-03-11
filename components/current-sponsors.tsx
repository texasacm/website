import Image from "next/image"

export default function CurrentSponsors() {
  const currentSponsors = [
    { name: "Paycom", logo: "/placeholder-logo.svg", tier: "Silver" },
    { name: "Intuit", logo: "/placeholder-logo.svg", tier: "Bronze" },
    { name: "PwC", logo: "/placeholder-logo.svg", tier: "Bronze" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Current Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-full aspect-square flex items-center justify-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-medium">{sponsor.name}</p>
                  <p className="text-xs text-gray-500">{sponsor.tier} Sponsor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

