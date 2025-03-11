import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/texas-acm-logo.svg" alt="Texas ACM Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">The Association for Computing Machinery at UT Austin</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/texas_acm" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-white">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-gray-400 hover:text-white">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  CS A to Z Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resume Book
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Technical Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Internship Guide
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
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <Link href="mailto:contact@texasacm.org" className="text-gray-400 hover:text-white">
                  contact@texasacm.org
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

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Texas ACM. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

