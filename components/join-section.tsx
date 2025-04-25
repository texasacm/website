import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailSignupForm from "@/components/EmailSignupForm";
import {
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import {
  FaXTwitter
} from "react-icons/fa6";

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with Texas ACM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become a part of the largest computer science student organization at UT Austin
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* First Card: Mailing List & Discord */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                The two best ways to stay up-to-date with ACM Events:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mailing List Section */}
                <div className="bg-white p-6 rounded-lg border flex flex-col justify-center items-center">
                  <h3 className="font-semibold text-lg mb-4">Join our mailing list:</h3>
                  <EmailSignupForm />
                </div>

                {/* Discord Section */}
                <div className="bg-white p-6 rounded-lg border flex flex-col justify-center items-center">
                  <h3 className="font-semibold text-lg mb-2">Join our Discord:</h3>
                  <Button asChild className="bg-primary text-white">
                    <Link
                      href="https://discord.gg/tspJCpFFKx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center space-x-2">
                        <FaDiscord size={24} />
                        <span>Join ACM Discord</span>
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-gray-500">
                Questions about membership?{' '}
                <Link
                  href="mailto:president@texasacm.org"
                  className="text-primary hover:underline"
                >
                  Contact us
                </Link>
              </p>
            </CardFooter>
          </Card>
          {/* Second Card: Social Media Links */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Our Socials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-6">
              <Link
                  href="https://www.instagram.com/texas_acm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <FaInstagram size={32} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/utexas-acm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <FaLinkedin size={32} />
                </Link>
                <Link
                  href="https://github.com/texasacm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <FaGithub size={32} />
                </Link>
                <Link
                  href="https://www.facebook.com/groups/texas.acm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <FaFacebook size={32} />
                </Link>
                <Link
                  href="https://x.com/utexasACM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <FaXTwitter size={32} />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
