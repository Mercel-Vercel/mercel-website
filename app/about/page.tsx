import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Mercel</h1>
        <section className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600">
            Mercel is a privacy-first AI automation company. We build custom AI systems that run entirely on your own hardware, ensuring your sensitive business data never leaves your servers.
          </p>
          <p className="mt-4 text-gray-600">
            Our founder created <strong>MAi-RAG-PA</strong>, an open-source AI framework designed for local, private AI applications. We leverage this framework to deliver tailored solutions for businesses of all sizes.
          </p>
          <p className="mt-4 text-gray-600">
            We believe that AI should be a tool that works for you, not a black box that mines your data. That's why every solution we build is private, secure, and fully owned by you.
          </p>
        </section>
        <div className="mt-8">
          <Link href="/services" className="text-blue-600 hover:underline">
            Learn about our services →
          </Link>
        </div>
      </div>
    </main>
  );
}


// app/contact/page.tsx

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Send Message
            </button>
          </form>
        ) : (
          <div className="rounded-lg bg-green-50 p-6 text-green-800">
            <h2>Thank you!</h2>
            <p>We'll get back to you within 24 hours.</p>
          </div>
        )}
      </div>
    </main>
  );
}
