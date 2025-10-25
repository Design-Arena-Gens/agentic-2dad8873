'use client'

import { useState } from 'react'
import Link from 'next/link'
import { merchandise, getCategories } from '@/lib/merchandise'
import { useCart } from '@/context/CartContext'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const { addToCart } = useCart()
  const categories = ['All', ...getCategories()]
  
  const filteredMerchandise = merchandise.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (item: typeof merchandise[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Museum Shop</h1>
        <p className="text-gray-600 mb-6">
          Browse our exclusive collection of art-inspired merchandise
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredMerchandise.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMerchandise.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Link href={`/shop/${item.id}`}>
                <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-center p-4 font-semibold">
                    {item.name}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <button
                  onClick={(e) => handleAddToCart(item, e)}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
