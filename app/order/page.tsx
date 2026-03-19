"use client"

import { useCartStore } from "@/lib/cartStore"
import { motion } from "framer-motion"

export default function OrderPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const clearCart = useCartStore((state) => state.clearCart)
  const total = useCartStore((state) => state.getTotal())

  return (
    <div className="min-h-screen bg-background px-6 py-28">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-[family-name:var(--font-heading)] mb-12"
        >
          Your Order
        </motion.h1>

        {/* Empty State */}
        {items.length === 0 && (
          <p className="text-muted-foreground">Your cart is empty.</p>
        )}

        {/* Items */}
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                flex justify-between items-center 
                bg-white/5 backdrop-blur-md 
                border border-white/10 
                rounded-xl p-5
              "
            >
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-muted-foreground">
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="
                  text-sm px-4 py-2 rounded-lg 
                  bg-white/10 hover:bg-red-600 
                  transition
                "
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        {items.length > 0 && (
          <div className="mt-12">

            <div className="flex justify-between text-xl mb-6">
              <span>Total</span>
              <span className="text-primary font-semibold">
                ${total}
              </span>
            </div>

            {/* Checkout Button */}
            <button
              className="
                w-full 
                bg-primary text-white 
                py-5 rounded-full text-lg
                shadow-[0_10px_40px_rgba(180,30,30,0.4)]
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              Proceed to Checkout
            </button>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="mt-6 text-sm text-muted-foreground hover:text-red-400 transition"
            >
              Clear Cart
            </button>

          </div>
        )}

      </div>
    </div>
  )
}