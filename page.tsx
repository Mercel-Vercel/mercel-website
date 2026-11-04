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
              href="/services"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Hire Me — Small Gigs
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Products
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
                <motion.a
                  key={sample.title}
                  href={sample.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{sample.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{sample.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles & MAi-RAG-PA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-8 md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                  New · v1.7.0 Roles System
                </span>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Your AI just became a <span className="text-blue-600">team of specialists.</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  We engineer custom <strong>Roles</strong> for the open-source
                  <strong> MAi-RAG-PA</strong> framework — private AI specialists with their own
                  knowledge base, memory, personality, and rules. They run entirely on your
                  hardware. No cloud. No subscriptions.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-600">✓</span> Fine-tuned datasets engineered for retrieval</li>
                  <li className="flex gap-2"><span className="text-blue-600">✓</span> Hallucination defense &amp; conditional citations</li>
                  <li className="flex gap-2"><span className="text-blue-600">✓</span> Model matching for your workload &amp; hardware</li>
                  <li className="flex gap-2"><span className="text-blue-600">✓</span> Role-scoped memory — no cross-contamination</li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/roles"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Explore Role Creation
                  </Link>
                  <Link
                    href="/roles#pricing"
                    className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Entry", price: "$149", sub: "Tutoring · Q&A · productivity" },
                  { label: "Intermediate", price: "$449", sub: "Multi-doc · citations · domain work" },
                  { label: "Professional", price: "$1,499", sub: "Research · compliance · multi-collection" },
                  { label: "Turnkey Packages", price: "from $299", sub: "Setup + training + support" },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {t.label}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">{t.price}</p>
                    <p className="mt-1 text-xs text-gray-500">{t.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
    title: "Privacy-First-Ai-Playbook",
    description: "The complete 10-chapter guide to localized AI for business automation.",
    link: "/samples/Privacy-First-Ai-Playbook.pdf",
  },
  {
    title: "Ai-Powered-Customer-Service-Handbook",
    description: "The complete 10-chapter guide to AI-powered customer service for small businesses.",
    link: "/samples/Ai-Powered-Customer-Service-Handbook.pdf",
  },
  {
    title: "The-Small-Business-Content-Playbook",
    description: "The complete 11-chapter guide to creating engaging content that drives growth—without a marketing team.",
    link: "/samples/The-Small-Business-Content-Playbook.pdf",
  },
];
