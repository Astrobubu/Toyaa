"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleOpenCart = () => setCartOpen(true);
    window.addEventListener('openCart', handleOpenCart);
    return () => window.removeEventListener('openCart', handleOpenCart);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">

            {/* Left Nav Links */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <Link href="/about" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors hover-lift whitespace-nowrap">
                {lang === 'ar' ? 'من نحن' : 'About'}
              </Link>
              <Link href="/product" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors hover-lift whitespace-nowrap">
                {lang === 'ar' ? 'المنتجات' : 'Products'}
              </Link>
              <Link href="/how-it-works" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors hover-lift whitespace-nowrap">
                {lang === 'ar' ? 'كيف يعمل' : 'How It Works'}
              </Link>
            </div>

            {/* Logo + Brand (Centered) */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover-scale">
              <Image
                src="/images/logo.png"
                alt="Domyah Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-[#1b1464] uppercase tracking-wider">
                {lang === 'ar' ? 'دُمية' : 'Domyah'}
              </span>
            </Link>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
              <button
                onClick={toggleLang}
                className="flex items-center justify-center bg-[#fcc612] text-[#1b1464] px-3 py-1.5 rounded-full font-bold text-sm hover:bg-[#1b1464] hover:text-white transition-colors shadow-sm"
              >
                {lang === 'ar' ? 'English' : 'عربي'}
              </button>

              {/* Cart Icon */}
              <button
                aria-label="Shopping cart"
                onClick={() => setCartOpen(true)}
                className="text-[#1b1464] hover:text-[#e8453a] transition-colors relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#e8453a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile right side */}
            <div className="flex md:hidden items-center gap-3 ml-auto">
              <button
                onClick={toggleLang}
                className="bg-[#fcc612] text-[#1b1464] px-2.5 py-1 rounded-full font-bold text-xs hover:bg-[#1b1464] hover:text-white transition-colors"
              >
                {lang === 'ar' ? 'EN' : 'ع'}
              </button>
              <button
                aria-label="Shopping cart"
                onClick={() => setCartOpen(true)}
                className="text-[#1b1464] hover:text-[#e8453a] transition-colors relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#e8453a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                aria-label="Toggle menu"
                className="text-[#1b1464] hover:text-[#e8453a] transition-colors"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors" onClick={() => setMenuOpen(false)}>
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link href="/about" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors" onClick={() => setMenuOpen(false)}>
              {lang === 'ar' ? 'من نحن' : 'About'}
            </Link>
            <Link href="/product" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors" onClick={() => setMenuOpen(false)}>
              {lang === 'ar' ? 'المنتجات' : 'Products'}
            </Link>
            <Link href="/how-it-works" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors" onClick={() => setMenuOpen(false)}>
              {lang === 'ar' ? 'كيف يعمل' : 'How It Works'}
            </Link>
            <Link href="/contact" className="text-[#1b1464] font-medium hover:text-[#e8453a] transition-colors" onClick={() => setMenuOpen(false)}>
              {lang === 'ar' ? 'اتصل بنا' : 'Contact'}
            </Link>
          </div>
        )}
      </nav>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
