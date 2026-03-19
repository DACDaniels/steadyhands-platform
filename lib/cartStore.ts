import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
  id: number
  name: string
  price: number
  image?: string
  quantity: number
}

type CartState = {
  items: CartItem[]

  // actions
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void

  // computed
  getTotal: () => number
  getCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id)

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            }
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),

      // 🔥 TOTAL PRICE
      getTotal: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),

      // 🔥 TOTAL COUNT
      getCount: () =>
        get().items.reduce(
          (count, item) => count + item.quantity,
          0
        ),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
)