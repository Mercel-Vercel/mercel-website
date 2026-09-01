"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SamplesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send email to your Formspree endpoint or API
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Free Samples & Reports</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Sign up with your email to get instant access to our free sample reports. 
            No spam, ever. Just valuable content.
          </p>
        </div>
      </section>

      {/* Email Capture Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Free Samples</h2>
              <p className="text-gray-600 mb-6">
                Enter your email below and we'll send you the download links instantly.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Send Me Samples
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-green-800">Check Your Email!</h2>
              <p className="mt-4 text-green-700">
                We've sent the download links to {email}. Please check your inbox (and spam folder) for the email.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Sample Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{sample.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{sample.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const samples = [
  { id: 1, title: "Privacy-First AI Playbook (Sample)", description: "Chapter 1: Why Your Business Should Stop Using Cloud AI" },
  { id: 2, title: "Business Automation Checklist", description: "Identify 10 processes you can automate this week." },
  { id: 3, title: "Local AI Setup Guide (Sample)", description: "How to install and run a local LLM on your hardware." },
];

