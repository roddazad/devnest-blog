import Link from 'next/link';
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.slice(0, 10).map((post) => (
    {
    id: post.id.toString(),
  }
));
}

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}


export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  return (
    <section className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
      <Link href="/blog" className="text-blue-500 underline mt-4 block">
        ← Back to Blog
    </Link>
    </section>
    
  );
}


