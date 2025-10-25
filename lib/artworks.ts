export interface Artwork {
  id: number
  title: string
  artist: string
  date: string
  medium: string
  dimensions: string
  department: string
  culture: string
  image: string
  description: string
}

// Mock artwork database
export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Starry Night",
    artist: "Vincent van Gogh",
    date: "1889",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.1 cm",
    department: "European Paintings",
    culture: "Dutch",
    image: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    description: "One of the most recognizable pieces in modern art, Starry Night depicts the view from van Gogh's asylum room window."
  },
  {
    id: 2,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    date: "1830-1833",
    medium: "Woodblock print",
    dimensions: "25.7 cm × 37.8 cm",
    department: "Asian Art",
    culture: "Japanese",
    image: "https://images.metmuseum.org/CRDImages/as/original/DP140985.jpg",
    description: "An iconic example of Japanese art, this print depicts an enormous wave threatening boats off the coast."
  },
  {
    id: 3,
    title: "Washington Crossing the Delaware",
    artist: "Emanuel Leutze",
    date: "1851",
    medium: "Oil on canvas",
    dimensions: "378.5 cm × 647.7 cm",
    department: "American Art",
    culture: "American",
    image: "https://images.metmuseum.org/CRDImages/ad/original/DP215484.jpg",
    description: "This monumental painting commemorates General George Washington's crossing of the Delaware River."
  },
  {
    id: 4,
    title: "The Dance Class",
    artist: "Edgar Degas",
    date: "1874",
    medium: "Oil on canvas",
    dimensions: "85 cm × 75 cm",
    department: "European Paintings",
    culture: "French",
    image: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    description: "Degas captures a moment in a ballet rehearsal with his characteristic attention to detail and movement."
  },
  {
    id: 5,
    title: "Armor of George Clifford",
    artist: "Workshop of Jacob Halder",
    date: "1580-1585",
    medium: "Steel, gold, leather",
    dimensions: "Height: 175 cm",
    department: "Arms and Armor",
    culture: "English",
    image: "https://images.metmuseum.org/CRDImages/aa/original/DT773.jpg",
    description: "This magnificent suit of armor was made for George Clifford, 3rd Earl of Cumberland."
  },
  {
    id: 6,
    title: "Egyptian Mummy Mask",
    artist: "Unknown",
    date: "664-30 BCE",
    medium: "Cartonnage, gold leaf, paint",
    dimensions: "Height: 40 cm",
    department: "Egyptian Art",
    culture: "Egyptian",
    image: "https://images.metmuseum.org/CRDImages/eg/original/DT247.jpg",
    description: "This gilded mummy mask dates from the Late Period of ancient Egypt."
  },
  {
    id: 7,
    title: "Marble Statue of a Kouros",
    artist: "Unknown",
    date: "590-580 BCE",
    medium: "Marble",
    dimensions: "Height: 193 cm",
    department: "Greek and Roman Art",
    culture: "Greek",
    image: "https://images.metmuseum.org/CRDImages/gr/original/DT247.jpg",
    description: "This archaic Greek statue represents the idealized male form in early Greek sculpture."
  },
  {
    id: 8,
    title: "Chinese Garden Court",
    artist: "Various artisans",
    date: "Ming Dynasty (1368-1644)",
    medium: "Wood, stone, ceramic",
    dimensions: "Full room installation",
    department: "Asian Art",
    culture: "Chinese",
    image: "https://images.metmuseum.org/CRDImages/as/original/DT5290.jpg",
    description: "An authentic recreation of a Ming Dynasty scholar's garden court."
  }
]

export function getArtworks(department?: string): Artwork[] {
  if (!department) return artworks
  return artworks.filter(art => art.department === department)
}

export function getArtworkById(id: number): Artwork | undefined {
  return artworks.find(art => art.id === id)
}

export function searchArtworks(query: string): Artwork[] {
  const lowercaseQuery = query.toLowerCase()
  return artworks.filter(art =>
    art.title.toLowerCase().includes(lowercaseQuery) ||
    art.artist.toLowerCase().includes(lowercaseQuery) ||
    art.department.toLowerCase().includes(lowercaseQuery) ||
    art.culture.toLowerCase().includes(lowercaseQuery)
  )
}
