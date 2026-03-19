"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

type Item = {
  id: number
  name: string
  description?: string
  price: number
  image?: string
}

export default function EditDish() {

  const params = useParams()
  const router = useRouter()

  const [item, setItem] = useState<Item | null>(null)

  useEffect(() => {

    const loadItem = async () => {

      const res = await fetch("/api/menu/items")
      const data = await res.json()

      const found = data.find((i: Item) => i.id === Number(params.id))

      setItem(found)

    }

    loadItem()

  }, [params.id])


  if (!item) return <p className="p-10 text-white">Loading...</p>

  return (

    <main className="min-h-screen bg-neutral-950 text-white p-10">

      <div className="max-w-xl">

        <h1 className="text-3xl font-semibold mb-6">
          Edit Dish
        </h1>

        <input
          value={item.name}
          onChange={(e) =>
            setItem({ ...item, name: e.target.value })
          }
          className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded mb-4"
        />

        <textarea
          value={item.description || ""}
          onChange={(e) =>
            setItem({ ...item, description: e.target.value })
          }
          className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded mb-4"
        />

        <input
          type="number"
          value={item.price}
          onChange={(e) =>
            setItem({ ...item, price: Number(e.target.value) })
          }
          className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded mb-6"
        />

        <div className="flex gap-4">

          <button
            onClick={async () => {

              await fetch(`/api/admin/menu/${item.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
              })

              router.push("/admin/menu")

            }}
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded"
          >
            Save Changes
          </button>

          <button
            onClick={() => router.push("/admin/menu")}
            className="bg-neutral-700 px-6 py-2 rounded"
          >
            Cancel
          </button>

        </div>

      </div>

    </main>

  )
}