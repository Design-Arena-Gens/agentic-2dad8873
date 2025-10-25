'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { cart } = useCart()
  
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition">
            THE MET
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collection" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Collection
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="relative bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
