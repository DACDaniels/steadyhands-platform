import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const body = await req.json()

    const item = await prisma.menuItem.create({
      data: {
        name: body.name,
        price: body.price,
        image: body.image,
        categoryId: body.categoryId
      }
    })

    return NextResponse.json(item)

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    )
  }
}