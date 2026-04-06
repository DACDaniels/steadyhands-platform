"use client"

import Image from "next/image"
import Link from "next/link"

export default function GalleryPreview() {
  return (
    <section className="bg-[#eae8e1] py-24 px-4 sm:px-6 -mt-16 md:-mt-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black mb-6">
            Restaurant Gallery
          </h2>
        </div>

        {/* HERO */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden mb-6">
          <Image
            src="/images/gallery/1.webp"
            alt="Restaurant"
            fill
            className="object-cover"
          />
        </div>

        {/* TWO IMAGES */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="relative h-[180px] md:h-[240px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/gallery/22.webp"
              alt="Food"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[180px] md:h-[240px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/gallery/3.webp"
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* CTA */}
        <Link href="/gallery">
          <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden mb-6 shadow-[0_30px_80px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/gallery/4.webp"
              alt="View Gallery"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg md:text-xl tracking-wide font-medium">
                VIEW GALLERY →
              </p>
            </div>
          </div>
        </Link>

      </div>

    </section>
  )
}