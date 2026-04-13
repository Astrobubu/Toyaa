"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function ProductInfo() {
  const { addToCart } = useCart();
  const { lang } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: "domyah-single",
      name: "Domyah",
      price: 400,
      quantity: quantity,
      image: "/images/hero-1.webp"
    });
    window.dispatchEvent(new Event('openCart'));
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1b1464]">
        {lang === 'ar' ? 'دُمية' : 'Domyah'}
      </h1>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">400</span>
        <span className="text-lg font-normal">AED</span>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {lang === 'ar'
          ? 'أهلاً! أنا دُمية، صديقك الفضولي المدلل المفضل. أتحدث وأتعلم وأنمو بجانب طفلك - دائماً مستعدة لمغامرة جديدة، أو قصة قبل النوم، أو محادثة مرحة. كل يوم معي يشبه اكتشاف شيء رائع معاً!'
          : "Hey there! I'm Domyah, your child's curious, cuddly best friend. I talk, learn, and grow right alongside them - always ready for a new adventure, a bedtime story, or a giggly conversation. Every day with me feels like discovering something wonderful together!"}
      </p>

      <div className="flex flex-col gap-3">
        <div className="w-full p-5 rounded-2xl border-2 border-[#e53e3e] bg-red-50 text-left">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-gray-900">{lang === 'ar' ? 'شخصية واحدة' : 'Single Character'}</div>
              <div className="text-gray-500 text-sm">{lang === 'ar' ? 'دُمية' : 'Domyah'}</div>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-900">400 AED</span>
            </div>
          </div>
        </div>

        <div className="w-full p-5 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 text-left">
          <div className="flex items-center gap-3">
            <div className="bg-[#fcc612] p-2 rounded-lg">
              <svg className="w-5 h-5 text-[#1b1464]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">{lang === 'ar' ? 'خصم الكميات' : 'Bulk Discount'}</div>
              <p className="text-gray-500 text-sm">{lang === 'ar' ? 'أضف المزيد للحصول على خصم 10% على طلبك!' : 'Add more to your cart for a 10% discount on your order!'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto min-w-[120px] bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4">
          <button onClick={decrementQuantity} className="text-2xl leading-none font-bold text-gray-500 hover:text-gray-900 px-2">-</button>
          <span className="text-xl font-bold w-8 text-center">{quantity}</span>
          <button onClick={incrementQuantity} className="text-2xl leading-none font-bold text-gray-500 hover:text-gray-900 px-2">+</button>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full flex-1 bg-[#e53e3e] text-white font-bold text-lg py-4 rounded-2xl hover:bg-red-600 transition-colors text-center animate-pulse-glow"
        >
          {lang === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
