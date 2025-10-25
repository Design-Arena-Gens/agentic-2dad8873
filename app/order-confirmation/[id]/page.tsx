import Link from 'next/link'

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
        <p className="text-lg text-gray-500 mb-8">
          Order ID: <span className="font-mono font-semibold">{params.id}</span>
        </p>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Order Confirmation Email</h3>
                <p className="text-gray-600">You'll receive an email with your order details shortly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Processing</h3>
                <p className="text-gray-600">We'll prepare your items for shipment within 1-2 business days.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Shipping</h3>
                <p className="text-gray-600">Your order will be shipped and you'll receive tracking information.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Delivery</h3>
                <p className="text-gray-600">Estimated delivery: 5-7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Questions about your order? Contact us at <a href="mailto:shop@metmuseum.org" className="text-blue-600 hover:underline">shop@metmuseum.org</a></p>
        </div>
      </div>
    </div>
  )
}
