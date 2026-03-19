"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, Utensils, Tag } from "lucide-react"

type Item = {
  id: number
  name: string
  description?: string
  price: number
  image?: string
}

export default function MenuManager() {

  const [items, setItems] = useState<Item[]>([])
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [search, setSearch] = useState("")

  const router = useRouter()

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetch("/api/menu/items", {
        cache: "no-store"
      }).then(res => res.json())

      setItems(data)
    }

    loadItems()
  }, [])

  const deleteItem = async (id: number) => {
    await fetch(`/api/admin/menu/${id}`, {
      method: "DELETE"
    })

    setItems(prev => prev.filter(item => item.id !== id))
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="max-w-7xl mx-auto px-10 py-12">

        {/* Header */}

        <div className="flex items-center justify-between mb-12">

          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Menu Manager
            </h1>

            <p className="text-neutral-400 mt-2">
              Manage dishes, pricing and menu availability
            </p>
          </div>

          <button
            onClick={() => router.push("/admin")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-5 py-2.5 rounded-lg transition"
          >
            + Add Dish
          </button>

        </div>

        {/* Analytics Cards */}

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-sm text-neutral-400">Total Dishes</p>
            <p className="text-2xl font-semibold mt-2">{items.length}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-sm text-neutral-400">Available</p>
            <p className="text-2xl font-semibold mt-2">{items.length}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-sm text-neutral-400">Categories</p>
            <p className="text-2xl font-semibold mt-2">3</p>
          </div>

        </div>

        {/* Controls */}

        <div className="flex items-center justify-between mb-8">

          <div className="relative w-80">

            <Search
              size={16}
              className="absolute left-3 top-3 text-neutral-400"
            />

            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 w-full focus:outline-none focus:border-yellow-500"
            />

          </div>

        </div>

        {/* Table */}

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">

          <table className="w-full text-left border-collapse                                        ">

            <thead className="sticky top-0 bg-neutral-900 border-b border-neutral-800 text-sm text-neutral-400 backdrop-blur">

              <tr>
                <th className="px-6 py-4">Dish</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredItems.map(item => (

                <tr
                  key={item.id}
                  className="border-b border-neutral-800 hover:bg-neutral-800/50 hover:shadow-lg transition-all duration-200"
                >

                  {/* Dish */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-4">

                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="w-14 h-14 rounded-lg object-cover border border-neutral-800"
                        />
                      )}

                      <div className="flex flex-col">

                        <p className="font-medium flex items-center gap-2">

                          <Utensils size={14} className="text-neutral-400"/>

                          {item.name}

                        </p>

                        {item.description && (
                          <p className="text-sm text-neutral-400">
                            {item.description}
                          </p>
                        )}

                      </div>

                    </div>

                  </td>

                  {/* Price */}

                  <td className="px-6 py-4 font-semibold text-yellow-400 text-base"></td>

                  {/* Status */}

                  <td className="px-6 py-4">

                    <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full font-medium">
                      Available
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-4 text-right">

                    <div className="flex justify-end gap-3">

                      <button
                        onClick={() => router.push(`/admin/menu/edit/${item.id}`)}
                        className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1.5 rounded-lg text-sm font-medium transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-500 hover:bg-red-400 px-4 py-1.5 rounded-lg text-sm font-medium transition"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  )
}