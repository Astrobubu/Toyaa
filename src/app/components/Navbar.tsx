"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Toya Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-toya-navy">Toya</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-toya-navy font-medium hover:text-toya-red transition-colors"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-toya-navy font-medium hover:text-toya-red transition-colors"
            >
              Store
            </Link>
          </div>

          {/* Right side: Cart + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              aria-label="Shopping cart"
              className="text-toya-navy hover:text-toya-red transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle menu"
              className="md:hidden text-toya-navy hover:text-toya-red transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                /* X icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-toya-navy font-medium hover:text-toya-red transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#products"
            className="text-toya-navy font-medium hover:text-toya-red transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Store
          </Link>
        </div>
      )}
    </nav>
  );
}
