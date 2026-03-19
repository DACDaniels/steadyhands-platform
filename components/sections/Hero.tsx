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
        className="absolute w-full h-full object-cover scale-105"
      >
        <source src="/videos/restaurant-hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* GRADIENT DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black pointer-events-none"></div>

      {/* RED AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.15),transparent_70%)] pointer-events-none"></div>

      {/* FLOATING LIGHTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-primary/10 blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">

        {/* GLOW */}
        <div className="absolute -inset-10 bg-primary/10 blur-3xl opacity-40 pointer-events-none"></div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            relative
            font-[family-name:var(--font-playfair)]
            text-4xl sm:text-6xl md:text-8xl
            font-semibold tracking-tight
            drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]
          "
        >
          SteadyHands
        </motion.h1>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-[1px] w-12 bg-primary/60"></div>

          <p className="text-primary text-sm tracking-[0.35em] uppercase font-medium">
            Bata Club
          </p>

          <div className="h-[1px] w-12 bg-primary/60"></div>
        </div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Premium dining, curated events, and unforgettable experiences in the heart of Bata Club.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center"
        >

          {/* VIEW MENU */}
          <Button
            asChild
            className="
              bg-primary text-white
              px-8 py-5 text-lg rounded-full
              shadow-[0_10px_40px_rgba(180,30,30,0.4)]
              hover:shadow-[0_15px_60px_rgba(180,30,30,0.7)]
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
              px-8 py-5 text-lg rounded-full
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-xs tracking-widest text-white/60">SCROLL</span>
        <div className="w-[1px] h-10 bg-white/40 animate-pulse"></div>
      </div>

    </section>
  )
}