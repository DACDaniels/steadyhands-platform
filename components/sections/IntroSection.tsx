"use client"

import Image from "next/image"
import Link from "next/link"

export default function IntroSection() {
  return (
    <section className="
      bg-[#eae8e1]
      pt-20
      pb-32
      px-6
    ">

      <div className="
        max-w-5xl mx-auto
        bg-white/80 backdrop-blur-md
        rounded-2xl
        px-6 md:px-12
        py-12 md:py-16
        shadow-[0_30px_80px_rgba(0,0,0,0.12)]

        flex flex-col md:flex-row
        items-center md:items-start
        gap-10 md:gap-45
      ">

       {/* LEFT — LOGO */}
      <div className="flex-shrink-0">
        <Image
          src="/images/signature.webp"
          alt="SteadyHands"
          width={200}
          height={120}
          className="mx-auto md:mx-0"
        />
      </div>

      {/* RIGHT — TEXT + BUTTONS */}
      <div className="text-center md:text-left max-w-md">

        <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
          SteadyHands is located in Gweru at Bata Club, offering a refined,
          modern dining experience built on atmosphere, precision and
          unforgettable culinary moments.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row md:justify-start justify-center gap-4">

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

      </div>

    </section>
  )
}