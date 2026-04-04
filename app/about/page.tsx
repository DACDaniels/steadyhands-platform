"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center">

        <Image
          src="/images/restaurant-neww.webp"
          alt=""
          fill
          className="object-cover"
        />

        {/* soft gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            SteadyHands
          </h1>

          <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
            A refined dining experience built around atmosphere, precision,
            and unforgettable moments.
          </p>
        </motion.div>

      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Story
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-3">
            SteadyHands was created to bring together refined dining and
            intentional atmosphere — a place where every detail contributes
            to the experience.
          </p>

          <p className="text-neutral-600 leading-relaxed">
            From curated menus to the energy of the space, everything is
            designed to feel seamless, elegant, and memorable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[260px] md:h-[380px] rounded-xl overflow-hidden"
        >
          <Image
            src="/images/gallery/aboutus.webp"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>

      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

          {[
            "/images/gallery/1.webp",
            "/images/gallery/10.webp",
            "/images/gallery/3.webp",
            "/images/gallery/4.webp",
            "/images/gallery/events.webp",
            "/images/gallery/6.webp",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative h-32 md:h-56 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          The Experience
        </motion.h2>

        <p className="text-neutral-600 leading-relaxed">
          Every visit is designed to feel effortless — where atmosphere,
          service, and presentation come together in a way that feels
          natural, refined, and complete.
        </p>

      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20 text-center px-6">

        <Link href="/booking">
          <Button className="
            bg-primary text-white
            w-full sm:w-auto
            px-8 py-3
            rounded-lg
            text-sm
            hover:opacity-90
            transition
          ">
            Book a Table
          </Button>
        </Link>

      </section>

    </main>
  )
}