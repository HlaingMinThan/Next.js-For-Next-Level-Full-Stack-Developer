import Link from "next/link"

function page() {
  console.log("what is this component ?")
  return (
    <div>
      <div>Home page</div>
      <Link href={"/dashboard/posts"}>see posts</Link>
    </div>
  )
}

export default page