"use client"

import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">

      {/* Sidebar */}

      <aside className="w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col">

        <h1 className="text-xl font-semibold mb-10 tracking-wide">
          SteadyHands Admin
        </h1>

        <nav className="flex flex-col gap-2">

          <Link
            href="/admin"
            className="px-4 py-3 rounded-lg hover:bg-neutral-800 hover:text-yellow-400 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/menu"
            className="px-4 py-3 rounded-lg hover:bg-neutral-800 hover:text-yellow-400 transition"
          >
            Menu Manager
          </Link>

          <Link
            href="/admin/orders"
            className="px-4 py-3 rounded-lg hover:bg-neutral-800 hover:text-yellow-400 transition"
          >
            Orders
          </Link>

          <Link
            href="/admin/reservations"
            className="px-4 py-3 rounded-lg hover:bg-neutral-800 hover:text-yellow-400 transition"
          >
            Reservations
          </Link>

        </nav>

        <div className="mt-auto text-xs text-neutral-500">
          Restaurant Platform v1
        </div>

      </aside>


      {/* Main */}

      <div className="flex-1">

        <header className="border-b border-neutral-800 px-10 py-6 flex justify-between items-center">

          <h2 className="text-lg font-semibold tracking-wide">
            Admin Dashboard
          </h2>

          <span className="text-sm text-neutral-400">
            SteadyHands @ Bata Club
          </span>

        </header>

        <main className="p-10">
          {children}
        </main>

      </div>

    </div>
  )
}