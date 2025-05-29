
import Link from 'next/link';


export const metadata = {
  title: 'DevNest Blog | Home',
  description: 'Browse our latest articles on development, design, and innovation.',
};


async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">📝 DevNest Blog</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
          <li  className="p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
          </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}