"use client";

import { useState } from "react";
import Link from "next/link";

export default function LocalAIToolkitPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: "The Local AI Toolkit for Small Business",
          description: "Ready-to-use scripts, templates, and guides for leveraging local AI in your business.",
          amount: 1500, // $15.00 in cents
          successUrl: `${window.location.origin}/products/local-ai-toolkit/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/products/local-ai-toolkit`,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Products
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Local AI Toolkit for Small Business</h1>
        <p className="text-xl text-gray-600 mb-8">Ready-to-Use Tools for Leveraging Local AI in Your Business.</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-3xl font-bold text-gray-900 mb-4">$18.00</p>
          <p className="text-gray-600 mb-6">Instant download. PDF format.</p>
          
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="block w-full text-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Redirecting..." : "Buy Now"}
          </button>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Inside</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Ready-to-use scripts for common business tasks</li>
            <li>Templates for document summarization and lead scoring</li>
            <li>A guide to setting up your own local AI assistant</li>
            <li>Integration tips for Ollama, OpenClaw, and your existing tools</li>
            <li>Practical examples for small business workflows</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
