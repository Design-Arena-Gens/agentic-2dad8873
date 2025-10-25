import { NextRequest, NextResponse } from 'next/server'
import { merchandise, searchMerchandise } from '@/lib/merchandise'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const category = searchParams.get('category')

    let results = merchandise

    if (query) {
      results = searchMerchandise(query)
    } else if (category && category !== 'All') {
      results = merchandise.filter(item => item.category === category)
    }

    return NextResponse.json(results)
  } catch (error) {
    console.error('Merchandise fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch merchandise' },
      { status: 500 }
    )
  }
}
