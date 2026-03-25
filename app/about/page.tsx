"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">

        {/* Background */}
        <Image
          src="/images/gallery1.jpg"
          alt=""
          fill
          className="object-cover scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.25),transparent_70%)]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-heading)] tracking-tight">
            SteadyHands
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            A refined dining experience crafted for those who appreciate
            excellence, atmosphere, and unforgettable moments.
          </p>
        </motion.div>

      </section>

      {/* ================= STORY ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Story
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            SteadyHands is more than a restaurant — it is an experience.
            Built on passion, precision, and creativity, every detail is
            designed to deliver a sense of luxury and comfort.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            From carefully curated menus to immersive ambiance, we aim to
            create moments that stay with you long after you leave.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/gallery2.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>

      </section>

      {/* ================= LUXURY GRID ================= */}
      <section className="px-6 pb-28">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">

          {[
            "/images/gallery1.jpg",
            "/images/gallery2.jpg",
            "/images/gallery3.jpg",
            "/images/gallery4.jpg",
            "/images/gallery5.jpg",
            "/images/gallery6.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative h-40 md:h-64 rounded-xl overflow-hidden group"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-28 px-6 text-center max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          The Experience
        </motion.h2>

        <p className="text-muted-foreground leading-relaxed">
          Every visit to SteadyHands is curated — from the atmosphere to the
          service, from the lighting to the plating. We don’t just serve food,
          we create an environment where every detail matters.
        </p>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">

        <Link href="/order">
          <Button className="
            bg-primary text-white 
            px-10 py-5 
            text-lg 
            rounded-full 
            shadow-[0_10px_40px_rgba(180,30,30,0.35)]
            hover:scale-105 
            transition-all duration-300
          ">
            Book a Table
          </Button>
        </Link>

      </section>

    </main>
  )
}