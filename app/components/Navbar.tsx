import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Blog App</div>
          <div>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar