import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Blog App</div>
          <div>
            <Link href="/" className="transition-colors hover:text-gray-300">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
