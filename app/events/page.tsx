"use client"

import Image from "next/image"

export default function EventsPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">

        <Image
          src="/images/gallery3.jpg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Events
          </h1>
        </div>

      </section>

      {/* INTRO */}
      <section className="py-16 px-6 text-center max-w-2xl mx-auto">
        <p className="text-neutral-600">
          Curated nights and experiences designed to elevate your evenings.
        </p>
      </section>

      {/* EVENTS LIST */}
      <section className="px-6 pb-20 max-w-5xl mx-auto space-y-6">

        {[
          {
            day: "Saturday",
            title: "Live Jazz Night",
            desc: "An evening of live music and atmosphere.",
          },
          {
            day: "Friday",
            title: "Wine Tasting",
            desc: "Explore curated selections and pairings.",
          },
          {
            day: "Sunday",
            title: "Chef’s Special Dinner",
            desc: "A refined multi-course dining experience.",
          },
        ].map((event, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
          >
            <p className="text-xs text-neutral-400 mb-1 uppercase tracking-wide">
              {event.day}
            </p>

            <h3 className="text-lg font-semibold mb-2">
              {event.title}
            </h3>

            <p className="text-neutral-600 text-sm">
              {event.desc}
            </p>
          </div>
        ))}

      </section>

    </main>
  )
}