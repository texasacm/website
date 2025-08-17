'use client';

import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [isResourcesHovered, setIsResourcesHovered] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={cn('fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md')}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="group flex items-center"
                            onMouseEnter={() => setIsLogoHovered(true)}
                            onMouseLeave={() => setIsLogoHovered(false)}
                        >
                            <div className="relative">
                                <Image
                                    src="/texasacm-logo-black.svg"
                                    alt="Texas ACM Logo"
                                    width={120}
                                    height={40}
                                    className={cn(
                                        'h-8 w-auto transition-all duration-200 ease-out',
                                        isLogoHovered ? 'opacity-0' : 'opacity-100',
                                    )}
                                    style={{
                                        transition: isLogoHovered ? 'all 200ms ease-out' : 'none',
                                    }}
                                />
                                <Image
                                    src="/texasacm-logo-primary.svg"
                                    alt="Texas ACM Logo"
                                    width={120}
                                    height={40}
                                    className={cn(
                                        'absolute left-0 top-0 h-8 w-auto',
                                        isLogoHovered ? 'opacity-100' : 'opacity-0',
                                    )}
                                    style={{
                                        transition: isLogoHovered ? 'all 200ms ease-out' : 'none',
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden h-16 items-center md:flex">
                        <div className="flex h-full items-center px-4">
                            <Link
                                href="/about"
                                className="font-medium text-gray-700 transition hover:text-primary"
                            >
                                About
                            </Link>
                        </div>
                        <div className="flex h-full items-center px-4">
                            <Link
                                href="/calendar"
                                className="font-medium text-gray-700 transition hover:text-primary"
                            >
                                Calendar
                            </Link>
                        </div>
                        <div className="flex h-full items-center px-4">
                            <Link
                                href="/events"
                                className="font-medium text-gray-700 transition hover:text-primary"
                            >
                                Events
                            </Link>
                        </div>
                        <div className="flex h-full items-center px-4">
                            <Link
                                href="/partnership"
                                className="font-medium text-gray-700 transition hover:text-primary"
                            >
                                Partnership
                            </Link>
                        </div>
                        <div className="flex h-full items-center px-4">
                            <div
                                className="relative"
                                onMouseEnter={() => setIsResourcesHovered(true)}
                                onMouseLeave={() => setIsResourcesHovered(false)}
                            >
                                <button className="flex h-full items-center font-medium text-gray-700 transition hover:text-primary">
                                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                {isResourcesHovered && (
                                    <div className="absolute left-0 top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                                        <Link
                                            href="/cs-guide"
                                            className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-primary"
                                        >
                                            CS Guide
                                        </Link>
                                        <Link
                                            href="/faq"
                                            className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-primary"
                                        >
                                            FAQ
                                        </Link>
                                        <Link
                                            href="/forms"
                                            className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-primary"
                                        >
                                            Forms
                                        </Link>
                                        <Link
                                            href="/resume-book"
                                            className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-primary"
                                        >
                                            Resume Book
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 transition hover:text-primary"
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
                        <Link
                            href="/about"
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:underline"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                        <Link
                            href="/events"
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:underline"
                            onClick={toggleMenu}
                        >
                            Events
                        </Link>
                        <Link
                            href="/calendar"
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:underline"
                            onClick={toggleMenu}
                        >
                            Calendar
                        </Link>
                        <Link
                            href="/partnership"
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-primary hover:underline"
                            onClick={toggleMenu}
                        >
                            Partnership
                        </Link>
                        <button
                            onClick={() => setShowResources(!showResources)}
                            className="flex w-full items-center justify-between px-3 py-2 font-medium text-gray-700 hover:text-primary"
                        >
                            Resources <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {showResources && (
                            <div className="ml-4 space-y-1">
                                <Link
                                    href="/cs-guide"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary"
                                    onClick={toggleMenu}
                                >
                                    CS Guide
                                </Link>
                                <Link
                                    href="/faq"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary"
                                    onClick={toggleMenu}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href="/forms"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary"
                                    onClick={toggleMenu}
                                >
                                    Forms
                                </Link>
                                <Link
                                    href="/resume-book"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary"
                                    onClick={toggleMenu}
                                >
                                    Resume Book
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
