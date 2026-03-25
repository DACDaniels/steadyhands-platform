"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover scale-110"
      >
        <source src="/videos/restaurant-hero.mp4" type="video/mp4" />
      </video>

      {/* DARK BASE */}
      <div className="absolute inset-0 bg-black/80" />

      {/* GLASS DEPTH */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* GRADIENT ATMOSPHERE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />

      {/* RED AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.18),transparent_70%)]" />

      {/* FLOATING LIGHTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-52 h-52 bg-primary/20 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-24 right-10 w-64 h-64 bg-primary/10 blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            font-[family-name:var(--font-playfair)]
            text-5xl sm:text-7xl md:text-9xl
            font-semibold tracking-tight
            drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]
          "
        >
          SteadyHands
        </motion.h1>

        {/* 🔥 BRAND CENTERPIECE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center mt-6"
        >

          {/* @ SYMBOL */}
          <div className="relative flex items-center justify-center">

            <span className="
              text-3xl md:text-4xl font-bold
              bg-gradient-to-r from-red-500 via-orange-400 to-red-600
              text-transparent bg-clip-text
              tracking-widest
            ">
              @
            </span>

            {/* GLOW CORE */}
            <span className="
              absolute w-14 h-14 md:w-20 md:h-20
              bg-primary
              blur-2xl
              opacity-60
              rounded-full
              -z-10
            " />

            {/* OUTER GLOW */}
            <span className="
              absolute w-24 h-24 md:w-32 md:h-32
              bg-primary/30
              blur-3xl
              opacity-40
              rounded-full
              -z-10
            " />

          </div>

          {/* BATA CLUB */}
          <p className="
            mt-3
            text-primary
            tracking-[0.5em]
            text-sm md:text-base
            uppercase
            font-semibold
            drop-shadow-[0_0_12px_rgba(180,30,30,0.6)]
          ">
            Bata Club
          </p>

        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="
            mt-8
            text-white/80
            text-base sm:text-lg md:text-xl
            leading-relaxed
            max-w-2xl mx-auto
          "
        >
          Premium dining, curated events, and unforgettable experiences
          in the heart of Bata Club.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 flex flex-col gap-5 sm:flex-row justify-center items-center"
        >

          {/* VIEW MENU */}
          <Button
            asChild
            className="
              bg-primary text-white
              px-10 py-6 text-lg rounded-full
              shadow-[0_15px_50px_rgba(180,30,30,0.5)]
              hover:shadow-[0_20px_70px_rgba(180,30,30,0.8)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <Link href="/menu">View Menu</Link>
          </Button>

          {/* BOOK TABLE */}
          <Button
            asChild
            variant="outline"
            className="
              px-10 py-6 text-lg rounded-full
              border-white/30 text-white
              backdrop-blur-md
              hover:bg-white hover:text-black
              hover:scale-105
              transition-all duration-300
            "
          >
            <Link href="/order">Book a Table</Link>
          </Button>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-white/60">SCROLL</span>
        <div className="w-[1px] h-10 bg-white/40 animate-pulse"></div>
      </div>

    </section>
  )
}