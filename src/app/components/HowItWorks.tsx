"use client";

import { useLanguage } from "../context/LanguageContext";

const stepsEn = [
  {
    number: "01",
    title: "Download the App",
    description: "Get started by downloading our app from the Google Play Store or the Apple App Store. The app is your control center for managing everything.",
  },
  {
    number: "02",
    title: "Pair Your Smart Doll",
    description: "Easily connect the smart doll to your phone via Bluetooth and personalize your child's experience.",
  },
  {
    number: "03",
    title: "Customize & Set Preferences",
    description: "Choose the doll's voice, language, and personality. Enter personal details like your child's name to enhance interaction.",
  },
  {
    number: "04",
    title: "Monitor & Engage",
    description: "Stay in control with the parental dashboard. View summaries, set boundaries, and ensure safe interactions.",
  },
  {
    number: "05",
    title: "Enjoy Fun, Safe Interaction",
    description: "Let your child build a connection with the doll through personalized conversations, games, and learning.",
  },
  {
    number: "06",
    title: "Update & Enhance",
    description: "Regularly update the app to access new features. Your smart doll will continue to gain new abilities and content.",
  },
];

const stepsAr = [
  {
    number: "٠١",
    title: "حمل التطبيق",
    description: "ابدأ بتحميل تطبيقنا من متجر جوجل أو آبل. التطبيق هو مركز التحكم الخاص بك لإدارة كل شيء.",
  },
  {
    number: "٠٢",
    title: "قم بإقران الدمية الذكية",
    description: "قم بتوصيل الدمية بهاتفك بسهولة عبر البلوتوث وتخصيص تجربة طفلك.",
  },
  {
    number: "٠٣",
    title: "تخصيص الإعدادات",
    description: "اختر صوت الدمية ولغتها وشخصيتها. أدخل تفاصيل شخصية مثل اسم طفلك لتعزيز التفاعل.",
  },
  {
    number: "٠٤",
    title: "المراقبة والمشاركة",
    description: "ابق متحكماً من خلال لوحة تحكم الآباء. اعرض الملخصات، وعين الحدود، وتأكد من التفاعل الآمن.",
  },
  {
    number: "٠٥",
    title: "استمتع بتفاعل آمن وممتع",
    description: "دع طفلك يبني اتصالاً مع الدمية من خلال المحادثات المخصصة والألعاب والتعلم.",
  },
  {
    number: "٠٦",
    title: "تحديث وتحسين",
    description: "قم بتحديث التطبيق بانتظام للوصول إلى ميزات جديدة. ستستمر الدمية في اكتساب قدرات جديدة.",
  },
];

export default function HowItWorks() {
  const { lang } = useLanguage();
  const steps = lang === 'ar' ? stepsAr : stepsEn;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          {lang === 'ar' ? 'كيف يعمل' : 'How It Works'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition hover-lift"
            >
              <div className="text-5xl font-extrabold text-[#fdb698]/50">
                {step.number}
              </div>
              <h3 className="font-bold text-[#1b1464] text-xl mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
