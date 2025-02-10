import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="space-y-6 text-center">
        <h1 className="text-9xl font-bold text-gray-100">404</h1>
        <h2 className="text-3xl font-semibold text-gray-300">Page Not Found</h2>

        <p className="mx-auto max-w-sm text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
