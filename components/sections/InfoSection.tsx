"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="
      relative 
      bg-[oklch(0.94_0.01_25)] 
      text-black 
      py-24 px-6
    ">

      {/* subtle top divider for transition */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />

      <div className="max-w-3xl mx-auto">

        {/* HEADLINE */}
        <h2 className="
          font-[family-name:var(--font-heading)] 
          text-4xl 
          leading-tight 
          mb-6
        ">
          A refined dining experience at Bata Club
        </h2>

        {/* DESCRIPTION */}
        <p className="
          text-neutral-600 
          text-lg 
          leading-relaxed 
          mb-12 
          max-w-2xl
        ">
          Guests can enjoy fine dining in a warm, elegant setting,
          complemented by exceptional service and a carefully curated menu
          designed to deliver unforgettable culinary moments.
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">

          {/* OPENING TIMES */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-wide text-neutral-500 mb-2">
              <Clock size={16} />
              <span>OPENING TIMES</span>
            </div>
            <p className="text-2xl font-medium">
              06:30 – 22:00
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-wide text-neutral-500 mb-2">
              <Phone size={16} />
              <span>CONTACT</span>
            </div>
            <p className="text-2xl font-medium">
              +263 XX XXX XXXX
            </p>
          </div>

          {/* ADDRESS */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 text-xs tracking-wide text-neutral-500 mb-2">
              <MapPin size={16} />
              <span>ADDRESS</span>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              Bata Club, Bulawayo, Zimbabwe
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mb-14">
          <Link href="/booking">
            <button className="
              px-10 py-4 rounded-full
              bg-neutral-900 text-white
              text-sm tracking-wide
              hover:scale-105 transition-all duration-300
              shadow-md
            ">
              Book Now
            </button>
          </Link>
        </div>

        {/* IMAGE (NEW — CONTROLLED SIZE) */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/restaurant-neww.webp" // replace with your image
            alt="Dining Experience"
            width={1200}
            height={800}
            className="w-full h-[240px] object-cover"
          />

          {/* subtle overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

      </div>

    </section>
  )
}