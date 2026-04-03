"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import ImageUpload from "@/components/ui/ImageUpload"

type Item = {
  id: number
  name: string
  description?: string
  price: number
  image?: string
  featured?: boolean
}

type GalleryImage = {
  id: number
  url: string
  category: string
  featured: boolean
  title?: string
}

export default function MenuManager() {

  const [items, setItems] = useState<Item[]>([])
  const [search, setSearch] = useState("")

  // ✅ GALLERY STATES
  const [url, setUrl] = useState("")
  const [category, setCategory] = useState("FOOD")
  const [featuredImage, setFeaturedImage] = useState(false)
  const [title, setTitle] = useState("")
  const [actionModal, setActionModal] = useState<{
    type: "delete" | "save" | "toggle"
    id: number
    value?: string | boolean
  } | null>(null)
  const [loadingAction, setLoadingAction] = useState<null | "delete" | "save" | "toggle">(null)
  // ✅ NEW
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])

  const router = useRouter()

  const [toast, setToast] = useState<string | null>(null)

  const showToast = (message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 2500)
  }

  useEffect(() => {
    const loadItems = async () => {
      const res = await fetch("/api/menu/items", {
        cache: "no-store"
      })

      if (!res.ok) {
        console.error("Failed to fetch menu items")
        setItems([])
        return
      }

      let data = []

      try {
        data = await res.json()
      } catch (err) {
        console.error("Invalid JSON response", err)
        data = []
      }

    setItems(data)
    }

    loadItems()
  }, [])

  // ✅ LOAD GALLERY (NEW)
  useEffect(() => {
    const loadGallery = async () => {
      const res = await fetch("/api/gallery", {
        cache: "no-store"
      })

      const data = await res.json()
      setGalleryImages(data)
    }

    loadGallery()
  }, [])

  const deleteItem = async (id: number) => {
    await fetch(`/api/admin/menu/${id}`, {
      method: "DELETE"
    })

    setItems(prev => prev.filter(item => item.id !== id))
  }

  const toggleFeatured = async (item: Item) => {
    const res = await fetch(`/api/admin/menu/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        featured: !item.featured
      })
    })

    if (res.ok) {
      setItems(prev =>
        prev.map(i =>
          i.id === item.id
            ? { ...i, featured: !i.featured }
            : i
        )
      )
    }
  }

  // ✅ ADD GALLERY IMAGE (UNCHANGED)
  const addImage = async () => {
    if (!url) return showToast("Please add image URL")

    const res = await fetch("/api/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url,
        category,
        featured: featuredImage,
        title
      })
    })

    if (res.ok) {
      const newImage = await res.json()
      setGalleryImages(prev => [newImage, ...prev])

      showToast("Image added ✅")
      setUrl("")
      setFeaturedImage(false)
      setTitle("")
      setCategory("FOOD")
    } else {
      showToast("Failed to add image")
    }
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Admin Dashboard
            </h1>

            <p className="text-neutral-400 text-sm mt-1">
              Manage dishes and gallery
            </p>
          </div>

          <button
            onClick={() => router.push("/admin")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium transition w-full sm:w-auto"
          >
            + Add Dish
          </button>

        </div>

        {/* ✅ GALLERY UPLOAD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">

          <h2 className="text-lg font-semibold mb-4">
            Add Gallery Image
          </h2>

          <div className="mb-4">
            <ImageUpload onUpload={(uploadedUrl) => setUrl(uploadedUrl)} />
          </div>

          {url && (
            <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
              <Image src={url} alt="preview" fill className="object-cover"/>
            </div>
          )}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mb-4 p-2 bg-neutral-800 rounded"
          >
            <option value="FOOD">Food</option>
            <option value="INTERIOR">Interior</option>
            <option value="BAR">Bar</option>
            <option value="STAFF">Staff</option>
            <option value="EVENTS">Events</option>
            <option value="KIDS">Kids</option>
          </select>

          <input
            type="text"
            placeholder="Caption(Optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 bg-neutral-800 rounded"
          />

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.checked)}
            />
            <span className="text-sm">Featured Image</span>
          </div>

          <button
            onClick={addImage}
            disabled={!url}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Save Image
          </button>

        </div>

        {/* ✅ GALLERY MANAGEMENT (FINAL FIXED) */}
        <div className="mb-10">

          <h2 className="text-lg font-semibold mb-4">
            Manage Gallery Images
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {galleryImages.map(img => (

              <div key={img.id} className="bg-[#1c1c1c] rounded-xl p-4 shadow-md">

                {/* IMAGE */}
                <div className="relative w-full h-[140px] rounded-lg overflow-hidden mb-3">
                  <Image src={img.url} alt="" fill className="object-cover" />
                </div>

                {/* CAPTION */}
                <div className="relative mb-3">

                  <textarea
                    value={img.title || ""}
                    onChange={(e) =>
                      setGalleryImages(prev =>
                        prev.map(i =>
                          i.id === img.id
                            ? { ...i, title: e.target.value }
                            : i
                        )
                      )
                    }
                    rows={3}
                    className="w-full bg-[#2a2a2a] text-white text-sm p-3 rounded-lg outline-none resize-none focus:ring-2 focus:ring-yellow-400 leading-relaxed"
                    placeholder="Write caption..."
                  />

                </div>

                {/* ACTION ROW */}
                <div className="flex items-center justify-between">

                  {/* SAVE */}
                  <button
                    onClick={ () => {
                      setActionModal({
                        type: "save",
                        id: img.id,
                        value: img.title
                      })
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    Save
                  </button>

                  {/* FEATURE TOGGLE */}
                  <button
                    onClick={() => {
                      setActionModal({
                        type: "toggle",
                        id: img.id,
                        value: !img.featured
                      })
                    }}
                    className={`px-2 py-1 text-[10px] rounded-full ${
                      img.featured
                        ? "bg-yellow-400 text-black"
                        : "bg-neutral-600 text-white"
                    }`}
                  >
                    {img.featured ? "On" : "Off"}
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => 
                      setActionModal({ 
                        type: "delete", 
                        id: img.id })
                    }
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* EVERYTHING BELOW REMAINS EXACTLY SAME */}

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <p className="text-xs text-neutral-400">Total Dishes</p>
            <p className="text-xl font-semibold mt-1">{items.length}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
            <p className="text-xs text-neutral-400">Featured</p>
            <p className="text-xl font-semibold mt-1">
              {items.filter(i => i.featured).length}
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-3 text-neutral-400"/>
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 w-full focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* TABLE (UNCHANGED) */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto">

          <table className="min-w-[700px] w-full text-left">

            <tbody>

              {filteredItems.map(item => (

                <tr
                  key={item.id}
                  className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
                >

                  {/* IMAGE + NAME */}
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center gap-4">

                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover border border-neutral-800"
                        />
                      )}

                      <div>
                        <p className="font-medium">{item.name}</p>

                        {item.description && (
                          <p className="text-xs text-neutral-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                    </div>
                  </td>

                  {/* PRICE */}
                  <td className="px-4 sm:px-6 py-4 text-yellow-400 font-semibold">
                    ${item.price}
                  </td>

                  {/* FEATURE */}
                  <td className="px-4 sm:px-6 py-4">
                    <button
                      onClick={() => toggleFeatured(item)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        item.featured
                          ? "bg-yellow-500 text-black"
                          : "bg-neutral-700 text-white"
                      }`}
                    >
                      {item.featured ? "Featured" : "Not Featured"}
                    </button>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-4 sm:px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => router.push(`/admin/menu/edit/${item.id}`)}
                        className="bg-yellow-500 px-3 py-1 rounded text-black text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-500 px-3 py-1 rounded text-sm"
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

    {toast && (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-neutral-700 z-50">
        {toast}
      </div>
    )}
    {actionModal && (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">

        <div className="bg-[#1c1c1c] rounded-xl p-6 w-[90%] max-w-sm border border-neutral-800 shadow-xl">

          {/* TITLE */}
          <h2 className="text-lg font-semibold mb-2">
            {actionModal.type === "delete" && "Delete Image"}
            {actionModal.type === "save" && "Save Caption"}
            {actionModal.type === "toggle" && "Update Visibility"}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm text-neutral-400 mb-6">
            {actionModal.type === "delete" && "This action cannot be undone."}
            {actionModal.type === "save" && "Save changes to this caption?"}
            {actionModal.type === "toggle" && "Change featured status?"}
          </p>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3">

            {/* CANCEL */}
            <button
              onClick={() => setActionModal(null)}
              className="px-4 py-2 text-sm bg-neutral-700 rounded-lg hover:bg-neutral-600 transition"
            >
              Cancel
            </button>

            {/* CONFIRM */}
            <button
              onClick={async () => {

                if (!actionModal) return

                const { type, id, value } = actionModal

                setLoadingAction(type)

                try {

                  if (type === "delete") {
                    const res = await fetch(`/api/gallery/${id}`, {
                      method: "DELETE"
                    })

                    if (res.ok) {
                      setGalleryImages(prev => prev.filter(i => i.id !== id))
                      showToast("Image deleted")
                    }
                  }

                  if (type === "save") {
                    const res = await fetch(`/api/gallery/${id}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        title: (value as string)?.trim() || null
                      })
                    })

                    if (res.ok) {
                      const updated = await res.json()
                      setGalleryImages(prev =>
                        prev.map(i => i.id === id ? updated : i)
                      )
                      showToast("Caption saved")
                    }
                  }

                  if (type === "toggle") {
                    const res = await fetch(`/api/gallery/${id}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        featured: value as boolean
                      })
                    })

                    if (res.ok) {
                      const updated = await res.json()
                      setGalleryImages(prev =>
                        prev.map(i => i.id === id ? updated : i)
                      )
                      showToast("Updated")
                    }
                  }

                } catch{
                  showToast("Something went wrong")
                } finally {
                  setLoadingAction(null)
                  setActionModal(null)
                }
              }}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                actionModal.type === "delete"
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-yellow-500 text-black hover:bg-yellow-400"
              } ${loadingAction ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loadingAction === actionModal.type
                ? "Processing..."
                : actionModal.type === "delete"
                ? "Delete"
                : actionModal.type === "save"
                ? "Save"
                : "Confirm"}
            </button>

          </div>

        </div>

      </div>
    )}
    </main>
  )
}