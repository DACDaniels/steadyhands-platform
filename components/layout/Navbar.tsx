"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi"
import Image from "next/image"

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 
          bg-white/80 backdrop-blur-md border-b border-neutral-200
        `}
      >
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
              className="flex items-center"
            >
              <Image
                src="/images/logo4.svg"
                alt="SteadyHands Logo"
                width={300}
                height={120}
                className="h-20 md:h-24 object-contain -ml-18"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

              {[
                { href: "/menu", label: "Menu" },
                { href: "/order", label: "Order Online" },
                { href: "/venue-booking", label: "Venue Booking" },
                { href: "/events", label: "Events" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group transition"
                >
                  <span
                    className={`transition ${
                      (scrolled || mobileOpen) ? "text-neutral-900" : "text-white"
                    } group-hover:text-primary`}
                  >
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
            <div className="flex items-center gap-4 ml-auto">

              {/* BOOK BUTTON */}
              <div className="hidden md:block">
                <Link href="/booking">
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
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="
                  md:hidden
                  w-11 h-11
                  flex items-center justify-center
                  rounded-full
                  bg-white text-neutral-900
                  border border-neutral-200
                  shadow-sm
                  transition-all duration-300
                  hover:scale-105
                "
              >
                {mobileOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="
          fixed inset-0 z-40
          bg-neutral-100/95 backdrop-blur-md
          flex flex-col items-center justify-center gap-8 text-xl
        ">

          {[
            { href: "/menu", label: "Menu" },
            { href: "/order", label: "Order Online" },
            { href: "/venue-booking", label: "Venue Booking" },
            { href: "/events", label: "Events" },
            { href: "/about", label: "About Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-neutral-900 hover:text-primary transition text-2xl"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/booking" onClick={() => setMobileOpen(false)}>
            <Button
              className="
                bg-primary text-white
                px-10 py-4 rounded-lg
                shadow-md
                hover:scale-105 transition-all duration-300
              "
            >
              Book Table
            </Button>
          </Link>

        </div>
      )}
    </>
  )
}