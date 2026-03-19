import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {

  const categories = await prisma.menuCategory.findMany({
    include: {
      items: true
    },
    orderBy: {
      id: "asc"
    }
  })

  return NextResponse.json(categories)
}