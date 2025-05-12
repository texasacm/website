'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/texasacm-logo-black.svg"
                alt="Texas ACM Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            {[
              { href: '/about', label: 'About' },
              { href: '/events', label: 'Events' },
              { href: '/resources', label: 'Resources' },
              { href: '/calendar', label: 'Calendar' },
              { href: '/partnership', label: 'Partnership' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-gray-700 hover:text-primary hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {[
              { href: '/about', label: 'About' },
              { href: '/events', label: 'Events' },
              { href: '/resources', label: 'Resources' },
              { href: '/calendar', label: 'Calendar' },
              { href: '/partnership', label: 'Partnership' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:underline"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
