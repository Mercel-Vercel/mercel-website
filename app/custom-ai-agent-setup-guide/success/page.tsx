"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CustomAIAgentSetupGuideSuccessPage() {
  const [status, setStatus] = useState("loading");
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (sessionId) {
      fetch(`/api/verify-payment?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.verified) {
            setStatus("verified");
            setDownloadUrl("/Custom-AI-Agent-Setup-Guide.pdf");
          } else {
            setStatus("failed");
          }
        })
        .catch(() => setStatus("error"));
    } else {
      setStatus("failed");
    }
  }, []);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-[#fbfbfb] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Verifying Payment...</h1>
          <p className="text-gray-600">Please wait while we confirm your purchase.</p>
        </div>
      </main>
    );
  }

  if (status === "verified") {
    return (
      <main className="min-h-screen bg-[#fbfbfb] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Confirmed!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase. Your download is ready below.</p>
          <a
            href={downloadUrl}
            download
            className="block w-full text-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Download Your Ebook
          </a>
          <Link href="/products" className="mt-6 inline-block text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-red-800 mb-4">Payment Not Verified</h1>
        <p className="text-gray-600 mb-8">We couldn't confirm your payment. Please contact support or try again.</p>
        <Link href="/products/custom-ai-agent-setup-guide" className="inline-block text-blue-600 hover:underline">
          ← Try Again
        </Link>
      </div>
    </main>
  );
}
