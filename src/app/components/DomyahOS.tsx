"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function DomyahOS() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-4 bg-[#c4dfd7]/30">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] mb-6">
            {lang === 'ar' ? 'نظام تشغيل دمية™' : 'Domyah OS™'}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {lang === 'ar' 
              ? 'مدعوم بنظام تشغيل دمية™ الخاص بنا، كل محادثة آمنة ومناسبة للعمر ومصممة لإثارة الفضول. يتعلم نظامنا اهتمامات طفلك ويتكيف لتقديم تجربة تعليمية شيقة.' 
              : "Powered by our proprietary Domyah OS™, every conversation is safe, age-appropriate, and designed to spark curiosity. Our system learns your child's interests and adapts to provide the most engaging and educational experience possible."}
          </p>
          {/* Safety & Learning */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-4 w-fit">
            <div className="bg-[#fcc612]/10 rounded-xl p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#fcc612]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1b1464]">{lang === 'ar' ? 'تعلم آمن' : 'Safe Learning'}</p>
              <p className="text-sm text-gray-500">
                {lang === 'ar' ? 'محتوى مفلتر ومراقب لراحة بالك' : 'Filtered and monitored content for peace of mind'}
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/why.png"
            alt={lang === 'ar' ? 'نظام تشغيل دمية' : 'Domyah OS'}
            width={500}
            height={500}
            className="rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
