import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-100">404</h1>
        <h2 className="text-3xl font-semibold text-gray-300">Page Not Found</h2>
        <p className="text-gray-400 max-w-sm mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}