import EmailSignupForm from '@/components/EmailSignupForm';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function JoinSection() {
  return (
    <section id="join" className="bg-gray-50 py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Stay Connected with Texas ACM
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Become a part of the largest computer science student organization
            at UT Austin
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* First Card: Mailing List & Discord */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                The two best ways to stay up-to-date with ACM Events:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Mailing List Section */}
                <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    Join our mailing list:
                  </h3>
                  <EmailSignupForm />
                </div>

                {/* Discord Section */}
                <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-6">
                  <h3 className="mb-2 text-lg font-semibold">
                    Join our Discord:
                  </h3>
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
              <CardTitle className="text-center text-2xl">
                Our Socials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-6">
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
