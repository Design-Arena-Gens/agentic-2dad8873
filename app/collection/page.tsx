'use client'

import { useState } from 'react'
import Link from 'next/link'
import { artworks } from '@/lib/artworks'

export default function CollectionPage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredArtworks = searchQuery
    ? artworks.filter(art =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : artworks

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Art Collection</h1>
        <p className="text-gray-600 mb-6">
          Explore our curated selection of masterpieces from around the world
        </p>
        
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search artworks, artists, departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {filteredArtworks.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No artworks found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/collection/${artwork.id}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-center p-4">
                  <div className="text-sm font-semibold">{artwork.title}</div>
                  <div className="text-xs mt-2">{artwork.artist}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 mb-2">{artwork.artist}</p>
                <p className="text-sm text-gray-500">{artwork.date}</p>
                <div className="mt-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {artwork.department}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
