"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="flex flex-col leading-tight group">
              <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-white">
                SteadyHands
              </span>

              <span className="text-[10px] md:text-xs tracking-[0.35em] text-primary uppercase">
                Bata Club
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">

              {[
                { href: "/menu", label: "Menu" },
                { href: "/order", label: "Order Online" },
                { href: "/conference-booking", label: "Venue Booking" },
                { href: "/events", label: "Events" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition"
                >
                  <span className="group-hover:text-primary transition">
                    {link.label}
                  </span>

                  {/* underline animation */}
                  <span className="
                    absolute left-0 -bottom-1 h-[1px] w-0 bg-primary
                    group-hover:w-full transition-all duration-300
                  " />
                </Link>
              ))}

            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* BOOK BUTTON */}
              <div className="hidden md:block">
                <Button
                  className="
                    bg-primary text-white
                    px-6 py-2 rounded-full
                    shadow-[0_8px_30px_rgba(180,30,30,0.35)]
                    hover:shadow-[0_12px_40px_rgba(180,30,30,0.6)]
                    hover:scale-105 transition-all duration-300
                  "
                >
                  Book Table
                </Button>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-white text-2xl"
              >
                ☰
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="
          fixed inset-0 z-40 
          bg-black/95 backdrop-blur-xl
          flex flex-col items-center justify-center gap-10 text-xl text-white
        ">

          {[
            { href: "/menu", label: "Menu" },
            { href: "/order", label: "Order Online" },
            { href: "/conference-booking", label: "Venue Booking" },
            { href: "/events", label: "Events" },
            { href: "/about", label: "About Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-primary transition text-2xl"
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE BUTTON */}
          <Button
            className="
              bg-primary text-white
              px-10 py-6 rounded-full
              shadow-[0_10px_40px_rgba(180,30,30,0.4)]
              hover:scale-105 transition-all duration-300
            "
          >
            Book Table
          </Button>

        </div>
      )}
    </>
  )
}