"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SamplesPage() {
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownloadClick = (sample: Sample) => {
    setSelectedSample(sample);
    setFormData({ name: "", email: "", phone: "" });
    setSuccess(false);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!selectedSample) return;
  setSubmitting(true);

  const response = await fetch("/api/send-sample", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      sample: selectedSample.title,
    }),
  });

  if (response.ok) {
    setSuccess(true);
  }
  setSubmitting(false);
};

  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Free Samples</h1>
          <p className="mt-4 text-lg text-gray-600">
            Click on a sample to download. Enter your email and we'll send you the file instantly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900">{sample.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{sample.description}</p>
                <button
                  onClick={() => handleDownloadClick(sample)}
                  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Download Free
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for download */}
      <AnimatePresence>
        {selectedSample && !success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedSample(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900">Download: {selectedSample.title}</h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your details and the download will start automatically.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="+1 555-1234"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {submitting ? "Sending..." : "Get Download"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden link for download (triggered after success) */}
      {selectedSample && success && (
        <a
          ref={downloadRef}
          href={selectedSample.fileUrl}
          download
          style={{ display: "none" }}
          aria-hidden="true"
        />
      )}

      {/* Success message after download starts */}
      {selectedSample && success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="w-full max-w-md rounded-xl bg-green-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800">Check Your Email!</h2>
            <p className="mt-4 text-green-700">
              We've sent a download link for <strong>{selectedSample.title}</strong> to {formData.email}.
              <br />
              Please check your inbox (and spam folder) to download the file.
            </p>
            <button
              onClick={() => setSelectedSample(null)}
              className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}   
    </main>
  );
}

const samples = [
  {
    title: "Privacy-First AI Playbook (Sample)",
    description: "Chapter 1: Why Your Business Should Stop Using Cloud AI",
    fileUrl: "/samples/privacy-first-ai-sample.pdf",
  },
  {
    title: "Business Automation Checklist",
    description: "Identify 10 processes you can automate this week.",
    fileUrl: "/samples/automation-checklist.pdf",
  },
  {
    title: "Local AI Setup Guide (Sample)",
    description: "How to install and run a local LLM.",
    fileUrl: "/samples/local-ai-setup-sample.pdf",
  },
];
