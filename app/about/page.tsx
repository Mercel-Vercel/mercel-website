import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Home */}
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Mercel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Privacy-First AI Automation Partner
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              At Mercel, we believe that artificial intelligence should work for you—not the other way around. We help businesses harness the power of AI while maintaining complete control over their data, their processes, and their future.
            </p>
            <p>
              Our mission is simple: <strong className="text-gray-900">Make advanced AI automation accessible, affordable, and private for businesses of every size.</strong>
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Mercel is a privacy-first AI automation company. We design and build custom AI systems that run entirely on your own hardware. This means your sensitive business data—customer information, financial records, proprietary processes, and strategic plans—never leaves your servers.
            </p>
            <p>
              We understand that AI is not a one-size-fits-all solution. Every business has unique workflows, challenges, and goals. Our approach is to create tailored systems that fit your specific needs, rather than forcing you into a generic platform.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Automation Systems</h3>
                  <p className="text-gray-600">Custom AI agents that handle repetitive tasks, generate content, and streamline your workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Lead Generation</h3>
                  <p className="text-gray-600">Automated systems that capture, qualify, and nurture leads—so your team can focus on closing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Document Processing</h3>
                  <p className="text-gray-600">Tools that summarize, extract, and organize your business documents automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Knowledge Management</h3>
                  <p className="text-gray-600">Private AI systems that understand your business and answer questions based on your own data.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-lg p-3">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Data Enrichment</h3>
                  <p className="text-gray-600">Improve lead quality and make smarter decisions with enriched, accurate data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy is Non-Negotiable</h3>
              <p className="text-gray-600">
                Many AI solutions rely on cloud services that process your data on someone else's servers. We take a different approach. Our systems run on your hardware—whether that's a laptop, a home server, or a cloud instance you control. Your data stays yours. Period.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customization Over Templates</h3>
              <p className="text-gray-600">
                We don't believe in one-size-fits-all solutions. Every business is different, and we design each system to match your specific workflows, terminology, and goals. The result is AI that truly understands your business.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation Without Complexity</h3>
              <p className="text-gray-600">
                AI shouldn't require a technical degree to use. We build systems that are intuitive, accessible, and designed for business professionals—not just developers. You get the benefits of AI without the headaches.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Predictability</h3>
              <p className="text-gray-600">
                Cloud AI services often require ongoing subscriptions that scale with usage. Our systems are built to run on your own infrastructure, which means predictable, one-time investments instead of recurring fees. You own your system, and you control your costs.
              </p>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Mercel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Businesses Choose Mercel</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="bg-blue-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Data Sovereignty</h4>
                  <p className="text-gray-600">Your business data never leaves your servers.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-green-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">No Subscriptions</h4>
                  <p className="text-gray-600">One-time investment. Own your AI.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-purple-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Tailored Solutions</h4>
                  <p className="text-gray-600">Systems designed for your workflows.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-orange-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Local AI Power</h4>
                  <p className="text-gray-600">Run models on your own hardware—fast and reliable.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-teal-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Guidance</h4>
                  <p className="text-gray-600">We handle the setup and configuration.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-red-100 rounded-full p-2">
                  <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Cost Control</h4>
                  <p className="text-gray-600">No recurring fees. Predictable investment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Small Business Owners</h4>
                  <p className="text-gray-600">Who need automation but don't have a technical team.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Freelancers & Consultants</h4>
                  <p className="text-gray-600">Who want to offer AI-powered services to their clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🏢</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Agencies</h4>
                  <p className="text-gray-600">That need to scale client work efficiently.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Services</h4>
                  <p className="text-gray-600">Legal, accounting, consulting—that handle sensitive information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                We believe that AI should be a tool for empowerment, not dependency. Businesses should be able to leverage advanced technology without sacrificing control, privacy, or flexibility.
              </p>
              <p>
                We believe that automation should free up your time for the work that matters—not create new complexity.
              </p>
              <p>
                We believe that the future of AI is local, private, and personalized.
              </p>
            </div>
          </div>
        </section>

        {/* The Mercel Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mercel Advantage</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional AI Services</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mercel</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-600">Data processed on third-party servers</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Your data stays on your hardware</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-600">Recurring subscription fees</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">One-time investment, you own the system</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-600">Generic solutions for everyone</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Custom-built for your business</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-600">Reliance on external infrastructure</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Runs on your own hardware, always available</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-600">Limited customization</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Tailored to your specific workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-8 shadow-sm">
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                We envision a world where every business—regardless of size or technical expertise—can leverage the power of AI without compromising their data or their budget.
              </p>
              <p>
                We are building tools and systems that make AI accessible to everyone. We are committed to privacy, customization, and long-term value.
              </p>
              <p className="font-bold text-gray-900">
                We are Mercel.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center bg-gray-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started with Mercel</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to see what privacy-first AI automation can do for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            <span className="font-semibold">Your data. Your AI. Your rules.</span>
          </p>
        </section>
      </div>
    </main>
  );
}
