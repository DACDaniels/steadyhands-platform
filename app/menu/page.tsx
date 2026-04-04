import CartButton from "@/components/ui/CartButton"
import Image from "next/image"
import AddToCartButton from "@/components/cart/AddToCartButton"
import MenuTabs from "@/components/menu/MenuTabs"
import {
  Coffee,
  Utensils,
  Beef,
  Salad,
  Sandwich,
  Wine,
  IceCream,
  Baby,
  Soup,
  LucideIcon
} from "lucide-react"

const categoryIcons: Record<string, LucideIcon> = {
  Breakfast: Coffee,
  Meals: Utensils,
  Traditional: Soup,
  Salads: Salad,
  Burgers: Sandwich,
  Platters: Beef,
  Drinks: Coffee,
  Alcohol: Wine,
  Dessert: IceCream,
  Kids: Baby,
  Buffet: Utensils,
}

// FETCH
import { prisma } from "@/lib/db"

async function getMenu() {
  try {
    return await prisma.menuItem.findMany()
  } catch (error) {
    console.error("DB ERROR:", error)
    return []
  }
}

export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const items = await getMenu()

  // ✅ NEW LOGIC (SAFE ADDITION)
  const premiumItems = items.filter(item => item.image)
  const simpleItems = items

  const groupedSimpleItems = simpleItems.reduce((acc, item) => {
    const category = item.category || "Menu"

    if (!acc[category]) acc[category] = []
    acc[category].push(item)

    return acc
  }, {} as Record<string, typeof simpleItems>)

  const categories = Object.keys(groupedSimpleItems)

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

      {items.length === 0 && (
        <p className="text-center text-neutral-500 mt-10">
          Menu is currently loading. Please refresh in a moment.
        </p>
      )}

      {categories.length > 0 && <MenuTabs categories={categories} />}

      {/* GRID (UNCHANGED) */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

        {premiumItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >

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

            <div className="p-5 space-y-3">

              <div className="flex justify-between items-center">
                <h3 className="font-medium text-base md:text-lg">
                  {item.name}
                </h3>

                <span className="text-sm font-semibold text-neutral-700">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {item.description && (
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="pt-2">
                <div className="w-full [&>button]:w-full [&>button]:bg-black [&>button]:text-white [&>button]:rounded-lg [&>button]:py-2.5 [&>button]:text-sm [&>button]:font-medium [&>button]:hover:bg-neutral-800 [&>button]:transition">
                  <AddToCartButton
                    item={{
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image || undefined,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ✅ PREMIUM FULL MENU SECTION */}
      {simpleItems.length > 0 && (
        <div className="max-w-3xl mx-auto mt-24">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Full Menu
            </h2>
            <div className="mt-4 h-[1px] w-12 mx-auto bg-black/40" />
          </div>

          <div className="space-y-16">

            {Object.entries(groupedSimpleItems).map(([category, items]) => (
              <div
                key={category}
                id={category.replace(/\s+/g, "-")}
                className="scroll-mt-28"
              >

                {/* CATEGORY HEADER */}
                <div className="mb-10 flex items-center gap-3">

                  {(() => {
                    const Icon = categoryIcons[category]
                    return Icon ? (
                      <Icon className="w-5 h-5 text-black/70" />
                    ) : null
                  })()}

                  <div>
                    <h3 className="
                      text-2xl md:text-3xl 
                      font-[family-name:var(--font-heading)]
                      tracking-wide
                    ">
                      {category}
                    </h3>

                    <div className="mt-2 h-[1px] w-10 bg-black/40" />
                  </div>

                </div>

                {/* ITEMS */}
                <div className="divide-y divide-neutral-200">

                  {items.map((item) => {
                    const isPremium = item.price >= 10

                    return (
                      <div
                        key={item.id}
                        className="py-5 border-b border-neutral-200 last:border-none"
                      >

                        {/* TOP ROW */}
                        <div className="flex justify-between items-start gap-4">

                          {/* LEFT */}
                          <div className="flex-1">

                            <div className="flex items-center gap-2">

                              <h3 className="text-base md:text-lg font-medium text-black">
                                {item.name}
                              </h3>

                              {isPremium && (
                                <span className="
                                  text-[10px] px-2 py-0.5 
                                  rounded-full bg-black text-white
                                  uppercase tracking-wider
                                ">
                                  Popular
                                </span>
                              )}

                            </div>

                            {item.description && (
                              <p className="text-sm md:text-[15px] text-neutral-500 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}

                          </div>

                          {/* PRICE */}
                          <span className="text-base md:text-lg font-semibold text-black whitespace-nowrap">
                            ${item.price.toFixed(2)}
                          </span>

                        </div>

                        {/* ACTION */}
                        <div className="mt-3 flex justify-center">
                          <div className="
                            w-full max-w-[140px]
                            [&>button]:w-full
                            [&>button]:bg-black
                            [&>button]:text-white
                            [&>button]:rounded-md
                            [&>button]:py-1.5
                            [&>button]:text-xs
                            [&>button]:font-medium
                            [&>button]:hover:bg-neutral-800
                            [&>button]:transition
                          ">
                            <AddToCartButton
                              item={{
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image || undefined,
                              }}
                            />
                          </div>
                        </div>

                      </div>
                    )
                  })}

                </div>

              </div>
            ))}

          </div>

        </div>
      )}

      {/* FLOATING CART */}
      <div className="fixed bottom-6 right-6">
        <CartButton />
      </div>
      
    </main>
  )
}