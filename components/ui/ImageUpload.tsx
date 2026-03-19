"use client"

import { UploadButton } from "@uploadthing/react"

export default function ImageUpload({
  onUpload,
}: {
  onUpload: (url: string) => void
}) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onUpload(res[0].url)
        }
      }}
      onUploadError={(error: Error) => {
        alert(`Upload failed: ${error.message}`)
      }}
    />
  )
}