import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const items = await prisma.menuItem.findMany({
      where: { featured: true },
      take: 4
    })

    return NextResponse.json(items ?? [])

  } catch (error) {
    console.error("🔥 FEATURED ERROR:", error)

    return NextResponse.json(
      { error: "Something broke" },
      { status: 500 }
    )
  }
}