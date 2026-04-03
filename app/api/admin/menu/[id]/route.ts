import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await context.params
    const body = await request.json()

    const updated = await prisma.menuItem.update({
      where: {
        id: Number(id)
      },
      data: {
        ...(body.name !== undefined && { name: body.name }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.price !== undefined && { price: body.price }),
        ...(body.featured !== undefined && { featured: body.featured }),
      }
    })

    return NextResponse.json(updated)

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    )

  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await context.params

    await prisma.menuItem.delete({
      where: {
        id: Number(id)
      }
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    )
  }
}