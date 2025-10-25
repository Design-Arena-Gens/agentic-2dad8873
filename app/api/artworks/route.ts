import { NextRequest, NextResponse } from 'next/server'
import { artworks, searchArtworks } from '@/lib/artworks'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const department = searchParams.get('department')

    let results = artworks

    if (query) {
      results = searchArtworks(query)
    } else if (department) {
      results = artworks.filter(art => art.department === department)
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Artworks fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch artworks' },
      { status: 500 }
    )
  }
}
