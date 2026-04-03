"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ParallaxShowcase() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/restaurant-new.webp"
        alt="Restaurant atmosphere"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white mb-6">
            A Culinary Atmosphere
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Every detail at SteadyHands is designed to create an unforgettable
            dining experience — from the ambiance to the cuisine.
          </p>

        </motion.div>

      </div>

    </section>
  )
}