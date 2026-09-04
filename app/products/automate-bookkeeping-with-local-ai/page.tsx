import Link from "next/link";

export default function AutomateBookkeepingWithLocalAIPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Products
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Automate Bookkeeping with Local AI</h1>
        <p className="text-xl text-gray-600 mb-8">A Comprehensive Guide to Building Your Own Private, Tax-Ready Financial System.</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-3xl font-bold text-gray-900 mb-4">$27.00</p>
          <p className="text-gray-600 mb-6">Instant download. PDF format.</p>
          
         <a
            href="https://buy.stripe.com/cNi6oHaKMbPKbQP6oTgYU02"
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
            <li>Complete 16-chapter guide (7,000+ words)</li>
            <li>How to import a tax-trained LLM into Ollama</li>
            <li>Deploy TaxHacker without Docker (native installation)</li>
            <li>Connect your local AI to your bookkeeping system</li>
            <li>Enhance with OpenClaw and MAi-RAG-PA</li>
            <li>Customize AI prompts for your business</li>
            <li>Complete workflow: receipt to tax report</li>
            <li>Security, compliance, and troubleshooting guidance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
