export const dynamic = "force-dynamic"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {

  const items = await prisma.menuItem.findMany({
    orderBy: {
      id: "asc"
    }
  })

  return NextResponse.json(items)
}