import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"
import { GalleryCategory } from "@prisma/client"

export async function GET() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" }
  })

  return NextResponse.json(images)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const image = await prisma.galleryImage.create({
      data: {
        url: body.url,
        category: body.category as GalleryCategory, // ✅ FIX HERE
        featured: body.featured ?? false,
        title: body.title?.trim() || null
      }
    })

    return NextResponse.json(image)

  } catch (error) {
    console.error(error) // ✅ ADD THIS FOR DEBUGGING

    return NextResponse.json(
      { error: "Failed to create image" },
      { status: 500 }
    )
  }
}