"use client"

import Image from "next/image"
import Link from "next/link"

type Package = {
  name: string
  price: string
  features: string[]
  highlight?: boolean
}

const packages: Package[] = [
  {
    name: "Premium Package",
    price: "$35 per head",
    highlight: true,
    features: [
      "Screen",
      "Tables and chairs",
      "Deco",
      "Water",
      "Drinks",
      "Sweets",
      "Notebook and pen",
      "Morning tea",
      "Lunch (3 course)",
      "Afternoon tea",
    ],
  },
  {
    name: "Gold Package",
    price: "$30 per head",
    features: [
      "Screen",
      "Tables and chairs",
      "Deco",
      "Water",
      "Drinks",
      "Sweets",
      "Notebook and pen",
      "Lunch (2 course)",
      "Afternoon tea OR Morning tea",
    ],
  },
  {
    name: "Silver Package",
    price: "$25 per head",
    features: [
      "Screen",
      "Tables and chairs",
      "Deco",
      "Water",
      "Drinks",
      "Sweets",
      "Notebook and pen",
      "Lunch (1 course)",
      "Afternoon tea OR Morning tea",
    ],
  },
  {
    name: "Budget Package 1",
    price: "$20 per head",
    features: [
      "Screen",
      "Tables and chairs",
      "Deco",
      "Water",
      "Drinks",
      "Sweets",
      "Notebook and pen",
      "Lunch (1 course)",
    ],
  },
  {
    name: "Budget Package 2",
    price: "$15 per head",
    features: [
      "Screen",
      "Tables and chairs",
      "Deco",
      "Water",
      "Drinks",
      "Sweets",
      "Notebook and pen",
    ],
  },
  {
    name: "Venue Hire Only",
    price: "$5",
    features: ["Venue only (no catering included)"],
  },
]

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

      {/* MINI GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl text-center mb-12">
          Our Conference Space
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {["conf1.webp", "conf2.webp", "conf4.webp"].map((img, i) => (
            <div
              key={i}
              className="relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={`/images/${img}`}
                alt="Conference"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}

        </div>

      </section>

      {/* 🔥 NEW: PACKAGES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl text-center mb-4 font-semibold">
          Conference Packages
        </h2>

        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-16">
          Choose from our flexible conference packages or tailor one to suit your budget.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`
                rounded-2xl p-6 border
                ${pkg.highlight
                  ? "bg-white border-neutral-300 shadow-[0_25px_80px_rgba(0,0,0,0.12)] scale-[1.02]"
                  : "bg-white/80 backdrop-blur-md border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                }
              `}
            >

              <h3 className="text-xl font-semibold mb-2">
                {pkg.name}
              </h3>

              <p className={`mb-6 text-sm ${pkg.highlight ? "text-white/80" : "text-neutral-600"}`}>
                {pkg.price}
              </p>

              <ul className="space-y-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* Tailor message */}
        <p className="text-center text-neutral-600 mt-12">
          Packages can be tailor made to suit your budget.
        </p>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h3 className="text-2xl mb-4">
          Plan your next conference with us
        </h3>

        <Link href="/venue-booking">
          <button className="bg-black text-white px-8 py-4 rounded-full">
            Book Now
          </button>
        </Link>

      </section>

    </main>
  )
}