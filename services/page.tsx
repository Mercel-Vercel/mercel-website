"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <section className="border-b border-gray-200 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Freelance Work — Small, Fixed Scope Only</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I build local AI systems and maintain live web apps. I don't take open-ended contracts — only clearly defined tasks with a fixed price and delivery time. No subscriptions. No platforms that charge you to apply.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
                <span className="text-xl font-bold text-blue-600 whitespace-nowrap">{s.price}</span>
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{s.time}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proof of Work</h2>
          <p className="text-gray-600 mb-6">These are live, real projects — not mockups.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/mai-rag-pa/MAi-RAG-PA" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 shadow-sm">
              Open-Source RAG System (6 months, v2.0.0)
            </a>
            <a href="/" className="inline-block rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm">
              This Site (Live, Free Hosted)
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">No ebooks. No subscriptions. Just defined work and a fixed price.</p>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Install / Configure MAi-RAG-PA",
    price: "$250 – $400",
    time: "1 – 3 days",
    desc: "I built the open-source MAi-RAG-PA framework over 6 months. I can install and configure it on your local machine or server: Ollama setup, Qdrant vector DB, SQLite memory, document ingestion, basic Roles. You get a working private AI assistant on your own hardware — no cloud, no monthly fees.",
    tags: ["Fixed Scope", "Local AI", "No Subscriptions"],
  },
  {
    title: "RAG Document Ingestion Help",
    price: "$150 – $300",
    time: "24 – 48 hours",
    desc: "Get your PDFs, DOCX, and Markdown files into a private local knowledge base with semantic search and source citations. I handle ingestion, indexing to Qdrant, and basic query setup. Deliverable: your documents are searchable locally with citations.",
    tags: ["Fixed Scope", "No Subscription", "Quick Turnaround"],
  },
  {
    title: "Quick Fix — Web / Site Updates",
    price: "$75 – $150",
    time: "Same day – 24h",
    desc: "Small updates, migrations, content changes, or fixes to live Vercel / GitHub-hosted sites. I maintain 3 live sites myself. No open-ended work — tell me exactly what changed and I'll quote it before I touch anything.",
    tags: ["Fixed Scope", "Same-Day Option", "Live Sites Only"],
  },
  {
    title: "Custom Role / Prompt Setup for RAG",
    price: "$249 – $600",
    time: "2 – 5 days",
    desc: "I engineered the Roles system in MAi-RAG-PA (v1.7.0+): per-role memory isolation, custom system prompts, citation rules, model matching. I'll build a private specialist Role tailored to your domain — tutoring, legal review, research, or business process — that runs only on your machine.",
    tags: ["Fixed Scope", "Privacy-First", "Own It Forever"],
  },
];
