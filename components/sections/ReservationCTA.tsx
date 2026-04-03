"use client"

import Link from "next/link"

export default function ReservationCTA() {
  return (
    <section style={{ backgroundColor: "#1f1f1f" }} className="text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* LEFT */}
          <div>
            <p className="text-sm text-neutral-400 mb-2">Call Us</p>
            <p className="text-lg font-medium mb-4">
              +263 77 123 4567
            </p>

            <p className="text-sm text-neutral-400 mb-2">Email</p>
            <p className="text-lg font-medium mb-4">
              reservations@steadyhands.co.zw
            </p>

            <p className="text-sm text-neutral-400 mb-2">Reservations</p>
            <p className="text-lg font-medium">
              bookings@steadyhands.co.zw
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6 text-sm">

            <div className="space-y-3">
              <p className="text-neutral-400">About</p>
              <p className="text-neutral-400">Events</p>
              <p className="text-neutral-400">Menu</p>
              <p className="text-neutral-400">Contact</p>
            </div>

            <div className="space-y-3">
              <p className="text-neutral-400">Instagram</p>
              <p className="text-neutral-400">Facebook</p>
              <p className="text-neutral-400">Location</p>
              <p className="text-neutral-400">Bookings</p>
            </div>

          </div>

        </div>

        {/* CTA BLOCK */}
        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <h3 className="text-xl md:text-2xl font-medium">
            Reserve your table today
          </h3>

        <Link href="/booking">
          <button className="bg-white text-black px-6 py-3 rounded-lg text-sm hover:bg-neutral-200 transition">
            Book Now
          </button>
        </Link>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-neutral-800 mt-10 pt-6 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-4">

          <p>© 2026 SteadyHands. All rights reserved.</p>

          <div className="flex gap-4">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>

        </div>

      </div>

    </section>
  )
}