"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"

const hero_slides_dir = "/home-page-slides"

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    hero_slides_dir + "/family_feud_25.JPG", 
    hero_slides_dir + "/acm_retreat_24.jpg", 
    hero_slides_dir + "/acm_thanksgiving_24.jpg", 
    hero_slides_dir + "/pancakes_and_professors_24.jpg",
    hero_slides_dir + "/paycom_fa24.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Navbar />

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Texas ACM Hero Image ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Hey there! We're Texas ACM.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            The largest computer science student organization @ UT Austin 🤘
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="#join">Join Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg bg-white text-black border-white hover:bg-white/90"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-lg bg-white text-black border-white hover:bg-white/90"            >
              <Link href="/partnership">Partnership Inquiries</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

