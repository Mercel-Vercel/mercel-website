"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <motion.div
          className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-300 opacity-60 blur-2xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-300 opacity-50 blur-2xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/Mercel-Logo.png"
              alt="Mercel Logo"
              width={400}
              height={224}
              priority
              className="h-auto w-64 md:w-80 mix-blend-multiply"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Your Data. Your AI.
            <span className="text-blue-600"> No Cloud Dependency.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Mercel builds privacy-first AI automation systems that run entirely on your own hardware. 
            Keep your sensitive business data on your servers while leveraging the power of local AI. 
            No subscriptions. No data mining. No compromise.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Explore Products
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
            Why Privacy-First AI?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Data Sovereignty",
                description: "Your documents, customer data, and business logic never leave your infrastructure. Complete control over your information.",
              },
              {
                title: "No Recurring Fees",
                description: "Own your AI system outright. No monthly subscriptions to cloud providers. One-time setup, lasting value.",
              },
              {
                title: "Tailored Solutions",
                description: "We build custom AI systems around your specific workflows, not generic cloud tools that don't fit your business.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Free Sample Reports</h2>
              <p className="mt-4 text-gray-600">
                Download our free reports to see the quality of our work. Each report addresses a real business problem and provides a step-by-step solution. Subscribe to get access.
              </p>
              <Link href="/samples" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                Get Free Samples
              </Link>
            </div>
            <div className="grid gap-4">
              {freeSamples.map((sample, index) => (
                <motion.div
                  key={sample.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{sample.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{sample.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="mt-1 text-sm text-gray-600">Data Stays Local</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">$0</p>
              <p className="mt-1 text-sm text-gray-600">Monthly Subscriptions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">10+</p>
              <p className="mt-1 text-sm text-gray-600">Hours Saved Weekly</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const freeSamples = [
  {
    title: "Privacy-First AI Playbook (Sample)",
    description: "Chapter 1: Why Your Business Should Stop Using Cloud AI",
    link: "/samples/privacy-first-ai-sample.pdf",
  },
  {
    title: "Business Automation Checklist",
    description: "Identify 10 processes you can automate this week.",
    link: "/samples/automation-checklist.pdf",
  },
  {
    title: "Local AI Setup Guide (Sample)",
    description: "How to install and run a local LLM on your hardware.",
    link: "/samples/local-ai-setup-sample.pdf",
  },
];
