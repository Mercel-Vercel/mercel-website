"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <motion.div
          className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-300 opacity-50 blur-2xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-indigo-300 opacity-40 blur-2xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <span className="inline-block mb-5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            v1.7.0 · Role Creation Services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Custom AI Roles.
            <span className="text-blue-600"> Built for your data.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We engineer private AI specialists for the open-source MAi-RAG-PA framework —
            fine-tuned datasets, strict system prompts, hallucination defense, and model matching.
            They run entirely on your hardware. No cloud. No subscriptions. You own them forever.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#tiers"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              See the Tiers
            </Link>
            <Link
              href="#pricing"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            The Problem With &ldquo;DIY&rdquo; Role Creation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            MAi-RAG-PA is free and open source. You can install it today. Here&rsquo;s what most users
            discover within the first week.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold text-gray-900">What they expected</th>
                  <th className="px-5 py-4 font-semibold text-gray-900">What actually happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-5 py-4 text-gray-500">&ldquo;I&rsquo;ll just paste my PDFs and it works.&rdquo;</td>
                  <td className="px-5 py-4 text-gray-700">
                    Chunk size, overlap, and metadata tagging must match the document structure —
                    a legal contract needs different chunking than a textbook.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-gray-500">&ldquo;I&rsquo;ll write a quick system prompt.&rdquo;</td>
                  <td className="px-5 py-4 text-gray-700">
                    Hallucination prevention requires conditional citation rules, anti-fabrication
                    clauses, and strict role boundaries. Generic prompts fail on day two.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-gray-500">&ldquo;I&rsquo;ll use whatever model is installed.&rdquo;</td>
                  <td className="px-5 py-4 text-gray-700">
                    A 30B MoE model works for research synthesis but chokes on rapid Q&amp;A; a 7B
                    model is fast but misses nuance. Matching model to workload is critical.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-gray-500">&ldquo;It&rsquo;ll remember what I tell it.&rdquo;</td>
                  <td className="px-5 py-4 text-gray-700">
                    Role-scoped memory must be seeded, tagged, and isolated — otherwise facts leak
                    between roles and corrupt the specialist&rsquo;s context.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-gray-700">
            <strong>Role Creation is not a configuration task. It&rsquo;s a data engineering and prompt
            architecture task.</strong> We do the engineering. You get the specialist.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">The Three Tiers</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            Every Role is custom. The depth of engineering scales with dataset complexity,
            behavioral precision, and retrieval reliability.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                  tier.featured ? "border-blue-500 ring-1 ring-blue-100" : "border-gray-200"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${tier.badgeClass}`}
                >
                  {tier.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{tier.bestFor}</p>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  ${tier.price}
                  <span className="ml-1 text-sm font-normal text-gray-500">one-time</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  {tier.turnaround}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Use Case Catalog — By Field
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            From a child&rsquo;s math homework to medical literature review — there&rsquo;s a Role for
            every need.
          </p>

          {useCaseGroups.map((group) => (
            <div key={group.title} className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{group.description}</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.cases.map((uc) => (
                  <div
                    key={uc.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-300"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900">{uc.title}</h4>
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tierPillClasses[uc.tier]}`}
                      >
                        {uc.tier}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{uc.what}</p>
                    <p className="mt-2 text-xs italic text-gray-500">{uc.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Pricing Schedule</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            One-time build fees. No per-token costs. No subscriptions to run your Role.
          </p>

          <h3 className="mt-12 text-lg font-semibold text-gray-900">One-Time Role Creation</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold text-gray-900">Tier</th>
                  <th className="px-5 py-4 font-semibold text-gray-900">Included</th>
                  <th className="px-5 py-4 font-semibold text-gray-900">Price</th>
                  <th className="px-5 py-4 font-semibold text-gray-900">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingRows.map((r) => (
                  <tr key={r.tier}>
                    <td className="px-5 py-4 font-semibold text-gray-900">{r.tier}</td>
                    <td className="px-5 py-4 text-gray-600">{r.included}</td>
                    <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">{r.price}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-lg font-semibold text-gray-900">Add-Ons</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {addOns.map((a) => (
              <li
                key={a.label}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm"
              >
                <span className="text-gray-700">{a.label}</span>
                <span className="font-semibold text-gray-900">{a.price}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-lg font-semibold text-gray-900">Ongoing Support (Optional)</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {supportPlans.map((p) => (
              <div key={p.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <h4 className="font-semibold text-gray-900">{p.name}</h4>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {p.price}
                  <span className="ml-1 text-sm font-normal text-gray-500">/mo</span>
                </p>
                <p className="mt-3 text-sm text-gray-600">{p.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Why These Prices Work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {objections.map((o) => (
              <div
                key={o.q}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold text-gray-900">{o.q}</p>
                <p className="mt-2 text-sm text-gray-600">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Packages */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Turnkey Packages</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            For clients who want more than one Role — or a complete private assistant setup.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-3xl font-bold text-blue-600">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xl italic text-gray-700">
            &ldquo;You download MAi-RAG-PA for free. We turn it into a specialist that knows your data,
            follows your rules, and never phones home — for less than the cost of a single consultant
            hour.&rdquo;
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Request a Role Build
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              See Other Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- data ---------- */

const tiers = [
  {
    name: "General Entry Level",
    tag: "Tier 1",
    badgeClass: "bg-green-50 text-green-700",
    bestFor: "Tutoring · general Q&A · personal productivity · summarization",
    price: 149,
    featured: false,
    features: [
      "System prompt tuned for tone & expertise",
      "Basic anti-hallucination rules",
      "Single Qdrant collection",
      "Recommended model (7B–14B dense)",
      "Tested with 10 sample queries",
    ],
    turnaround: "1–2 days · You provide 1–3 documents",
  },
  {
    name: "Intermediate",
    tag: "Tier 2",
    badgeClass: "bg-amber-50 text-amber-700",
    bestFor: "Domain work · multi-document reasoning · citation-sensitive tasks",
    price: 449,
    featured: true,
    features: [
      "Everything in Entry, plus:",
      "Fine-tuned chunking strategy",
      "Conditional citation rules (page-level)",
      "Role-scoped memory seeding",
      "Retrieval threshold tuning",
      "Model comparison (2–3 models)",
      "Tested with 25 queries & edge cases",
    ],
    turnaround: "3–5 days · You provide 5–20 documents",
  },
  {
    name: "Professional",
    tag: "Tier 3",
    badgeClass: "bg-red-50 text-red-700",
    bestFor: "Research-grade · high-stakes decisions · heterogeneous corpora",
    price: 1499,
    featured: false,
    features: [
      "Everything in Intermediate, plus:",
      "Multi-collection architecture",
      "Advanced metadata schema",
      "Full citation & reference pipeline",
      "Adversarial testing",
      "50-query hallucination audit",
      "Model fine-tuning recommendations",
      "Deployment documentation",
      "30-day support included",
    ],
    turnaround: "7–14 days · You provide 20+ documents",
  },
];

const tierPillClasses: Record<string, string> = {
  Entry: "bg-green-50 text-green-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Professional: "bg-red-50 text-red-700",
};

const useCaseGroups = [
  {
    title: "🎓 Education",
    description: "From grade school to graduate research.",
    cases: [
      { title: "Grade-School Math Tutor", tier: "Entry", what: "Step-by-step solutions from a specific curriculum.", why: "Runs 24/7 for a one-time fee — vs. $40/hr human tutors." },
      { title: "High-School Science Assistant", tier: "Entry", what: "Explains concepts from a specific textbook, cites chapters.", why: "Aligned to the exact textbook the student uses." },
      { title: "University Research Assistant", tier: "Intermediate", what: "Synthesizes 20+ papers, footnotes every claim, flags contradictions.", why: "Replaces days of literature review." },
      { title: "Thesis Advisor", tier: "Professional", what: "Cross-references methodology across disciplines, identifies gaps.", why: "Supports original research at the graduate level." },
    ],
  },
  {
    title: "📊 Business & Finance",
    description: "Market analysis, filings, and audit-trail decisions.",
    cases: [
      { title: "Market Research Analyst", tier: "Intermediate", what: "Summarizes industry reports; extracts market size, growth, competitors.", why: "$5,000+ consultancy reports — built once, reused forever." },
      { title: "Financial Statement Reviewer", tier: "Intermediate", what: "Compares YoY metrics, flags anomalies, cites page numbers.", why: "Saves hours per filing." },
      { title: "SEC Filing Analyst", tier: "Professional", what: "Cross-references 10-K, 10-Q, 8-K across multiple years.", why: "Investment decisions with an audit trail." },
      { title: "Contract Risk Assessor", tier: "Professional", what: "Identifies unfavorable clauses, cross-references precedents.", why: "Legal review at a fraction of the cost." },
    ],
  },
  {
    title: "⚖️ Legal & Compliance",
    description: "Policies, contracts, and multi-jurisdiction compliance.",
    cases: [
      { title: "Policy Q&A Assistant", tier: "Entry", what: "Answers employee questions from the company handbook.", why: "Reduces HR ticket volume." },
      { title: "Contract Summarizer", tier: "Intermediate", what: "Extracts parties, obligations, termination clauses, deadlines.", why: "10-minute summary of a 50-page contract." },
      { title: "Regulatory Compliance Officer", tier: "Professional", what: "Cross-references GDPR, HIPAA, SOX across jurisdictions.", why: "Compliance audits prepared in hours, not weeks." },
    ],
  },
  {
    title: "🔬 Science & Research",
    description: "Lab protocols, clinical literature, and grant writing.",
    cases: [
      { title: "Lab Protocol Assistant", tier: "Intermediate", what: "Answers from SOPs, safety sheets, equipment manuals.", why: "Reduces training time for new lab members." },
      { title: "Clinical Literature Reviewer", tier: "Professional", what: "Synthesizes trial results, flags contraindications, cites PMIDs.", why: "Supports evidence-based medicine." },
      { title: "Grant Proposal Writer", tier: "Professional", what: "Matches research aims to funding priorities, cites prior work.", why: "Speeds up submission cycles." },
    ],
  },
  {
    title: "✍️ Creative & Professional Writing",
    description: "Voice-matched writing, docs, and continuity.",
    cases: [
      { title: "Style-Matched Ghostwriter", tier: "Intermediate", what: "Writes in a client's voice using prior work as reference.", why: "Content that sounds like them." },
      { title: "Technical Documentation Assistant", tier: "Intermediate", what: "Writes docs using the project's style guide and codebase.", why: "Consistent docs across teams." },
      { title: "Screenplay Continuity Checker", tier: "Professional", what: "Cross-references scenes, character arcs, timeline.", why: "Catches errors before production." },
    ],
  },
  {
    title: "🏥 Health & Wellness (Personal Use)",
    description: "Private health notes and nutrition — never leave your machine.",
    cases: [
      { title: "Personal Medical Journal", tier: "Entry", what: "Answers questions from your own health records and notes.", why: "Privacy: never leaves your machine." },
      { title: "Nutrition Planner", tier: "Intermediate", what: "Cross-references recipes, dietary restrictions, nutrition data.", why: "Personalized meal planning with citations." },
    ],
  },
];

const pricingRows = [
  { tier: "General Entry Level", included: "1–3 documents, basic prompt, single collection, model recommendation", price: "$149", turnaround: "1–2 days" },
  { tier: "Intermediate", included: "5–20 documents, tuned chunking, citation rules, memory seeding, model comparison", price: "$449", turnaround: "3–5 days" },
  { tier: "Professional", included: "20+ documents, multi-collection, advanced metadata, adversarial testing, 30-day support", price: "$1,499", turnaround: "7–14 days" },
];

const addOns = [
  { label: "Additional document batch (per 10)", price: "$99" },
  { label: "Custom citation format (APA, MLA, Chicago)", price: "$149" },
  { label: "Multi-language support (per language)", price: "$199" },
  { label: "Priority build (48-hour turnaround)", price: "+50%" },
  { label: "Retrieval tuning session (per hour)", price: "$75" },
];

const supportPlans = [
  { name: "Basic", price: "$29", includes: "Email support, 5 query tunings/month." },
  { name: "Standard", price: "$79", includes: "Priority email, 15 tunings/month, quarterly re-indexing." },
  { name: "Professional", price: "$199", includes: "Dedicated Slack channel, unlimited tunings, monthly audit." },
];

const objections = [
  { q: "\u201CThat\u2019s more than ChatGPT Plus.\u201D", a: "ChatGPT Plus is $20/month for a generic assistant. This is a one-time build of a private specialist that never sends your data to a cloud. After 8 months it\u2019s cheaper than Plus — and you own it forever." },
  { q: "\u201CI could build this myself.\u201D", a: "You could. It would take 20\u201340 hours of trial and error, plus debugging chunking, prompts, and retrieval. At your hourly rate, that\u2019s far more than $149." },
  { q: "\u201CWhat if I don\u2019t like it?\u201D", a: "We include a 7-day revision window on every tier. If the Role doesn\u2019t meet the specification, we rebuild it." },
  { q: "\u201CWhy is Professional 10x Entry?\u201D", a: "Entry is a single collection with basic rules. Professional involves multiple document types, cross-collection retrieval, adversarial testing, and a compliance-ready citation pipeline." },
];

const packages = [
  { name: "Solo Professional", price: "$299", items: ["1 Entry Role", "MAi-RAG-PA setup on your machine", "1-hour onboarding call"] },
  { name: "Small Business Starter", price: "$999", items: ["2 Intermediate Roles", "e.g. Policy Q&A + Contract Summarizer", "Setup + 2-hour training"] },
  { name: "Research Lab Bundle", price: "$2,499", items: ["1 Professional Role (Literature Reviewer)", "2 Intermediate Roles (Protocol, Grant)", "Setup + 30-day support"] },
  { name: "Enterprise Pilot", price: "$5,999", items: ["1 Professional + 3 Intermediate Roles", "Multi-collection architecture", "Remote training + 90-day support"] },
];
