"use client"

import { UploadButton } from "@uploadthing/react"
import type { OurFileRouter } from "@/app/api/uploadthing/route"
import { useState } from "react"

export default function ImageUpload({
  onUpload,
  onUploadStart,
}: {
  onUpload: (url: string) => void
  onUploadStart?: () => void
}) {

  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle")

  return (
    <div className="w-full flex flex-col items-center gap-3">

      {/* STATUS TEXT */}
      {status === "uploading" && (
        <p className="text-sm text-yellow-400 animate-pulse">
          Uploading image...
        </p>
      )}

      {status === "success" && (
        <p className="text-sm text-green-400">
          Upload complete ✓
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">
          Upload failed. Try again.
        </p>
      )}

      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"

        onUploadBegin={() => {
          setStatus("uploading")
          onUploadStart?.()
        }}

        onClientUploadComplete={(res) => {
          setStatus("success")
          onUpload(res[0].url)

          // auto reset after 2s
          setTimeout(() => setStatus("idle"), 2000)
        }}

        onUploadError={(err) => {
          console.error(err)
          setStatus("error")

          setTimeout(() => setStatus("idle"), 3000)
        }}

        appearance={{
          button: `
            bg-neutral-800 text-white px-4 py-2 rounded-lg 
            hover:bg-neutral-700 transition text-sm
          `,
        }}
      />

    </div>
  )
}