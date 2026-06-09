import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const location = searchParams.get('location') || ''
    const maxFees = searchParams.get('maxFees')

    const colleges = await prisma.college.findMany({
      where: {
        AND: [
          { name: { contains: search, mode: 'insensitive' } },
          location ? { location: { contains: location, mode: 'insensitive' } } : {},
          maxFees ? { fees: { lte: parseInt(maxFees) } } : {}
        ]
      },
      orderBy: { rating: 'desc' }
    })

    return NextResponse.json({ success: true, data: colleges })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch colleges' }, { status: 500 })
  }
}