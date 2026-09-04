import Link from "next/link";

export default function AIPoweredSecondBrainEbookPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Products
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The AI-Powered Second Brain</h1>
        <p className="text-xl text-gray-600 mb-8">A Complete Guide to Building Your Own Private Knowledge System with Local AI.</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-3xl font-bold text-gray-900 mb-4">$18.00</p>
          <p className="text-gray-600 mb-6">Instant download. PDF format.</p>
          
          <a
            href="https://buy.stripe.com/14AcN54mo1b6bQPcNhgYU01"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Buy Now with Stripe
          </a>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Inside</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Complete 13-chapter methodology guide</li>
            <li>How to capture, organize, distill, and express ideas with local AI</li>
            <li>Practical examples for writers, businesses, and students</li>
            <li>Understanding the CODE method and PARA framework</li>
            <li>Integration with optional local AI (Ollama)</li>
            <li>No cloud dependency – your data stays on your devices</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
