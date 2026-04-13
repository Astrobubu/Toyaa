"use client";

import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971558812252"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16.4 14.8c-.3.8-1.5 1.5-2.2 1.6-.6.1-1.4.3-3.6-1-2.4-1.4-3.9-3.9-4-4-.1-.1-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.7-.3h.3c.1 0 .3 0 .4.3.2.4.6 1.4.6 1.6s.1.4 0 .6-.2.4-.4.6c-.2.2-.4.4-.5.6-.2.2-.2.4 0 .7.4.7 1 1.4 1.5 1.8.5.4 1.1.8 1.8 1 .2.1.5.1.6 0 .2-.1.5-.6.6-.8.2-.2.4-.2.6-.1s1.3.6 1.5.7.3.2.4.3c.1.2.1.8-.2 1.6z" />
      </svg>
    </a>
  );
}
