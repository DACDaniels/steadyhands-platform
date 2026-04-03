import CartButton from "@/components/ui/CartButton"
import Image from "next/image"
import AddToCartButton from "@/components/cart/AddToCartButton"

type MenuItem = {
  id: number
  name: string
  description?: string
  price: number
  image?: string
}

// FETCH
async function getMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch("http://localhost:3000/api/menu/items", {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("API ERROR:", res.status)
      return []
    }

    return res.json()
  } catch (error) {
    console.error("FETCH FAILED:", error)
    return []
  }
}

export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const items = await getMenu()

  return (
    <main className="bg-[#eae8e1] text-black py-16 md:py-20 px-4 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-14 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-light tracking-wide">
          Our Menu
        </h1>

        <div className="mt-4 h-[1px] w-12 mx-auto bg-black/30" />

        <p className="text-neutral-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Crafted dishes. Premium ingredients. Unforgettable taste.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* IMAGE */}
            {item.image && (
              <div className="relative w-full h-[200px] md:h-[220px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              {/* TITLE + PRICE */}
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-base md:text-lg">
                  {item.name}
                </h3>

                <span className="text-sm font-semibold text-neutral-700">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {/* DESCRIPTION */}
              {item.description && (
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* BUTTON (WE STYLE YOUR EXISTING COMPONENT) */}
              <div className="pt-2">
                <div className="w-full [&>button]:w-full [&>button]:bg-black [&>button]:text-white [&>button]:rounded-lg [&>button]:py-2.5 [&>button]:text-sm [&>button]:font-medium [&>button]:hover:bg-neutral-800 [&>button]:transition">
                  <AddToCartButton item={item} />
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* FLOATING CART */}
      <div className="fixed bottom-6 right-6">
        <CartButton />
      </div>

    </main>
  )
}