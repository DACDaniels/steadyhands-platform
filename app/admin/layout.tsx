"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const nav = [
    { name: "Dashboard", path: "/admin/menu" },
    { name: "Add Dish", path: "/admin" }
  ]

  return (
    <div className="flex min-h-screen">

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-yellow-500 text-black p-2 rounded"
      >
        <Menu size={18} />
      </button>

      {/* SIDEBAR DESKTOP */}
      <aside
        className={`
          hidden md:flex flex-col bg-neutral-900 border-r border-neutral-800 transition-all duration-300
          ${collapsed ? "w-16" : "w-64"}
        `}
      >
        <div className="flex items-center justify-between p-4">
          {!collapsed && <span className="font-semibold">Admin</span>}

          <button onClick={() => setCollapsed(!collapsed)}>
            <Menu size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          {nav.map(item => (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`
                text-left px-3 py-2 rounded-lg text-sm transition
                ${pathname === item.path
                  ? "bg-yellow-500 text-black"
                  : "hover:bg-neutral-800"}
              `}
            >
              {!collapsed ? item.name : item.name[0]}
            </button>
          ))}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-neutral-900 p-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-6"
            >
              <X />
            </button>

            <nav className="space-y-3">
              {nav.map(item => (
                <button
                  key={item.path}
                  onClick={() => {
                    router.push(item.path)
                    setMobileOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-800"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div
            className="flex-1 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1 px-4 sm:px-6 py-8 overflow-x-hidden">
        {children}
      </main>

    </div>
  )
}