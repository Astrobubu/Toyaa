"use client";

import React from "react";

export default function SmallCompanyNotice() {
  return (
    <section className="bg-gray-50 border-t border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8 text-center mt-12 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1b1464] mb-4">
          Handcrafted Just For You
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are a small, passionate team, and Domyah is a brand new product! Currently, every single item is lovingly <strong>made to order</strong>. We do not hold bulk stock, which means your Domyah is crafted specially for your little one.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Have a feature request, a special idea, or just want to chat with us about your order? We&apos;d love to hear from you directly!
        </p>
        <a
          href="https://wa.me/971558812252?text=Hello! I have a question/feature request for Domyah."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-[#25D366] hover:bg-[#20b858] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            <path d="M16.4 14.8c-.3.8-1.5 1.5-2.2 1.6-.6.1-1.4.3-3.6-1-2.4-1.4-3.9-3.9-4-4-.1-.1-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.7-.3h.3c.1 0 .3 0 .4.3.2.4.6 1.4.6 1.6s.1.4 0 .6-.2.4-.4.6c-.2.2-.4.4-.5.6-.2.2-.2.4 0 .7.4.7 1 1.4 1.5 1.8.5.4 1.1.8 1.8 1 .2.1.5.1.6 0 .2-.1.5-.6.6-.8.2-.2.4-.2.6-.1s1.3.6 1.5.7.3.2.4.3c.1.2.1.8-.2 1.6z" />
          </svg>
          Talk to us on WhatsApp
        </a>
      </div>
    </section>
  );
}
