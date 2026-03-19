"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ReservationCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-background text-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] mb-6 tracking-tight">
          Reserve Your Table
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
          Experience premium dining and unforgettable evenings at SteadyHands.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* ✅ BOOK TABLE */}
          <Button
            asChild
            className="
              bg-primary
              text-primary-foreground
              px-10 py-5
              text-lg
              rounded-full
              shadow-[0_10px_40px_rgba(180,30,30,0.35)]
              hover:bg-primary/90
              transition-all duration-300
              hover:scale-105
            "
          >
            <Link href="/order">Book a Table</Link>
          </Button>

          {/* ✅ VIEW MENU */}
          <Button
            asChild
            variant="outline"
            className="
              px-10 py-5
              text-lg
              rounded-full
              border-white/20
              text-white
              backdrop-blur-md
              hover:bg-white
              hover:text-black
              transition-all duration-300
              hover:scale-105
            "
          >
            <Link href="/menu">View Menu</Link>
          </Button>

        </div>

      </motion.div>

    </section>
  )
}