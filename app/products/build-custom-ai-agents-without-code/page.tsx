"use client";

import { useState } from "react";
import Link from "next/link";

export default function BuildCustomAIAgentsWithoutCodePage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: "Build Custom AI Agents Without Code",
          description: "Learn how to create powerful AI agents with drag-and-drop simplicity. No coding required.",
          amount: 2700, // $27.00 in cents
          successUrl: `${window.location.origin}/products/build-custom-ai-agents-without-code/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/products/build-custom-ai-agents-without-code`,
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Build Custom AI Agents Without Code</h1>
        <p className="text-xl text-gray-600 mb-8">A No-Code Guide to Automating Your Business.</p>
        
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <p className="text-3xl font-bold text-gray-900 mb-4">$27.00</p>
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
            <li>Complete 14-chapter guide</li>
            <li>Understanding AI agents and multi-step workflows</li>
            <li>Building agents with drag-and-drop simplicity</li>
            <li>Connecting LLMs, APIs, and databases without coding</li>
            <li>Grounding agents with RAG for accurate answers</li>
            <li>Real-world use cases: email outreach, lead scraping, content creation</li>
            <li>Deploying agents to ChatGPT, APIs, or your own infrastructure</li>
            <li>How to make money as an agent builder</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
