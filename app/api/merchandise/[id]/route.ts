import { NextRequest, NextResponse } from 'next/server'
import { getMerchandiseById } from '@/lib/merchandise'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = getMerchandiseById(params.id)
    
    if (!item) {
      return NextResponse.json(
        { error: 'Merchandise item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(item)
  } catch (error) {
    console.error('Merchandise fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch merchandise item' },
      { status: 500 }
    )
  }
}
