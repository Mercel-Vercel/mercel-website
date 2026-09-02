import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy-First AI Automation Services | Mercel",
  description: "Custom AI automation systems, document processing, and B2B solutions. Your data never leaves your servers.",
  keywords: ["AI automation", "custom AI agents", "document processing", "privacy-first", "B2B solutions"],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]">
      <section className="border-b border-gray-200 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We build custom, privacy-first AI automation systems for businesses that want to keep their data on their own servers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                  <p className="text-sm text-gray-500">{service.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  { title: "Document Summarization", description: "Upload your PDFs and we'll deliver a structured summary.", price: "From $150", deliverable: "Structured summary (PDF/DOCX)" },
  { title: "Data Extraction from PDFs", description: "Extract key data points from contracts and reports.", price: "From $200", deliverable: "CSV/Excel with key data points" },
  { title: "White Paper (15-20 pages)", description: "Research-backed white paper with citations.", price: "From $750", deliverable: "Professional report with citations" },
  { title: "Custom AI Agent (Customer Service)", description: "Build a chatbot using MAi-RAG-PA.", price: "From $1,500", deliverable: "Chatbot using MAi-RAG-PA" },
  { title: "Custom AI Agent (Lead Qualification)", description: "Automated lead scoring and response system.", price: "From $2,000", deliverable: "Automated lead scoring system" },
  { title: "Business Process Automation", description: "Multiple workflows automated.", price: "From $3,000", deliverable: "Multiple workflows automated" },
];
