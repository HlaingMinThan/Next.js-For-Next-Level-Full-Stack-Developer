import Link from "next/link";

async function page() {
  const res = await fetch("http://localhost:3001/posts", {
    next: {
      revalidate: 60
    }
  });
  const posts = await res.json();
console.log(posts)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: { id: number, title: string, content: string, author: string, date: string }) => (
          <Link key={post.id} href={'/posts/'+post.id}>
          <div  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="font-medium">{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page