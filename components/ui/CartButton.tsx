"use client"

import { useCartStore } from "@/lib/cartStore"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export default function CartButton() {
  const router = useRouter()

  const count = useCartStore((state) =>
    state.items.reduce((c, i) => c + i.quantity, 0)
  )

  if (count === 0) return null

  return (
    <motion.button
      onClick={() => router.push("/order")}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-black text-white
        px-4 py-2.5 rounded-full
        shadow-lg
      "
    >
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Cart</span>

      <span className="
        bg-white text-black text-[10px]
        px-2 py-[2px] rounded-full
      ">
        {count}
      </span>
    </motion.button>
  )
}