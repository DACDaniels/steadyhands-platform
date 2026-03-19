"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface DishCardProps {
  title: string
  image: string
}

export default function DishCard({ title, image }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[460px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Red Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
        bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.25),transparent_70%)]" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        {/* Title */}
        <h3 className="
          text-3xl 
          font-[family-name:var(--font-heading)] 
          text-white 
          translate-y-6 
          opacity-0 
          group-hover:translate-y-0 
          group-hover:opacity-100 
          transition-all duration-500
        ">
          {title}
        </h3>

        {/* Animated underline */}
        <div className="
          mt-3 h-[2px] w-0 
          bg-primary 
          group-hover:w-20 
          transition-all duration-500
        " />

      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/40 transition duration-500" />
    </motion.div>
  )
}