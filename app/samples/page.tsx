"use client";

import { useState } from "react";

interface Sample {
  title: string;
  description: string;
  fileUrl: string;
}

export default function SamplesPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSample) return;

    const response = await fetch("/api/send-sample", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        sample: selectedSample.title,
      }),
    });

    if (response.ok) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Free Samples & Reports</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a sample, enter your details, and we'll send the download link instantly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {samples.map((sample) => (
              <div key={sample.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h2 className="text-xl font-semibold text-gray-900">{sample.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{sample.description}</p>
                <button
                  onClick={() => setSelectedSample(sample)}
                  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Request Sample
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">Get: {selectedSample.title}</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your details and we'll send the download link.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="you@example.com"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                Send Me This Sample
              </button>
            </form>
            <button
              onClick={() => setSelectedSample(null)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-green-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800">Check Your Email!</h2>
            <p className="mt-4 text-green-700">
              We've sent a download link for <strong>{selectedSample?.title}</strong> to {email}.
            </p>
            <button
              onClick={() => { setSubmitted(false); setSelectedSample(null); }}
              className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

const samples: Sample[] = [
  { title: "Privacy-First-Ai-Playbook", description: "The complete 10-chapter guide to localized AI for business automation.", fileUrl: "/samples/Privacy-First-Ai-Playbook.pdf" },
  { title: "Ai-Powered-Customer-Service-Handbook", description: "The complete 10-chapter guide to AI-powered customer service for small businesses.", fileUrl: "/samples/Ai-Powered-Customer-Service-Handbook.pdf" },
  { title: "Local AI Setup Guide", description: "How to install and run a local LLM.", fileUrl: "/samples/local-ai-setup-sample.pdf" },
];
