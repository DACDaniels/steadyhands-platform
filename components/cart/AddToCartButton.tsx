"use client"

import { useCartStore } from "@/lib/cartStore"
import { motion, AnimatePresence } from "framer-motion"

type Item = {
  id: number
  name: string
  price: number
  image?: string
}

export default function AddToCartButton({ item }: { item: Item }) {
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

  const cartItem = items.find((i) => i.id === item.id)
  const quantity = cartItem?.quantity || 0

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">

        {/* ADD BUTTON */}
        {quantity === 0 ? (
          <motion.button
            key="add"
            onClick={() => addItem({ ...item, quantity: 1 })}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full 
              bg-black text-white 
              py-1.5 rounded-md
              text-xs font-medium tracking-wide
              transition-all duration-200
              shadow-md hover:bg-neutral-800
            "
          >
            Add to Cart
          </motion.button>
        ) : (

        /* QUANTITY CONTROLS */
          <motion.div
            key="counter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="
              w-full flex items-center justify-between
              bg-black text-white
              rounded-md px-3 py-1.5
              text-xs font-medium
              shadow-md
            "
          >
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-2 text-lg active:scale-90 transition"
            >
              −
            </button>

            <span className="text-sm">{quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-2 text-lg active:scale-90 transition"
            >
              +
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}