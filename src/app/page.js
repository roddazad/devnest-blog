export default function HomePage() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Welcome to DevNest 🪺</h1>
      <p className="text-gray-600 text-lg mb-8">Where developer stories hatch and grow.</p>
      <a
        href="/blog"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded transition"
      >
        Read the Blog
      </a>
    </section>
  );
}