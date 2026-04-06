"use client"

import Image from "next/image"
import Link from "next/link"

export default function ConferencePage() {
  return (
    <main className="bg-[#eae8e1] text-black">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-6">

        <Image
          src="/images/conf3.webp"
          alt="Conference Venue"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Conference & Corporate Events
          </h1>

          <p className="mt-4 text-white/80">
            Host professional meetings and private events at SteadyHands.
          </p>

          {/* ✅ FIXED LINK */}
          <Link href="/venue-booking">
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg">
              Enquire Now
            </button>
          </Link>
        </div>

      </section>

      {/* INFO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl mb-8">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-sm">
            Elegant Venue
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            Premium Catering
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            Flexible Setup
          </div>

        </div>

      </section>

      {/* ✅ MINI GALLERY (NEW SECTION) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl text-center mb-12">
          Our Conference Space
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* IMAGE 1 */}
          <div className="relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/conf1.webp"
              alt="Conference setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* IMAGE 2 */}
          <div className="relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/conf2.webp"
              alt="Meeting space"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* IMAGE 3 */}
          <div className="relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/conf4.webp"
              alt="Corporate event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h3 className="text-2xl mb-4">
          Plan your next conference with us
        </h3>

        {/* ✅ FIXED LINK */}
        <Link href="/venue-booking">
          <button className="bg-black text-white px-8 py-4 rounded-full">
            Book Now
          </button>
        </Link>

      </section>

    </main>
  )
}