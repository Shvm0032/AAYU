"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Menu = Hamburger, X = Close

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // const menuItems = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Contact", href: "/contact" },
  //   { name: "Store", href: "/store" },
  // ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Contact", href: "/#" },
    { name: "Store", href: "/#" },
  ];

  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          Y
        </Link>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-black text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
