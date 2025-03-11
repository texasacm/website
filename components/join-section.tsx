import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Texas ACM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become a part of the largest computer science student organization at UT Austin
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Membership Benefits</CardTitle>
              <CardDescription>Join for free and enjoy these benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Access to member-only events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Priority registration for popular events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Inclusion in the ACM resume book</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Networking with industry professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mentorship from upperclassmen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Leadership opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>ACM-branded merchandise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Access to our Discord community</span>
                </li>
              </ul>

              <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">How to Join</h3>
                <p className="text-gray-700 mb-4">
                  Membership is completely free! Simply fill out our membership form and join our Discord server to get
                  started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">Sign Up Form</Button>
                  <Button variant="outline" className="flex-1">
                    Join Discord
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500">
                Questions about membership?{" "}
                <Link href="mailto:contact@texasacm.org" className="text-primary hover:underline">
                  Contact us
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

