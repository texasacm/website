import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialLink {
  url: string;
  icon: React.ReactNode;
}

interface Officer {
  name: string;
  position: string;
  image: string;
  bio: string;
  socials: SocialLink[];
}

const headshot_dir = "/officer-headshots-2025-26"

const officers: Officer[] = [
  {
    name: "Nidhi Pabbathi",
    position: "President",
    image: headshot_dir + "/pres_nidhi.jpg",
    bio: "bingus.",
    socials: [
      { url: "https://twitter.com/janedoe", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/janedoe", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/janedoe", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Gabriel Keller",
    position: "Vice President",
    image: headshot_dir + "/vp_gabe.jpeg",
    bio: "Placeholder.",
    socials: [
      { url: "https://twitter.com/johnsmith", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/johnsmith", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/johnsmith", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Diego Contreras",
    position: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Placeholder.",
    socials: [
      { url: "https://twitter.com/alexjohnson", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/alexjohnson", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/alexjohnson", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Mansi Madhani",
    position: "Executive Board Member",
    image: headshot_dir + "/exec_mansi.jpeg",
    bio: "Computer Science junior specializing in full-stack development.",
    socials: [
      { url: "https://twitter.com/samwilson", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/samwilson", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/samwilson", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Praneel Seth",
    position: "Executive Board Member",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Senior in Computer Science with a minor in Business.",
    socials: [
      { url: "https://twitter.com/taylorbrown", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/taylorbrown", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/taylorbrown", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Stephanie Nguyen",
    position: "Senior Marketing Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Casey Charleston",
    position: "Senior Corporate Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Brayden Strong",
    position: "Senior Academics Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Void Zhou",
    position: "Junior Marketing Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Victoria Reddy",
    position: "Junior Corporate Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Niken Patel",
    position: "Junior Finance Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Elliot Ylagan",
    position: "Intramural Sports Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Elie Soloveichik",
    position: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Mahesh Bachu",
    position: "Internal Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Andrew Huang",
    position: "Internal Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
  {
    name: "Joseph Wilson",
    position: "Internal Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Junior double-majoring in Computer Science and Mathematics.",
    socials: [
      { url: "https://twitter.com/jordanlee", icon: <FaTwitter size={20} /> },
      { url: "https://linkedin.com/in/jordanlee", icon: <FaLinkedin size={20} /> },
      { url: "https://github.com/jordanlee", icon: <FaGithub size={20} /> },
    ],
  },
];

export default function OfficerTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-gray-700">
            Our officers are dedicated to serving the UT Austin CS community and ensuring that Texas ACM provides
            valuable experiences for all members. Feel free to reach out to any of our officers!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, idx) => (
              <div key={idx}>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-square relative cursor-pointer">
                          <Image
                            src={officer.image}
                            alt={officer.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <div className="flex flex-col sm:flex-row gap-6">
                          <div className="sm:w-1/3">
                            <Image
                              src={officer.image}
                              alt={officer.name}
                              width={300}
                              height={300}
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="sm:w-2/3">
                            <h3 className="text-2xl font-bold mb-2">{officer.name}</h3>
                            <p className="text-gray-500 mb-4">{officer.position}</p>
                            <div className="flex space-x-4 mb-4">
                              {officer.socials.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                  {social.icon}
                                </a>
                              ))}
                            </div>
                            <p className="text-gray-700">{officer.bio}</p>
                          </div>
                        </div>
                        <DialogClose asChild>
                          <Button variant="outline" className="mt-6">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <CardHeader className="mt-4 text-center">
                    <CardTitle>{officer.name}</CardTitle>
                    <CardDescription>{officer.position}</CardDescription>
                  </CardHeader>
                  <div className="flex justify-center space-x-4 py-4">
                    {officer.socials.map((social, i) => (
                      <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
