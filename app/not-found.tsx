import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-4xl font-garamond text-dark mb-4">Page Not Found</h1>
        <p className="text-dark/70 mb-6 font-garamond">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-primary hover:underline font-proxima"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}