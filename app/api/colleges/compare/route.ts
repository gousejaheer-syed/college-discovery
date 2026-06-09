import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ids = searchParams.get('ids')

    if (!ids) {
      return NextResponse.json(
        { success: false, error: 'Please provide college ids' },
        { status: 400 }
      )
    }

    const idArray = ids.split(',').map((id) => parseInt(id))

    if (idArray.length < 2 || idArray.length > 3) {
      return NextResponse.json(
        { success: false, error: 'Please provide 2 or 3 college ids' },
        { status: 400 }
      )
    }

    const colleges = await prisma.college.findMany({
      where: { id: { in: idArray } }
    })

    return NextResponse.json({ success: true, data: colleges })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to compare colleges' },
      { status: 500 }
    )
  }
}