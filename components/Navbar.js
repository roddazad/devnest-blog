import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevNest</h1>
        <ul className="flex gap-6 font-medium text-sm">
          <li><Link href="/" className="hover:text-teal-400 transition">Home</Link></li>
          <li><Link href="/blog" className="hover:text-teal-400 transition">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}