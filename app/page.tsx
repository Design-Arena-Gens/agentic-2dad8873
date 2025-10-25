import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[url('https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-4">Welcome to The Met</h1>
            <p className="text-xl mb-8">
              Explore over 5,000 years of art from around the world
            </p>
            <div className="flex gap-4">
              <Link 
                href="/collection" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Collection
              </Link>
              <Link 
                href="/shop" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Shop Merchandise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Browse by Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/collection?department=11" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  European Paintings
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                    European Paintings
                  </h3>
                  <p className="text-gray-600">
                    Masterpieces from the Renaissance to Modern era
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/collection?department=1" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl font-bold">
                  American Art
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition">
                    American Art
                  </h3>
                  <p className="text-gray-600">
                    Iconic works from Colonial times to present
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/collection?department=6" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  Asian Art
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                    Asian Art
                  </h3>
                  <p className="text-gray-600">
                    Treasures from China, Japan, Korea, and beyond
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Museum Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About The Met</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With our new online platform, you can explore our collection digitally and purchase exclusive merchandise inspired by iconic works.
              </p>
              <Link 
                href="/collection" 
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Start Exploring
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg h-96 flex items-center justify-center text-white text-3xl font-bold">
              Museum Image
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
