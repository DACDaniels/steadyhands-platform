"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type GalleryImage = {
  id: number
  url: string
  category?: string
  featured?: boolean
  title?: string
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [index, setIndex] = useState<number | null>(null)

  // FETCH IMAGES
  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/gallery", { cache: "no-store" })

      if (!res.ok) {
        console.error("Failed to fetch gallery")
        setImages([])
        return
      }

      let data: GalleryImage[] = []

      try {
        data = await res.json()
      } catch (err) {
        console.error("Invalid gallery JSON", err)
        data = []
      }

      const featuredOnly = data.filter((img) => img.featured === true)

      setImages(featuredOnly)
    }

    load()
  }, [])

  // EMPTY STATE
  if (!images.length) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f5f3ee]">
        <p className="text-neutral-500">No gallery images available</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-[#eae8e1] to-[#f5f3ee]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-black">
            Gallery
          </h1>

          <div className="mt-4 h-[1px] w-12 bg-black/40 mx-auto" />

          <p className="text-neutral-600 mt-6 max-w-xl mx-auto">
            A curated look into our space, atmosphere and culinary experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <motion.div
              key={img.id}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
            >
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">

                {/* IMAGE */}
                <Image
                  src={img.url}
                  alt=""
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-500" />

                {/* CAPTION */}
                {img.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                    <p className="
                     relative
                     text-white
                     text-[15px] sm:text-[16px]
                     leading-relaxed
                     font-light
                     tracking-[0.3px]
                     max-w-[90%]
                    ">
                      {img.title}
                    </p>

                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* MODAL VIEW */}
      <AnimatePresence>
        {index !== null && images[index] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
          >
            <div
              className="relative w-full max-w-5xl h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].url}
                alt=""
                fill
                className="object-contain rounded-lg"
              />

              {/* MODAL CAPTION */}
              {images[index].title && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm sm:text-base max-w-2xl">
                    {images[index].title}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}