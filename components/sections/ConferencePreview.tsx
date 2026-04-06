"use client"

import Link from "next/link"

export default function ConferencePreview() {
  return (
    <section className="bg-neutral-100 py-24 px-6 text-center">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl mb-6 text-neutral-900 font-light tracking-wide">
          Conference & Corporate Events
        </h2>

        <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
          Host professional meetings, workshops and private events in a refined setting at SteadyHands.
        </p>

        <Link href="/conference">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
            Explore Conference Options
          </button>
        </Link>

      </div>

    </section>
  )
}