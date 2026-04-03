import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import { GalleryCategory } from "@prisma/client"

// ✅ DELETE IMAGE
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const parsedId = parseInt(id)

    if (isNaN(parsedId)) {
      return NextResponse.json(
        { error: "Invalid ID" },
        { status: 400 }
      )
    }

    const existing = await prisma.galleryImage.findUnique({
      where: { id: parsedId }
    })

    if (!existing) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: 404 }
      )
    }

    await prisma.galleryImage.delete({
      where: { id: parsedId }
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("DELETE ERROR:", error)

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    )
  }
}

// ✅ UPDATE IMAGE (caption, featured, category)
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const parsedId = parseInt(id)

    if (isNaN(parsedId)) {
      return NextResponse.json(
        { error: "Invalid ID" },
        { status: 400 }
      )
    }

    const body = await req.json()

    // ✅ PROPER TYPE-SAFE UPDATE OBJECT
    const data: Prisma.GalleryImageUpdateInput = {}

    if (typeof body.title === "string") {
      data.title = body.title
    }

    if (typeof body.featured === "boolean") {
      data.featured = body.featured
    }

    if (typeof body.category === "string") {
      data.category = body.category as GalleryCategory
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json(
        { error: "No data provided" },
        { status: 400 }
      )
    }

    const updated = await prisma.galleryImage.update({
      where: { id: parsedId },
      data
    })

    return NextResponse.json(updated)

  } catch (error) {
    console.error("UPDATE ERROR:", error)

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )
  }
}