"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type MenuItem = {
  id: number
  name: string
  description?: string
  image?: string
}

export default function FeaturedMenu() {

  const [featured, setFeatured] = useState<MenuItem[]>([])

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const res = await fetch("/api/menu/featured")

        if (!res.ok) throw new Error("Failed to fetch featured")

        const data = await res.json()
        setFeatured(data)

      } catch (err) {
        console.error("Featured fallback:", err)
        setFeatured([]) // prevents crash
      }
    }

    loadFeatured()
  }, [])

  return (
    <section className="bg-[#eae8e1] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black">
            Featured Dishes
          </h2>
          <div className="mt-4 h-[1px] w-12 bg-black/40 mx-auto" />
        </div>

        {/* ITEMS */}
        <div className="space-y-24">

          {featured.length === 0 ? (

            <p className="text-center text-neutral-400">
              Our featured dishes will be available shortly.
            </p>

          ) : (

            featured.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden">

                    <Image
                      src={item.image || ""}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* TITLE */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                        {item.name}
                      </h3>
                    </div>

                  </div>
                </div>

                {/* KEEP THE REST OF YOUR CODE EXACTLY SAME */}

              </div>
            ))

          )}

        </div>

        {/* CTA */}
        <div className="text-center mt-20 flex flex-col sm:flex-row gap-4 justify-center">

          <Link href="/menu">
            <button className="px-8 py-4 rounded-full bg-black text-white hover:bg-neutral-800 transition">
              View Menu
            </button>
          </Link>

          <Link href="/booking">
            <button className="px-8 py-4 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
              Book Table
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}