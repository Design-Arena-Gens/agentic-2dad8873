import { CartItem } from '@/context/CartContext'

export interface Order {
  id: string
  items: CartItem[]
  total: number
  customerName: string
  email: string
  address: string
  city: string
  zipCode: string
  country: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: Date
}

// In-memory order storage (in production, this would be a database)
let orders: Order[] = []

export function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Order {
  const order: Order = {
    ...orderData,
    id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    status: 'pending',
    createdAt: new Date()
  }
  
  orders.push(order)
  return order
}

export function getOrderById(id: string): Order | undefined {
  return orders.find(order => order.id === id)
}

export function getAllOrders(): Order[] {
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function updateOrderStatus(id: string, status: Order['status']): Order | undefined {
  const order = orders.find(order => order.id === id)
  if (order) {
    order.status = status
  }
  return order
}
