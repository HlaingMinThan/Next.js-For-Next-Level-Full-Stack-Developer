import Image from "next/image";
import Link from "next/link";

async function page() {
  const res = await fetch("http://localhost:3001/posts", {
    next: {
      revalidate: 60,
    },
  });
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="container mx-auto px-4  py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(
          (post: {
            id: number;
            title: string;
            content: string;
            author: string;
            date: string;
            image: string;
          }) => (
            <Link key={post.id} href={"/posts/" + post.id}>
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-5 h-[200px] w-full">
                    <Image
                      src={post.image}
                      alt="post image"
                      width={100}
                      height={100}
                      quality={100}
                      className="size-full"
                    />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-gray-600">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium">{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default page;
