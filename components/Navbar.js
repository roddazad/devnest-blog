export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevNest</h1>
        <ul className="flex gap-6 font-medium text-sm">
          <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
          <li><a href="/blog" className="hover:text-teal-400 transition">Blog</a></li>
          <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
        </ul>
      </div>
    </nav>
  );
}