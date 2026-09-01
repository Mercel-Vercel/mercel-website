export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Mercel</h1>
        <div className="space-y-4 text-lg text-gray-600">
          <p>
            Mercel is a privacy-first AI automation company. We build custom AI systems that run entirely on your own hardware, ensuring your sensitive business data never leaves your servers.
          </p>
          <p>
            Our founder created <strong>MAi-RAG-PA</strong>, an open-source AI framework designed for local, private AI applications. We leverage this framework to deliver tailored solutions for businesses of all sizes.
          </p>
        </div>
      </div>
    </main>
  );
}
