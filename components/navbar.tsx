"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/texasacm-logo-black.svg" alt="Texas ACM Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { href: "/about", label: "About" },
              { href: "/resources", label: "Resources" },
              { href: "/events", label: "Events" },
              { href: "/partnership", label: "Partnership" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className=
                  "font-medium text-gray-700 hover:underline hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { href: "/about", label: "About" },
              { href: "/resources", label: "Resources" },
              { href: "/calendar", label: "Calendar" },
              { href: "/partnership", label: "Partnership" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 text-gray-700 hover:underline hover:text-primary font-medium"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
