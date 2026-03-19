"use client"

import { useCartStore } from "@/lib/cartStore"
import { useState } from "react"
import { motion } from "framer-motion"

type Item = {
  id: number
  name: string
  price: number
  image?: string
}

export default function AddToCartButton({ item }: { item: Item }) {
  const addItem = useCartStore((state) => state.addItem)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      ...item,
      quantity: 1
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <motion.button
      onClick={handleAdd}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className="
        relative overflow-hidden
        w-full 
        bg-primary text-primary-foreground 
        py-3 rounded-xl 
        font-semibold tracking-wide
        transition-all duration-300
        shadow-[0_8px_30px_rgba(180,30,30,0.35)]
        hover:shadow-[0_14px_50px_rgba(180,30,30,0.6)]
      "
    >

      {/* ✨ Shine animation */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">
        <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)]" />
      </span>

      {/* 🔥 Text with smooth change */}
      <span className="relative z-10">
        {added ? "Added ✓" : "Add to Cart"}
      </span>

    </motion.button>
  )
}