"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Back to Top */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="#header"
            className="text-xs font-proxima tracking-widest text-white/60 hover:text-white transition-colors"
          >
            Back to Top
          </Link>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            href="/privacy"
            className="text-xs font-proxima tracking-widest uppercase text-white/60 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs font-proxima tracking-widest uppercase text-white/60 hover:text-white transition-colors"
          >
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
