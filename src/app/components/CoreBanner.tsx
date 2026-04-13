"use client";

import { useLanguage } from "../context/LanguageContext";

export default function CoreBanner() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#fcc612] py-8 md:py-12 px-6 text-center flex items-center justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1b1464] max-w-4xl mx-auto leading-tight hover:scale-105 transition-transform duration-300 cursor-default">
        {lang === 'ar' 
          ? "ضعوا الشاشات جانباً! لنتعلم عن العالم ونستمتع ببعض الوقت!" 
          : "Put the screens down! Let's learn about the world and have some fun!"}
      </h2>
    </section>
  );
}
