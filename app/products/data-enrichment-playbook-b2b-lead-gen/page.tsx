"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataEnrichmentPlaybookPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: "Data Enrichment Playbook for B2B Lead Gen",
          description: "How to enrich your lead lists with AI-assisted data processing.",
          amount: 2700, // $27.00 in cents
          successUrl: `${window.location.origin}/products/data-enrichment-playbook-b2b-lead-gen/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/products/data-enrichment-playbook-b2b-lead-gen`,
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Enrichment Playbook for B2B Lead Gen</h1>
        <p className="text-xl text-gray-600 mb-8">How to Enrich Your Lead Lists with AI-Assisted Data Processing.</p>
        
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
            <li>Complete 17-chapter guide</li>
            <li>Understanding data enrichment and its impact on revenue</li>
            <li>The advantages of localized AI solutions for data processing</li>
            <li>Building your enrichment workflow step-by-step</li>
            <li>Collecting, cleaning, and enriching your lead data</li>
            <li>Setting up AI-powered enrichment on your own hardware</li>
            <li>Validating and scoring enriched leads</li>
            <li>Real-world case studies with measurable results</li>
            <li>Privacy, compliance, and ethical considerations</li>
            <li>Scaling your enrichment strategy for growth</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
