"use client"

import ImageUpload from "@/components/ui/ImageUpload"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Category = {
  id: number
  name: string
}

export default function AdminPage() {

  const router = useRouter()

  const [categories, setCategories] = useState<Category[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    fetch("/api/menu", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/admin/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        description,
        price: Number(price),
        categoryId: Number(categoryId),
        image: imageUrl
      })
    })

    if (!res.ok) {
      alert("Error adding dish")
      return
    }

    alert("Dish added!")

    setName("")
    setDescription("")
    setPrice("")
    setCategoryId("")
    setImageUrl("")

    router.refresh()   // refreshes menu everywhere
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl mb-10">
        Restaurant Admin
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-md"
      >

        <input
          placeholder="Dish Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-neutral-900 rounded"
        />

        <input
          placeholder="Dish Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 bg-neutral-900 rounded"
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 bg-neutral-900 rounded"
        />

        <ImageUpload onUpload={(url) => setImageUrl(url)} />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full p-3 bg-neutral-900 rounded"
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}

        </select>

        <button
          className="w-full bg-yellow-500 text-black py-3 rounded"
        >
          Add Dish
        </button>

      </form>

    </main>
  )
}