"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Signature() {
  return (
    <section className="bg-white text-black py-24 md:py-32">

      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            font-[family-name:var(--font-heading)]
            text-3xl md:text-5xl
            leading-tight
          "
        >
          SteadyHands
        </motion.h2>

        {/* LOCATION */}
        <p className="
          mt-3
          uppercase
          tracking-[0.35em]
          text-xs md:text-sm
          text-neutral-500
          font-semibold
        ">
          @ Bata Club
        </p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-8
            text-base md:text-lg
            leading-relaxed
            text-neutral-700
          "
        >
          SteadyHands Restaurant at Bata Club offers a refined dining experience
          where cuisine, atmosphere, and curated events come together to create
          something truly memorable.
        </motion.p>

        {/* DIVIDER */}
        <div className="w-12 h-[1px] bg-neutral-300 mx-auto my-8" />

        {/* CTA */}
        <Button
          asChild
          className="
            px-8 py-4 rounded-full
            bg-black text-white
            text-sm
            hover:opacity-90 transition
          "
        >
          <Link href="/order">Book a Table</Link>
        </Button>

      </div>

    </section>
  )
}