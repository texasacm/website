import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhatWeDo() {
  return (
    // Restore bottom padding so there's white space before the orange bar
    <section className="pt-16 pb-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission 🚀</h2>
          <p className="text-lg text-gray-700 mb-6">
            Texas ACM is dedicated to promoting computing knowledge and career readiness among UT Austin students. We
            strive to create a supportive community where students can develop technical skills, connect with industry
            professionals, and prepare for successful careers in technology.
          </p>
          <p className="text-lg text-gray-700">
            As the largest computer science student organization at UT Austin, we organize a wide range of events and
            activities designed to enhance the academic and professional development of our members.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl font-bold mb-8 text-center">
            At ACM, we support our members by our three pillars:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Industry Pillar */}
            <div className="relative pb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Industry 🏢</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Events with our partners 🤝</li>
                    <li>Resume workshops 📄</li>
                    <li>ACM resume book 📕</li>
                    <li className="font-bold">ACM Corporate Banquet 💼</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3">
                <Image
                  src="/pillar.png"
                  alt="Industry Pillar"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* Academics Pillar */}
            <div className="relative pb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Academics 📚</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Custom hackathons 👥</li>
                    <li>Technical workshops 🛠️</li>
                    <li>Academic resources 📘</li>
                    <li className="font-bold">Pancakes with Professors 🥞</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3">
                <Image
                  src="/pillar.png"
                  alt="Academics Pillar"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* Community Pillar */}
            <div className="relative pb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Community 🤝</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Socials and game nights 🎉</li>
                    <li>Mentorship programs 🎓</li>
                    <li>Open source projects 🏗️</li>
                    <li className="font-bold">CS Week 🌟</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3">
                <Image
                  src="/pillar.png"
                  alt="Community Pillar"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
