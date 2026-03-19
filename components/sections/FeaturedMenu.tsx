"use client"

import { motion } from "framer-motion"
import DishCard from "@/components/ui/DishCard"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Grilled Steak",
    image: "/images/steak.jpg",
  },
  {
    title: "Signature Pasta",
    image: "/images/pasta.jpg",
  },
  {
    title: "Seafood Special",
    image: "/images/seafood.jpg",
  },
]

export default function FeaturedMenu() {
  return (
    <section className="relative py-36 px-6 bg-premium overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.10),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl tracking-tight">
            Featured Dishes
          </h2>

          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
            A curated selection of our finest culinary experiences.
          </p>

          {/* Divider */}
          <div className="flex justify-center mt-6">
            <div className="h-[2px] w-16 bg-primary/60"></div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <DishCard title={item.title} image={item.image} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Button
            className="
              bg-primary text-white
              px-10 py-6 text-lg rounded-full
              shadow-[0_10px_40px_rgba(180,30,30,0.35)]
              hover:scale-105 transition-all duration-300
            "
          >
            View Full Menu
          </Button>
        </motion.div>

      </div>
    </section>
  )
}