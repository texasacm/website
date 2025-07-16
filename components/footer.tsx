import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center">
              <Image
                src="/texasacm-logo-white.svg"
                alt="Texas ACM Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-400">
              The Association for Computing Machinery at UT Austin
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/texas_acm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/utexas-acm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://github.com/caseycharleston/texasacm-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/groups/texas.acm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                  href="https://x.com/utexasACM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaXTwitter size={20} />
                </Link>
              <Link
                href="https://discord.gg/tspJCpFFKx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaDiscord size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-gray-400 hover:text-white"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-gray-400 hover:text-white"
                >
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cs-guide"
                  className="text-gray-400 hover:text-white"
                >
                  CS Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/resume-book"
                  className="text-gray-400 hover:text-white"
                >
                  Resume Book
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.acm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  ACM National
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">
                <Link
                  href="mailto:president@texasacm.org"
                  className="flex items-center gap-2"
                >
                  <Mail size={16} className="min-h-4 min-w-4" />
                  president@texasacm.org
                </Link>
              </li>
              <li>
                <p className="text-gray-400">
                  Gates Dell Complex (GDC)
                  <br />
                  2317 Speedway
                  <br />
                  Austin, TX 78712
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Texas ACM. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
