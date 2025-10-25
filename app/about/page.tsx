export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About The Met</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Metropolitan Museum of Art collects, studies, conserves, and presents significant works of art 
              across all times and cultures in order to connect people to creativity, knowledge, and ideas.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">History</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 1870, The Metropolitan Museum of Art has grown to become one of the world's largest 
                and finest art museums. Our collection spans 5,000 years of art from across the globe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over two million works in our permanent collection, The Met presents exhibitions and 
                educational programs that engage audiences of all ages and backgrounds.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Departments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• European Paintings</li>
                  <li>• American Art</li>
                  <li>• Asian Art</li>
                  <li>• Egyptian Art</li>
                  <li>• Greek and Roman Art</li>
                  <li>• Modern and Contemporary Art</li>
                  <li>• Arms and Armor</li>
                  <li>• And many more...</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">By the Numbers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>2+ Million</strong> works of art</li>
                  <li>• <strong>5,000 Years</strong> of history</li>
                  <li>• <strong>17 Curatorial</strong> departments</li>
                  <li>• <strong>Global</strong> reach and impact</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Information</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">The Met Fifth Avenue</h3>
              <p className="text-gray-700 mb-2">1000 Fifth Avenue</p>
              <p className="text-gray-700 mb-4">New York, NY 10028</p>
              
              <h4 className="font-semibold mb-2">Hours</h4>
              <p className="text-gray-700 mb-1">Sunday–Tuesday and Thursday: 10 am–5 pm</p>
              <p className="text-gray-700 mb-1">Friday and Saturday: 10 am–9 pm</p>
              <p className="text-gray-700">Closed Wednesday</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Support The Met</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Metropolitan Museum of Art is supported by generous contributions from individuals, 
              foundations, and corporations. Your support helps us preserve and share the world's greatest 
              art with present and future generations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you purchase merchandise from our shop, you directly support The Met's mission and programs.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
