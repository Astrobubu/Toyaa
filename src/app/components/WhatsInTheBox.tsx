"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const items = [
  {
    en: {
      title: "Domyah Smart Plush",
      desc: "A soft, cuddly plush toy made with child-safe, non-toxic materials. Handcrafted and built to survive countless hugs and adventures.",
    },
    ar: {
      title: "دُمية الذكية",
      desc: "لعبة قطيفة ناعمة ومدللة مصنوعة من مواد آمنة للأطفال وخالية من السموم. مصنوعة يدوياً لتتحمل آلاف الأحضان والمغامرات.",
    },
    img: "/images/hero-2.jpg",
  },
  {
    en: {
      title: "Domyah Voice Box™",
      desc: "The brain of Domyah — a compact, cloud-connected module that slides into a hidden pocket inside the plush. Contains the processor, speaker, microphone, and a compartment for 3 AA batteries.",
    },
    ar: {
      title: "صندوق الصوت™",
      desc: "عقل دُمية — وحدة صغيرة متصلة بالسحابة تنزلق في جيب مخفي داخل اللعبة. تحتوي على المعالج والسماعة والميكروفون وحيز لـ 3 بطاريات AA.",
    },
    img: "/images/why.png",
  },
  {
    en: {
      title: "3 AA Batteries",
      desc: "Everything you need to get started right away. 3 AA batteries are enough to power the magic for weeks of playtime. Easy to replace when needed.",
    },
    ar: {
      title: "3 بطاريات AA",
      desc: "كل ما تحتاجه للبدء فوراً. 3 بطاريات AA كافية لتشغيل السحر لأسابيع من وقت اللعب. سهلة الاستبدال عند الحاجة.",
    },
    img: "/images/hero-4.webp",
  },
  {
    en: {
      title: "Quick Start Guide",
      desc: "A simple, illustrated guide to get you set up in minutes. From inserting the Voice Box to pairing the app — we made it foolproof.",
    },
    ar: {
      title: "دليل البدء السريع",
      desc: "دليل مصور بسيط يساعدك على البدء في دقائق. من تركيب صندوق الصوت إلى ربط التطبيق — جعلناه سهلاً للغاية.",
    },
    img: "/images/father-daughter.webp",
  },
];

export default function WhatsInTheBox() {
  const [active, setActive] = useState(0);
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2d1b69] text-center mb-4">
          {lang === "ar" ? "ماذا يوجد في الصندوق" : "What's in the Box"}
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          {lang === "ar"
            ? "كل ما يحتاجه طفلك لصديقه الجديد، جاهز من أول يوم."
            : "Everything you need for your child's new best friend, right out of the box."}
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm mb-8 lg:mb-0">
            <Image
              src={items[active].img}
              alt={items[active][lang].title}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          {/* Item list */}
          <div className="space-y-3">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-start p-5 rounded-2xl transition-all duration-300 ${
                  active === i
                    ? "bg-white shadow-md border-s-4 border-[#e8453a]"
                    : "bg-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      active === i
                        ? "bg-[#e8453a] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        active === i ? "text-[#2d1b69]" : "text-gray-500"
                      }`}
                    >
                      {item[lang].title}
                    </h3>
                    {active === i && (
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {item[lang].desc}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
