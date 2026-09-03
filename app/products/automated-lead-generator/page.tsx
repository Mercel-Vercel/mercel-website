import Link from "next/link";

export default function AutomatedLeadGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Products
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Automated Lead Generator</h1>
        <p className="text-xl text-gray-600 mb-8">A Complete Guide to Building Your Own Privacy-First AI Marketing System.</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-3xl font-bold text-gray-900 mb-4">$45.00</p>
          <p className="text-gray-600 mb-6">Instant download. PDF format.</p>
          
          {/* Stripe Payment Button */}
          <a
            href="https://buy.stripe.com/14AfZh7yA7zuf315kPgYU04"
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
            <li>Full 10,000-word guide with step-by-step instructions</li>
            <li>Hardware selection and software setup</li>
            <li>All account configurations explained</li>
            <li>Automation workflows for lead generation</li>
            <li>Maintenance and scaling strategies</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
