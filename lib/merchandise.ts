export interface MerchandiseItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  relatedArtwork?: number
}

// Mock merchandise database
export const merchandise: MerchandiseItem[] = [
  {
    id: "merch-1",
    name: "Starry Night Poster Print",
    description: "High-quality reproduction of Van Gogh's masterpiece on premium paper",
    price: 29.99,
    category: "Prints",
    image: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    relatedArtwork: 1
  },
  {
    id: "merch-2",
    name: "The Great Wave Tote Bag",
    description: "Durable canvas tote featuring Hokusai's iconic wave design",
    price: 24.99,
    category: "Accessories",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP140985.jpg",
    relatedArtwork: 2
  },
  {
    id: "merch-3",
    name: "Museum Members T-Shirt",
    description: "Comfortable cotton t-shirt with The Met logo",
    price: 32.00,
    category: "Apparel",
    image: "https://via.placeholder.com/400x400/374151/ffffff?text=Met+T-Shirt"
  },
  {
    id: "merch-4",
    name: "Art History Book Set",
    description: "Comprehensive 3-volume set covering major art movements",
    price: 89.99,
    category: "Books",
    image: "https://via.placeholder.com/400x400/7c3aed/ffffff?text=Book+Set"
  },
  {
    id: "merch-5",
    name: "Egyptian Scarab Jewelry",
    description: "Gold-plated scarab pendant inspired by ancient Egyptian artifacts",
    price: 45.00,
    category: "Jewelry",
    image: "https://images.metmuseum.org/CRDImages/eg/original/DT247.jpg",
    relatedArtwork: 6
  },
  {
    id: "merch-6",
    name: "Greek Pottery Replica",
    description: "Hand-painted ceramic replica of ancient Greek amphora",
    price: 125.00,
    category: "Home Decor",
    image: "https://images.metmuseum.org/CRDImages/gr/original/DT247.jpg",
    relatedArtwork: 7
  },
  {
    id: "merch-7",
    name: "Museum Sketchbook",
    description: "Premium quality sketchbook with 100 acid-free pages",
    price: 18.99,
    category: "Stationery",
    image: "https://via.placeholder.com/400x400/059669/ffffff?text=Sketchbook"
  },
  {
    id: "merch-8",
    name: "Impressionist Magnet Set",
    description: "Set of 12 magnets featuring famous Impressionist paintings",
    price: 15.99,
    category: "Gifts",
    image: "https://via.placeholder.com/400x400/dc2626/ffffff?text=Magnet+Set"
  },
  {
    id: "merch-9",
    name: "Art Collector's Calendar 2025",
    description: "12-month calendar featuring highlights from The Met collection",
    price: 22.00,
    category: "Stationery",
    image: "https://via.placeholder.com/400x400/ea580c/ffffff?text=2025+Calendar"
  },
  {
    id: "merch-10",
    name: "Chinese Tea Set",
    description: "Elegant porcelain tea set inspired by Ming Dynasty ceramics",
    price: 78.00,
    category: "Home Decor",
    image: "https://images.metmuseum.org/CRDImages/as/original/DT5290.jpg",
    relatedArtwork: 8
  },
  {
    id: "merch-11",
    name: "Museum Membership Annual",
    description: "Full year membership with unlimited admission and exclusive benefits",
    price: 150.00,
    category: "Memberships",
    image: "https://via.placeholder.com/400x400/2563eb/ffffff?text=Annual+Membership"
  },
  {
    id: "merch-12",
    name: "Art Postcard Collection",
    description: "Set of 20 postcards featuring iconic artworks",
    price: 12.99,
    category: "Stationery",
    image: "https://via.placeholder.com/400x400/16a34a/ffffff?text=Postcards"
  }
]

export function getMerchandise(category?: string): MerchandiseItem[] {
  if (!category) return merchandise
  return merchandise.filter(item => item.category === category)
}

export function getMerchandiseById(id: string): MerchandiseItem | undefined {
  return merchandise.find(item => item.id === id)
}

export function getCategories(): string[] {
  return Array.from(new Set(merchandise.map(item => item.category)))
}

export function searchMerchandise(query: string): MerchandiseItem[] {
  const lowercaseQuery = query.toLowerCase()
  return merchandise.filter(item =>
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery)
  )
}
