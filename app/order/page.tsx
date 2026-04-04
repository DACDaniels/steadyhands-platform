"use client"

import { useCartStore } from "@/lib/cartStore"
import { motion } from "framer-motion"

export default function OrderPage() {
  const items = useCartStore((state) => state.items)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const total = items.reduce(
    (t, i) => t + i.price * i.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-[#eae8e1] text-black">

      {/* HEADER */}
      <div className="px-6 pt-16 pb-6">
        <h1 className="text-3xl font-light tracking-wide">
          Your Order
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Review your items before checkout
        </p>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-32 max-w-2xl mx-auto">

        {items.length === 0 && (
          <p className="text-neutral-500 text-center mt-10">
            Your cart is empty.
          </p>
        )}

        <div className="space-y-4">

          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="
                bg-white rounded-xl p-4
                shadow-sm hover:shadow-md transition
              "
            >

              {/* TOP ROW */}
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-medium text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>

                <span className="font-semibold text-sm">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

              </div>

              {/* CONTROLS */}
              <div className="flex items-center gap-3 mt-4">

                <div className="
                  flex items-center bg-black text-white
                  rounded-md overflow-hidden
                ">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 active:scale-90 transition"
                  >
                    −
                  </button>

                  <span className="px-3 text-sm">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 active:scale-90 transition"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-500 ml-auto"
                >
                  Remove
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* STICKY CHECKOUT BAR */}
      {items.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            fixed bottom-0 left-0 w-full
            bg-white border-t
            px-6 py-4
            shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
          "
        >

          <div className="max-w-2xl mx-auto flex items-center gap-4">

            <div className="flex-1">
              <p className="text-xs text-neutral-500">
                Total
              </p>
              <p className="text-lg font-semibold">
                ${total.toFixed(2)}
              </p>
            </div>

            <button
              className="
                bg-black text-white
                px-6 py-3 rounded-full
                text-sm font-medium
                shadow-md
                active:scale-95 transition
              "
            >
              Checkout
            </button>

          </div>

        </motion.div>
      )}

    </div>
  )
}