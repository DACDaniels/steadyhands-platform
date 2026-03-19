"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryPage() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ]

  const [index, setIndex] = useState<number | null>(null)

  const next = () => {
    if (index === null) return
    setIndex((prev) => (prev! + 1) % images.length)
  }

  const prev = () => {
    if (index === null) return
    setIndex((prev) => (prev! - 1 + images.length) % images.length)
  }

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (index === null) return

      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") setIndex(null)
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [index])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,120,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 py-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-semibold">
            Our Gallery
          </h1>
          <p className="text-neutral-400 mt-3">
            A curated luxury experience.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIndex(i)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >

              <div className="relative w-full h-52 md:h-72">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

            </motion.div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* IMAGE CONTAINER */}
            <motion.div
              key={index}
              className="relative w-full max-w-5xl h-[70vh] cursor-grab active:cursor-grabbing"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) next()
                if (info.offset.x > 100) prev()
              }}
            >

              <Image
                src={images[index]}
                alt=""
                fill
                className="object-contain rounded-xl"
              />

            </motion.div>

            {/* CLOSE AREA */}
            <div
              className="absolute inset-0"
              onClick={() => setIndex(null)}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}