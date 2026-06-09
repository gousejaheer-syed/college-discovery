import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  request: Request,
  context: any
) {
  try {
    const params = await context.params
    const id = parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid ID' },
        { status: 400 }
      )
    }

    const college = await prisma.college.findUnique({
      where: { id: id }
    })

    if (!college) {
      return NextResponse.json(
        { success: false, error: 'College not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: college })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch college' },
      { status: 500 }
    )
  }
}