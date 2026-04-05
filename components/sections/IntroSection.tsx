"use client"

import Image from "next/image"
import Link from "next/link"

export default function IntroSection() {
  return (
    <section className="bg-white text-black py-20 px-6">

      <div className="max-w-xl mx-auto text-center">

        {/* LOGO */}
        <div className="mb-8">
          <Image
            src="/images/signature.webp"
            alt="SteadyHands"
            width={180}
            height={110}
            className="mx-auto"
          />
        </div>

        {/* TEXT */}
        <p className="text-neutral-600 text-lg leading-relaxed max-w-md mx-auto">
          SteadyHands is located in Gweru at Bata Club, offering a refined,
          modern dining experience built on atmosphere, precision and
          unforgettable culinary moments.
        </p>

        {/* DIVIDER */}
        <div className="mt-8 h-[1px] w-12 bg-neutral-300 mx-auto" />

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4">

          {/* PRIMARY */}
          <Link href="/menu">
            <button className="
              px-8 py-4 rounded-full
              bg-black text-white
              text-sm tracking-wide
              hover:scale-105 transition-all duration-300
            ">
              View Menu
            </button>
          </Link>

          {/* SECONDARY */}
          <Link href="/booking">
            <button className="
              px-8 py-4 rounded-full
              border border-black text-black
              text-sm tracking-wide
              hover:bg-black hover:text-white transition-all duration-300
            ">
              Book Table
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}