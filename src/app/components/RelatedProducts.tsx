"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const products = [
  { id: "bunny", nameEn: "Domyah Bunny", nameAr: "دُمية الأرنب", price: 400, color: "bg-[#fad9e0]", img: "/images/bunny-real.jpg" },
  { id: "pup", nameEn: "Domyah Pup", nameAr: "دُمية الجرو", price: 400, color: "bg-[#8acdea]", img: "/images/pup-real.jpg" },
  { id: "kitty", nameEn: "Domyah Kitty", nameAr: "دُمية القطة", price: 400, color: "bg-[#c4dfd7]", img: "/images/kitty-real.webp" },
  { id: "owl", nameEn: "Domyah Owl", nameAr: "دُمية البومة", price: 550, color: "bg-[#fcc612]/40", img: "/images/owl-real.avif" },
];

export default function RelatedProducts() {
  const { lang } = useLanguage();

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-4">
          {lang === 'ar' ? 'تعرف على العائلة' : 'Meet the Family'}
        </h2>
        <p className="text-center text-gray-500 mb-12">
          {lang === 'ar' ? 'المزيد قريباً — أبدِ اهتمامك الآن!' : 'More coming soon — show your interest now!'}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className={`${p.color} rounded-3xl p-6 shadow-sm hover-lift flex flex-col`}>
              <div className="relative w-full aspect-square rounded-2xl mb-6 overflow-hidden">
                <Image src={p.img} alt={lang === 'ar' ? p.nameAr : p.nameEn} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-white text-[#1b1464] font-bold px-4 py-2 rounded-full text-sm">
                    {lang === 'ar' ? 'قريباً' : 'Coming Soon'}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1b1464] mb-2">{lang === 'ar' ? p.nameAr : p.nameEn}</h3>
              <p className="text-[#e53e3e] font-bold mb-4">{p.price} AED</p>
              <div className="mt-auto">
                <a
                  href={`https://wa.me/971558812252?text=${encodeURIComponent(`Hello! I'm interested in the ${p.nameEn} when it becomes available.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white/80 text-[#1b1464] font-bold py-3 px-6 rounded-xl text-sm hover:bg-white transition"
                >
                  {lang === 'ar' ? 'أبدِ اهتمامك' : 'Show Interest'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
