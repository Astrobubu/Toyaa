"use client";

import Navbar from "./components/Navbar";
import CoreBanner from "./components/CoreBanner";
import BuiltForFun from "./components/BuiltForFun";
import WhatsInTheBox from "./components/WhatsInTheBox";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import DomyahOS from "./components/DomyahOS";
import RelatedProducts from "./components/RelatedProducts";
import ParentalFeatures from "./components/ParentalFeatures";
import SmallCompanyNotice from "./components/SmallCompanyNotice";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Landing Hero */}
        <section className="relative min-h-[calc(100svh-4rem)] flex items-center bg-[#fdd5d8]/30 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="animate-slide-right">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1b1464] mb-6 leading-tight">
                {lang === 'ar' ? 'صديق طفلك الجديد ' : "Your Child's New "}
                <span className="text-[#e8453a]">{lang === 'ar' ? 'المفضل' : 'Best Friend'}</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
                {lang === 'ar' 
                  ? "تعرف على دمية، الرفيق الذكي الذي يتحدث ويتعلم وينمو مع طفلك. محادثات تفاعلية، تعلم آمن، وسحر لا ينتهي." 
                  : "Meet Domyah, the smart companion that talks, learns, and grows with your child. Interactive conversations, safe learning, and endless magic."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/product/domyah"
                  className="bg-[#e8453a] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transition text-center animate-pulse-glow"
                >
                  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </Link>
                <Link
                  href="/how-it-works"
                  className="bg-white text-[#2d1b69] border-2 border-[#2d1b69] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition text-center hover-lift"
                >
                  {lang === 'ar' ? 'كيف يعمل' : 'How It Works'}
                </Link>
              </div>
            </div>
            <div className="relative aspect-square animate-float">
              <Image
                src="/images/hero-1.webp"
                alt="Domyah Hero"
                fill
                className="object-cover rounded-[3rem] shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        <CoreBanner />
        <WhyChooseUs />
        <ParentalFeatures />
        <DomyahOS />
        <SmallCompanyNotice />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}
