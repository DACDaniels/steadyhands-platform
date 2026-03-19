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

type MenuCategory = {
  id: number
  name: string
  items: MenuItem[]
}

// ✅ TEMP DATA (NO API = NO ERRORS)
async function getMenu(): Promise<MenuCategory[]> {
  return [
    {
      id: 1,
      name: "Main Dishes",
      items: [
        {
          id: 1,
          name: "Grilled Steak",
          description: "Juicy steak cooked to perfection",
          price: 25,
          image: "/images/gallery1.jpg",
        },
        {
          id: 2,
          name: "Roasted Chicken",
          description: "Tender chicken with herbs",
          price: 18,
          image: "/images/gallery2.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Sides",
      items: [
        {
          id: 3,
          name: "French Fries",
          description: "Crispy golden fries",
          price: 5,
          image: "/images/gallery3.jpg",
        },
      ],
    },
  ]
}

export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const menu = await getMenu()

  return (
    <main className="bg-premium text-foreground py-32 px-6 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-heading)] tracking-tight">
          Our Menu
        </h1>

        <div className="mt-4 h-[2px] w-16 mx-auto bg-primary rounded-full" />

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Crafted dishes. Premium ingredients. Unforgettable taste.
        </p>
      </div>

      {menu.map((category) => (
        <section key={category.id} className="mb-28">

          {/* CATEGORY HEADER */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-1 bg-border" />

            <h2 className="text-3xl md:text-4xl font-semibold capitalize whitespace-nowrap">
              {category.name}
            </h2>

            <div className="h-[1px] flex-1 bg-border" />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-12">

            {category.items.map((item) => (
              <div
                key={item.id}
                className="group relative card-premium rounded-2xl overflow-hidden cursor-pointer"
              >

                {item.image && (
                  <div className="image-premium h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                  bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.15),transparent_70%)]" />

                <div className="p-6 space-y-4 relative z-10">

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg tracking-wide">
                      {item.name}
                    </span>

                    <span className="text-primary font-semibold text-lg">
                      ${item.price}
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  <div className="pt-3">
                    <AddToCartButton item={item} />
                  </div>

                </div>

              </div>
            ))}

          </div>
        </section>
      ))}

      <CartButton />
    </main>
  )
}