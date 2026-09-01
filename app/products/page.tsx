"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Business Solution Reports</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Each report addresses a specific business problem with a step-by-step solution. 
            Valuable enough to justify the cost, comprehensive enough to help you decide whether to implement in-house or hire us.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <Link
                    href={product.link}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Buy Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const products = [
  {
    id: 1,
    title: "The Privacy-First AI Playbook",
    description: "How to Automate Your Business Without Cloud Dependency. Complete guide with implementation steps.",
    price: 9,
    link: "/products/privacy-first-ai-playbook",
  },
  {
    id: 2,
    title: "AI-Powered Lead Qualification System",
    description: "Step-by-step guide to building an automated lead scoring and response system.",
    price: 9,
    link: "/products/ai-lead-qualification",
  },
  {
    id: 3,
    title: "Automate Your Bookkeeping with Local AI",
    description: "Detailed guide to setting up local AI for bookkeeping and financial tasks.",
    price: 9,
    link: "/products/local-ai-bookkeeping",
  },
  {
    id: 4,
    title: "Custom AI Agent Setup Guide",
    description: "From scratch: Build a custom AI agent that knows your business.",
    price: 19,
    link: "/products/custom-ai-agent-setup",
  },
  {
    id: 5,
    title: "Data Enrichment Playbook for B2B Lead Gen",
    description: "How to enrich your lead lists with AI-assisted data processing.",
    price: 19,
    link: "/products/data-enrichment-playbook",
  },
  {
    id: 6,
    title: "RAG Pipeline Architecture for Business",
    description: "Advanced guide to building retrieval-augmented generation systems for your data.",
    price: 27,
    link: "/products/rag-pipeline-architecture",
  },
  {
    id: 7,
    title: "Next.js Starter Template",
    description: "Production-ready template with auth, payments, and SEO optimization.",
    price: 15,
    link: "/products/nextjs-starter-template",
  },
  {
    id: 8,
    title: "AI Prompt Library (500+ Prompts)",
    description: "Curated, tested prompts for business automation and content creation.",
    price: 9,
    link: "/products/ai-prompt-library",
  },
  {
    id: 9,
    title: "Business Process Automation Checklist",
    description: "Identify and prioritize automation opportunities in your business.",
    price: 3,
    link: "/products/automation-checklist",
  },
  {
    id: 10,
    title: "Custom Development Service",
    description: "Have a specific problem? Let's build a custom solution for your business.",
    price: 100,
    link: "/services",
  },
];
