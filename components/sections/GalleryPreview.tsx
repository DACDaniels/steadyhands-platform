"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
]

export default function GalleryPreview() {
  return (
    <section className="bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-center mb-20"
        >
          Restaurant Gallery
        </motion.h2>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-3 gap-6 space-y-6">

          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl group"
            >

              <Image
                src={src}
                alt="Restaurant gallery"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}