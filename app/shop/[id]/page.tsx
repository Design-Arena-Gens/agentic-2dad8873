'use client'

import { notFound, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { getMerchandiseById } from '@/lib/merchandise'
import { useCart } from '@/context/CartContext'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const product = getMerchandiseById(params.id)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  
  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/shop" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-white text-center p-8">
              <div className="text-2xl font-bold">{product.name}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="border-t border-b py-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="quantity" className="font-semibold text-gray-700">
                Quantity:
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="text-lg font-semibold text-gray-700">
              Total: <span className="text-blue-600">${(product.price * quantity).toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition font-semibold text-lg"
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            
            <button
              onClick={() => {
                handleAddToCart()
                setTimeout(() => router.push('/cart'), 500)
              }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Product Details</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Authentic museum quality</li>
              <li>✓ Free shipping on orders over $50</li>
              <li>✓ 30-day return policy</li>
              <li>✓ Supports The Met's mission</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
