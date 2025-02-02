import Image from "next/image";

const getPostById = async (id : string) => {
    const res = await fetch("http://localhost:3001/posts/"+id, {
        next :  {
            revalidate : 60
        }
    });
    return res.json();
}

export const generateMetadata = async ({params}: { params : { id : string}}) => {
    const post = await getPostById(params.id)
    return {
        title : "Creative Coder | "+post.title,
        description : "post detail for "+post.title
    }
}

async function page({params} : { params : { id : string}}) {
    const post = await getPostById(params.id)
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative w-full h-[400px]">
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        {post.title}
                    </h1>

                    {/* Author and Date */}
                    <div className="flex items-center text-gray-600 mb-8">
                        <span className="font-medium mr-4">{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="leading-relaxed">
                            {post.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;