"use client";

import { useState } from "react";
import Link from "next/link";

export default function CustomAIAgentSetupGuidePage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: "Custom AI Agent Setup Guide",
          description: "From scratch: Build a custom AI agent that knows your business.",
          amount: 2700, // $27.00 in cents
          successUrl: `${window.location.origin}/products/custom-ai-agent-setup-guide/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/products/custom-ai-agent-setup-guide`,
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom AI Agent Setup Guide</h1>
        <p className="text-xl text-gray-600 mb-8">From Scratch: Build a Custom AI Agent That Knows Your Business.</p>
        
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
            <li>Complete step-by-step guide to building a custom AI agent</li>
            <li>How to install and configure Ollama with your preferred model</li>
            <li>Connecting OpenClaw as your agent orchestrator</li>
            <li>Integrating MAi-RAG-PA for business knowledge</li>
            <li>Customizing prompts for your specific industry</li>
            <li>Deploying to your own hardware or cloud server</li>
            <li>Connecting to messaging platforms (Telegram, Discord)</li>
            <li>Maintenance, updates, and scaling strategies</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
