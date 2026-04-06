"use client"

import Image from "next/image"

export default function BarExperience() {
  return (
    <section className="bg-[#eae8e1] py-28 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-[#1a1a1a]">
            Executive Bar Experience
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6 max-w-md">
            Unwind in a refined setting designed for conversation, connection,
            and curated drinks. Our executive bar complements every dining and
            event experience at SteadyHands.
          </p>

          <p className="text-neutral-500 text-sm">
            Perfect for post-dinner relaxation, networking, or private gatherings.
          </p>

        </div>

        {/* RIGHT — IMAGE STACK */}
        <div className="grid grid-cols-2 gap-4">

          <div className="relative h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/images/bar1.webp"
              alt="Bar interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/images/bar2.webp"
              alt="Cocktails"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative col-span-2 h-[220px] rounded-xl overflow-hidden">
            <Image
              src="/images/bar4.webp"
              alt="Executive bar"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  )
}