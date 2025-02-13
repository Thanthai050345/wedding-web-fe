'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-semibold">Our Wedding</div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-primary-500">
              Home
            </Link>
            <Link
              href="/invite"
              className="text-gray-800 hover:text-primary-500"
            >
              Invitation
            </Link>
            <Link
              href="/guestbook"
              className="text-gray-800 hover:text-primary-500"
            >
              Guestbook
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-primary-500"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link
            href="/"
            className="block text-gray-800 py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/invite"
            className="block text-gray-800 py-2"
            onClick={toggleMenu}
          >
            Invitation
          </Link>
          <Link
            href="/guestbook"
            className="block text-gray-800 py-2"
            onClick={toggleMenu}
          >
            Guestbook
          </Link>
          <Link
            href="/about"
            className="block text-gray-800 py-2"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
