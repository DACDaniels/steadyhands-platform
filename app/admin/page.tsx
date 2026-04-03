"use client"

import ImageUpload from "@/components/ui/ImageUpload"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AdminPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState("")
  const [featured, setFeatured] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !price || !imageUrl) {
      setMessage("Please fill all required fields")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/admin/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          image: imageUrl,
          featured
        })
      })

      if (!res.ok) {
        setMessage("Error adding dish")
        setLoading(false)
        return
      }

      setMessage("Dish added successfully")

      setName("")
      setDescription("")
      setPrice("")
      setImageUrl("")

      router.refresh()

    } catch (error) {
      console.error(error)
      setMessage("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center px-3 sm:px-6 py-6">

      <div className="w-full max-w-md sm:max-w-lg">

        <h1 className="text-xl sm:text-3xl font-semibold mb-6 text-center">
          Add New Dish
        </h1>

        {message && (
          <div className="mb-4 p-3 rounded-lg bg-green-500/10 text-green-400 text-sm text-center">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-neutral-900 p-4 sm:p-6 rounded-2xl shadow-md"
        >

          {/* NAME */}
          <input
            placeholder="Dish Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-full p-3 text-sm sm:text-base rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Dish Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-full p-3 text-sm sm:text-base rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* PRICE */}
          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full max-w-full p-3 text-sm sm:text-base rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* IMAGE UPLOAD */}
          <div className="space-y-2">
            <p className="text-sm text-neutral-400">
              Upload Image
            </p>

            <div className="w-full max-w-full overflow-hidden rounded-lg border border-neutral-700 bg-black p-2">
              <ImageUpload
                onUpload={(url) => {
                  setImageUrl(url)
                  setIsUploading(false)
                }}
                onUploadStart={() => setIsUploading(true)}
              />
            </div>
          </div>

          {/* PREVIEW */}
          {imageUrl && (
            <div className="relative w-full h-40 sm:h-48">
              <Image
                src={imageUrl}
                alt="preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          {/* FEATURED TOGGLE */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 accent-yellow-500"
            />
            <label className="text-sm text-neutral-400">
              Mark as Featured Dish
            </label>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading || isUploading || !imageUrl}
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {isUploading
              ? "Uploading..."
              : loading
              ? "Adding..."
              : "Add Dish"}
          </button>

        </form>

      </div>

    </main>
  )
}