"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phone = "263779293010"
  const message = encodeURIComponent(
    "Hi, I’d like to make an order from your website."
  )

  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"

      // ENTRY
      initial={{ scale: 0, opacity: 0 }}

      // 🔥 FLOATING + VISIBLE STATE
      animate={{
        scale: 1,
        opacity: 1,
        y: -4,
      }}

      // 🔥 SINGLE TRANSITION (NO DUPLICATES)
      transition={{
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}

      // INTERACTIONS
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}

      className="
        fixed bottom-20 right-6 z-50
        w-14 h-14
        rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
      "
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

      {/* Icon */}
      <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
    </motion.a>
  )
}