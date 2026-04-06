"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InfoSection() {
  return (
    <section className="bg-[#eae8e1] text-black py-20 px-5">

      <div className="max-w-5xl mx-auto">

        {/* TOP IMAGE */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/gallery/restaurant-neww.webp"
            alt="Dining Experience"
            width={1200}
            height={800}
            className="w-full h-[220px] object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            A refined dining experience at Bata Club
          </h2>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            SteadyHands offers fine dining, catering, corporate events and a premium bar experience — all designed to deliver unforgettable moments.
          </p>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">

          <div>
            <p className="font-medium text-black">Catering</p>
            <p className="text-sm text-neutral-500">Events & private functions</p>
          </div>

          <div>
            <p className="font-medium text-black">Event Hosting</p>
            <p className="text-sm text-neutral-500">Conferences & celebrations</p>
          </div>

          <div>
            <p className="font-medium text-black">Executive Bar</p>
            <p className="text-sm text-neutral-500">Premium drinks experience</p>
          </div>

        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-center sm:text-left">

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-neutral-500 mb-1">
              <Clock size={16} />
              <span>WORKING HOURS</span>
            </div>
            <p className="text-lg font-medium">0900 – 2100</p>
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-neutral-500 mb-1">
              <Phone size={16} />
              <span>CONTACT</span>
            </div>
            <p className="text-lg font-medium">+263 77 939 3010</p>
          </div>

          <div className="sm:col-span-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-neutral-500 mb-1">
              <MapPin size={16} />
              <span>ADDRESS</span>
            </div>
            <p className="text-neutral-600">
              Bata Club, Gweru along Bulawayo Road, Zimbabwe
            </p>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">

          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-black text-white text-sm">
              Contact Us
            </button>
          </Link>

          <Link href="/booking" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-black text-black text-sm">
              Book Table
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}