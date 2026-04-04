"use client"

import { useEffect, useState } from "react"

export default function MenuTabs({ categories }: { categories: string[] }) {

  const allCategories = ["All", ...categories]
  const [active, setActive] = useState("All")

  useEffect(() => {
    const handleScroll = () => {
      let current = "All"

      for (const category of categories) {
        const el = document.getElementById(category.replace(/\s+/g, "-"))
        if (!el) continue

        const rect = el.getBoundingClientRect()

        if (rect.top <= 120) {
          current = category
        }
      }

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [categories])

  const scrollTo = (category: string) => {
    if (category === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const el = document.getElementById(category.replace(/\s+/g, "-"))
    if (!el) return

    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="
      sticky top-0 z-40
      bg-[#eae8e1]/80 backdrop-blur-xl
      border-b border-neutral-200
      shadow-[0_8px_30px_rgba(0,0,0,0.05)]
    ">
      <div className="
        max-w-6xl mx-auto
        flex gap-4 md:gap-6
        overflow-x-auto px-4 py-4
        scrollbar-hide
      ">

        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => scrollTo(category)}
            className={`
              whitespace-nowrap px-3 md:px-4 pb-2
              text-sm md:text-base
              transition-all duration-300

              ${active === category 
                ? "text-black border-b-2 border-black font-semibold tracking-wide"
                : "text-neutral-500 hover:text-black"}
            `}
          >
            {category}
          </button>
        ))}

      </div>
    </div>
  )
}