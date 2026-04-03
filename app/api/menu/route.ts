import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const items = await prisma.menuItem.findMany()
    return NextResponse.json(items)
  } catch (error) {
    console.error("REAL ERROR:", error)

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}