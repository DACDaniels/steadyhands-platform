"use client"

export default function ImageUpload({
  onUpload,
}: {
  onUpload: (url: string) => void
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Paste image URL here"
        className="border p-2 w-full"
        onBlur={(e) => {
          if (e.target.value) {
            onUpload(e.target.value)
          }
        }}
      />
    </div>
  )
}