import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArtworkById } from '@/lib/artworks'
import { merchandise } from '@/lib/merchandise'

export default function ArtworkDetailPage({ params }: { params: { id: string } }) {
  const artwork = getArtworkById(parseInt(params.id))
  
  if (!artwork) {
    notFound()
  }

  const relatedMerchandise = merchandise.filter(
    item => item.relatedArtwork === artwork.id
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/collection" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-white text-center p-8">
              <div className="text-2xl font-bold mb-4">{artwork.title}</div>
              <div className="text-lg">{artwork.artist}</div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{artwork.artist}</p>
          
          <div className="space-y-4 mb-8">
            <div className="border-b pb-3">
              <span className="font-semibold text-gray-700">Date:</span>
              <span className="ml-3 text-gray-600">{artwork.date}</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-semibold text-gray-700">Medium:</span>
              <span className="ml-3 text-gray-600">{artwork.medium}</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-semibold text-gray-700">Dimensions:</span>
              <span className="ml-3 text-gray-600">{artwork.dimensions}</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-semibold text-gray-700">Department:</span>
              <span className="ml-3 text-gray-600">{artwork.department}</span>
            </div>
            <div className="border-b pb-3">
              <span className="font-semibold text-gray-700">Culture:</span>
              <span className="ml-3 text-gray-600">{artwork.culture}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">About this artwork</h2>
            <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
          </div>
        </div>
      </div>

      {relatedMerchandise.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Related Merchandise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedMerchandise.map((item) => (
              <Link
                key={item.id}
                href={`/shop/${item.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{item.name}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
