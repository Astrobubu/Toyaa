"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function SmallCompanyNotice() {
  const { lang } = useLanguage();

  return (
    <section className="bg-gray-50 border-t border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8 text-center mt-12 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1b1464] mb-4">
          {lang === 'ar' ? 'صنعت يدوياً خصيصاً لك' : 'Handcrafted Just For You'}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {lang === 'ar' 
            ? <>نحن فريق صغير وشغوف، ودمية منتج جديد كلياً! حالياً، كل قطعة <strong>تُصنع عند الطلب</strong> بكل حب. نحن لا نحتفظ بمخزون كبير، مما يعني أن دميتك تُصنع خصيصاً لطفلك الصغير.</> 
            : <>We are a small, passionate team, and Domyah is a brand new product! Currently, every single item is lovingly <strong>made to order</strong>. We do not hold bulk stock, which means your Domyah is crafted specially for your little one.</>}
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          {lang === 'ar' 
            ? 'هل لديك طلب ميزة جديدة، فكرة مميزة، أو تريد فقط التحدث معنا بخصوص طلبك؟ يسعدنا أن نسمع منك مباشرة!' 
            : "Have a feature request, a special idea, or just want to chat with us about your order? We'd love to hear from you directly!"}
        </p>
        <a
          href="https://wa.me/971558812252?text=Hello! I have a question/feature request for Domyah."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-[#25D366] hover:bg-[#20b858] transition-colors"
        >
          <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32" className={`${lang === 'ar' ? 'ml-3' : 'mr-3'}`}>
            <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0z" />
          </svg>
          {lang === 'ar' ? 'تحدث معنا عبر واتساب' : 'Talk to us on WhatsApp'}
        </a>
      </div>
    </section>
  );
}
