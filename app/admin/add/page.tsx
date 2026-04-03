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
          image: imageUrl
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

      // redirect back to dashboard after success
      setTimeout(() => {
        router.push("/admin/menu")
      }, 800)

    } catch (error) {
      console.error(error)
      setMessage("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Add New Dish
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Create a new menu item for your restaurant
          </p>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="mb-6 p-3 rounded-lg bg-green-500/10 text-green-400 text-sm">
            {message}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-neutral-900 border border-neutral-800 p-5 sm:p-6 rounded-xl"
        >

          {/* NAME */}
          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Dish Name
            </label>
            <input
              placeholder="e.g. Grilled Steak"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Description
            </label>
            <textarea
              placeholder="Short description of the dish"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="e.g. 18"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Upload Image
            </label>

            <div className="w-full border border-neutral-700 rounded-lg p-2 bg-black overflow-hidden">
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
            <div className="relative w-full h-48">
              <Image
                src={imageUrl}
                alt="preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button
              type="submit"
              disabled={loading || isUploading || !imageUrl}
              className="flex-1 bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-400 transition disabled:opacity-50"
            >
              {isUploading
                ? "Uploading..."
                : loading
                ? "Adding..."
                : "Add Dish"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/menu")}
              className="flex-1 border border-neutral-700 py-3 rounded-lg text-neutral-300 hover:bg-neutral-800 transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </main>
  )
}