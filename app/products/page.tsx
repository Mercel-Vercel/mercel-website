import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solution Reports & Digital Products | Mercel",
  description: "Download premium business solution reports, coding templates, and AI guides. Privacy-first products that keep your data on your servers.",
  keywords: ["business solution reports", "research papers", "RAG pipeline Architecture", "web templates", "digital products", "AI guides", "lead generation guide", "coding templates", "privacy-first"],
};
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Business Solution Reports & Digital Products</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Each report addresses a specific business problem with a step-by-step solution.
            Valuable enough to justify the cost, comprehensive enough to help you decide
            whether to implement in-house or hire us.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Need a Custom Solution?</h2>
          <p className="mt-4 text-gray-600">
            Some problems require a tailored approach. Let's discuss your specific needs and build a custom AI automation system for your business.
          </p>
          <Link href="/services" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Explore Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}

const products = [
  {
    title: "The Automated Lead Generator",
    description: "A Complete Guide to Building Your Own Privacy-First AI Marketing System.",
    price: 45,
    link: "/products/automated-lead-generator",
  },
  {
    title: "AI-Powered Second-BrainOS",
    description: "A comprehensive guide to building your own private knowledge system with local AI. Capture, organize, distill, and express using the CODE method. No cloud required.",
    price: 18,
    link: "/products/ai-powered-second-brain-os",
  },
  {
    title: "Automate Bookkeeping w/ Local AI",
    description: "A comprehensive guide to building your own private, tax-ready financial system. Replace QuickBooks and ChatGPT with a local AI solution that keeps your data on your hardware.",
    price: 27,
    link: "/products/automate-bookkeeping-with-local-ai",
  },
  {
    title: "Custom AI Agent Setup Guide",
    description: "From scratch: Build a custom AI agent that knows your business.",
    price: 19,
    link: "/products/custom-ai-agent-setup",
  },
  {
    title: "Data Enrichment Playbook for B2B Lead Gen",
    description: "How to enrich your lead lists with AI-assisted data processing.",
    price: 19,
    link: "/products/data-enrichment-playbook",
  },
  {
    title: "RAG Pipeline Architecture for Business",
    description: "Advanced guide to building retrieval-augmented generation systems for your data.",
    price: 27,
    link: "/products/rag-pipeline-architecture",
  },
  {
    title: "Next.js Starter Template",
    description: "Production-ready template with auth, payments, and SEO optimization.",
    price: 15,
    link: "/products/nextjs-starter-template",
  },
  {
    title: "AI Prompt Library (500+ Prompts)",
    description: "Curated, tested prompts for business automation and content creation.",
    price: 9,
    link: "/products/ai-prompt-library",
  },
  {
    title: "Business Process Automation Checklist",
    description: "Identify and prioritize automation opportunities in your business.",
    price: 3,
    link: "/products/automation-checklist",
  },
];
