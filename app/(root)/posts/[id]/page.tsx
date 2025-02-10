import Image from "next/image";
import { notFound } from "next/navigation";

const getPostById = async (id: string) => {
  const res = await fetch("http://localhost:3001/posts/" + id, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = await getPostById(params.id);
  return {
    title: "Creative Coder | " + post.title,
    description: "post detail for " + post.title,
  };
};

async function page({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Image Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            {post.title}
          </h1>

          {/* Author and Date */}
          <div className="mb-8 flex items-center text-gray-600">
            <span className="mr-4 font-medium">{post.author}</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
