"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We build custom, privacy-first AI automation systems for businesses that want to keep their data on their own servers. 
            From document processing to full AI agents, we handle the technical complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <p className="text-2xl font-bold text-gray-900">${service.price}</p>
                  <p className="text-sm text-gray-500">{service.deliverable}</p>
                  <p className="text-sm text-gray-500 mt-1">{service.timeline}</p>
                </div>
                <Link href="/contact" className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Request a Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Automate?</h2>
          <p className="mt-4 text-gray-600">
            Let's discuss how we can build a custom AI solution for your business. Free 15-minute consultation.
          </p>
          <Link href="/contact" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Document Summarization",
    description: "Upload your PDFs and we'll deliver a structured summary with key points, timelines, and insights.",
    price: 150,
    deliverable: "Structured summary (PDF/DOCX)",
    timeline: "24-48 hours",
  },
  {
    title: "Data Extraction from PDFs",
    description: "Extract key data points from contracts, reports, and documents into CSV/Excel format.",
    price: 200,
    deliverable: "CSV/Excel with key data points",
    timeline: "2-3 days",
  },
  {
    title: "White Paper (15-20 pages)",
    description: "Research-backed white paper with citations on your specific industry topic.",
    price: 750,
    deliverable: "Professional report with citations",
    timeline: "5 business days",
  },
  {
    title: "Custom AI Agent (Customer Service)",
    description: "Build a chatbot using MAi-RAG-PA that's trained on your business data.",
    price: 1500,
    deliverable: "Chatbot using MAi-RAG-PA",
    timeline: "1-2 weeks",
  },
  {
    title: "Custom AI Agent (Lead Qualification)",
    description: "Automated lead scoring and response system that knows your business.",
    price: 2000,
    deliverable: "Automated lead scoring and response",
    timeline: "2-3 weeks",
  },
  {
    title: "Business Process Automation",
    description: "Multiple workflows automated (bookkeeping, email, data entry, etc.).",
    price: 3000,
    deliverable: "Multiple workflows automated",
    timeline: "3-6 weeks",
  },
];

