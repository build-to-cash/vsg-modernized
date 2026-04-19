'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/artists', label: 'Artists' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/95 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-lg font-bold italic text-[#E9C349] font-serif">
          VSG Bliss
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#E9C349]"
          aria-label="Menu"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                pathname === link.href ? 'text-[#E9C349]' : 'text-[#e5e2e1] hover:text-[#E9C349]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#E9C349] text-[#3c2f00] text-xs font-bold uppercase rounded">
          MEMBERSHIP
        </button>
      </div>

      <div className={`md:hidden bg-[#131313] border-t border-[#4E0707] ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm py-2 ${
                pathname === link.href ? 'text-[#E9C349]' : 'text-[#e5e2e1]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-1 px-3 py-2 bg-[#E9C349] text-[#3c2f00] text-xs font-bold uppercase rounded w-fit">
            MEMBERSHIP
          </button>
        </div>
      </div>
    </nav>
  );
}