"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero.jpg"
        alt="SteadyHands Restaurant"
        fill
        priority
        className="object-cover object-center"
      />

      {/* SUBTLE OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT (CENTERED — EDITORIAL STYLE) */}
      <div className="absolute inset-0 flex items-end justify-center text-center px-6 pb-16 md:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >

          {/* TITLE */}
          <h1 className="
            font-[family-name:var(--font-heading)]
            text-white
            text-4xl sm:text-5xl md:text-6xl
            leading-tight tracking-tight
          ">
            SteadyHands
          </h1>

          {/* LOCATION */}
          <p className="
            mt-4
            text-white/80
            uppercase
            tracking-[0.35em]
            text-xs
          ">
            @ Bata Club
          </p>

        </motion.div>

      </div>

    </section>
  )
}