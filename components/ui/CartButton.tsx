"use client"

import { useRouter } from "next/navigation"
import { useCartStore } from "@/lib/cartStore"

export default function CartButton() {
  const router = useRouter()
  const items = useCartStore((state) => state.items)

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <button
      onClick={() => router.push("/order")}
      className="
        fixed bottom-6 right-6 
        bg-primary text-white 
        px-6 py-3 rounded-full 
        shadow-[0_10px_40px_rgba(180,30,30,0.4)]
        hover:scale-110 transition-all duration-300
        backdrop-blur-md
      "
    >
      Cart ({count})
    </button>
  )
}