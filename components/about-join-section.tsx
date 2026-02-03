"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutJoinSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* About Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin conference audience"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-proxima font-normal tracking-widest uppercase mb-3">
              <Link href="/about-1" className="text-primary hover:underline">
                About
              </Link>
            </h3>
            <p className="text-dark/80 font-garamond mb-4">
              Find out about our organization and mission.
            </p>
            <Link 
              href="/about-1" 
              className="cta-link inline-flex items-center gap-1"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Join Us Card */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin meetup participants raising hands"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-proxima font-normal tracking-widest uppercase mb-3">
              <Link href="/meetups-events" className="text-primary hover:underline">
                Join Us
              </Link>
            </h3>
            <p className="text-dark/80 font-garamond mb-4">
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link 
              href="/meetups-events" 
              className="cta-link inline-flex items-center gap-1"
            >
              Find Out How <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
