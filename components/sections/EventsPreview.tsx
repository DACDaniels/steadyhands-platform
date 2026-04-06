"use client"
import Link from "next/link"
export default function EventsPreview() {
  return (
    <section className="relative py-28 px-6 bg-[#eae8e1]">

      {/* TOP FADE (ADD THIS HERE) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#eae8e1]" />

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center text-[#1a1a1a] mb-6">
          Upcoming Events
        </h2>

        {/* SUBTEXT */}
        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-16">
          Curated experiences designed to elevate your evenings.
        </p>

        {/* EVENTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* EVENT 1 */}
          <div className="
            bg-white/80 backdrop-blur-md
            rounded-2xl p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            border border-white/40
            transition hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          ">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              SATURDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Live Jazz Night
            </h3>
            <p className="text-sm text-neutral-600">
              An evening of live music and atmosphere.
            </p>
          </div>

          {/* EVENT 2 */}
          <div className="
              bg-white/80 backdrop-blur-md
              rounded-2xl p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              border border-white/40
              transition hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            ">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              FRIDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Wine Tasting
            </h3>
            <p className="text-sm text-neutral-600">
              Explore curated selections and pairings.
            </p>
          </div>

          {/* EVENT 3 */}
          <div className="
            bg-white/80 backdrop-blur-md
            rounded-2xl p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            border border-white/40
            transition hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
          ">
            <p className="text-xs text-[#8a8a8a] mb-3 tracking-wide">
              SUNDAY
            </p>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
              Chef’s Special Dinner
            </h3>
            <p className="text-sm text-[#6b6b6b]">
              A signature dining experience for the weekend.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/events">
          <button className="bg-black text-white px-6 py-3 rounded-full px-8 py-3 text-sm hover:bg-neutral-800 transition">
            View All Events
          </button>
          </Link>
        </div>

      </div>

    </section>
  )
}