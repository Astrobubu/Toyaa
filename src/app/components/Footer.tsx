"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#1b1464] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Column 1 - Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Domyah Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Domyah</span>
          </div>
          <p className="text-gray-400 text-sm">
            {lang === 'ar' 
              ? "صديق طفلك الذكي الذي يتحدث ويتعلم وينمو معه." 
              : "Your child's smart best friend that talks, learns, and grows with them."}
          </p>
        </div>

        {/* Column 2 - About Us */}
        <div>
          <h4 className="font-bold mb-4">{lang === 'ar' ? 'معلومات عنا' : 'About Us'}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                {lang === 'ar' ? 'قصتنا' : 'Our Story'}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                {lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQs'}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Grown Up Stuff */}
        <div>
          <h4 className="font-bold mb-4">{lang === 'ar' ? 'أشياء للكبار' : 'Grown Up Stuff'}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Download App */}
        <div>
          <h4 className="font-bold mb-4">{lang === 'ar' ? 'حمل التطبيق' : 'Download App'}</h4>
          <div className="space-y-3">
            <button className="w-full bg-white/10 rounded-xl py-3 px-4 text-sm font-semibold hover:bg-white/20 transition">
              {lang === 'ar' ? 'آبل (iOS)' : 'Apple (iOS)'}
            </button>
            <button className="w-full bg-white/10 rounded-xl py-3 px-4 text-sm font-semibold hover:bg-white/20 transition">
              {lang === 'ar' ? 'أندرويد' : 'Android'}
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            {/* Twitter/X */}
            <div className="group relative">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#e8453a] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {lang === 'ar' ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>
            {/* TikTok */}
            <div className="group relative">
              <Link
                href="#"
                aria-label="TikTok"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15V11.7a4.79 4.79 0 01-3.77-1.78V6.69h3.77z" />
                </svg>
              </Link>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#e8453a] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {lang === 'ar' ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>
            {/* Instagram */}
            <div className="group relative">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#e8453a] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {lang === 'ar' ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        {lang === 'ar' ? '© 2026 شركة دمية. جميع الحقوق محفوظة.' : '© 2026 Domyah Inc. All Rights Reserved.'}
      </div>
    </footer>
  );
}
