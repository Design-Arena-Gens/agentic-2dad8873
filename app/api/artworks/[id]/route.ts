import { NextRequest, NextResponse } from 'next/server'
import { getArtworkById } from '@/lib/artworks'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const artwork = getArtworkById(parseInt(params.id))
    
    if (!artwork) {
      return NextResponse.json(
        { error: 'Artwork not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(artwork)
  } catch (error) {
    console.error('Artwork fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch artwork' },
      { status: 500 }
    )
  }
}
