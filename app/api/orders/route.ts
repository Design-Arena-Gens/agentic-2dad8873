import { NextRequest, NextResponse } from 'next/server'
import { createOrder, getAllOrders } from '@/lib/orders'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { items, total, customerName, email, address, city, zipCode, country } = body

    if (!items || !total || !customerName || !email || !address || !city || !zipCode || !country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const order = createOrder({
      items,
      total,
      customerName,
      email,
      address,
      city,
      zipCode,
      country
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const orders = getAllOrders()
    return NextResponse.json(orders)
  } catch (error) {
    console.error('Orders fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}
