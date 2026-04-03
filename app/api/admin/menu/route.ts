import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, price, image, description, featured } = body

    // ✅ VALIDATION
    if (!name || !price || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const item = await prisma.menuItem.create({
      data: {
        name,
        price,
        image,
        description,
        available: true,
        featured: featured ?? false
      }
    })

    return NextResponse.json(item)

  } catch (error) {
    console.error("🔥 BACKEND ERROR:", error)

    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    )
  }
}