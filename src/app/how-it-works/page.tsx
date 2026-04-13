"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const stepsEn = [
  {
    number: 1,
    title: "Unbox Your Domyah",
    description:
      "Inside you'll find your Domyah plush, the Voice Box™ module, 3 AA batteries, and a quick start guide.",
  },
  {
    number: 2,
    title: "Download the App",
    description:
      "Grab the Domyah app from the App Store or Google Play. Create your parent account and set up your child's profile with their name, age, and interests.",
  },
  {
    number: 3,
    title: "Insert the Voice Box™",
    description:
      "Slide the Voice Box™ into the pocket inside your Domyah plush. It clicks right in - no tools needed. The plush is designed with a hidden zippered compartment.",
  },
  {
    number: 4,
    title: "Pair via Bluetooth",
    description:
      "Open the app, tap 'Connect', and Domyah pairs automatically. The doll will say hello - that's when you know you're connected!",
  },
  {
    number: 5,
    title: "Customize the Experience",
    description:
      "Choose Domyah's voice, language, and personality. Set conversation boundaries, push learning topics, and configure alert preferences.",
  },
  {
    number: 6,
    title: "Let the Magic Begin",
    description:
      "Hand Domyah to your child and watch the connection grow. Check the app for thought summaries, conversation highlights, and smart alerts.",
  },
];

const stepsAr = [
  {
    number: 1,
    title: "افتح صندوق دُميتك",
    description:
      "ستجد داخله دميتك القطيفة، وحدة صندوق الصوت™، 3 بطاريات AA، ودليل البدء السريع.",
  },
  {
    number: 2,
    title: "حمّل التطبيق",
    description:
      "نزّل تطبيق دُمية من App Store أو Google Play. أنشئ حساب الوالدين وأعدّ ملف طفلك باسمه وعمره واهتماماته.",
  },
  {
    number: 3,
    title: "أدخل صندوق الصوت™",
    description:
      "أدخل صندوق الصوت™ في الجيب داخل دميتك. يثبت بسهولة دون أي أدوات. اللعبة مصممة بجيب مخفي بسحاب.",
  },
  {
    number: 4,
    title: "الإقران عبر البلوتوث",
    description:
      "افتح التطبيق واضغط 'اتصال'، وستتصل دُمية تلقائياً. ستقول الدمية مرحباً — هنا تعرف أنك متصل!",
  },
  {
    number: 5,
    title: "خصّص التجربة",
    description:
      "اختر صوت دُمية ولغتها وشخصيتها. حدد حدود المحادثة، وادفع موضوعات التعلم، وأعدّ تفضيلات التنبيهات.",
  },
  {
    number: 6,
    title: "دع السحر يبدأ",
    description:
      "سلّم دُمية لطفلك وشاهد الارتباط ينمو. تحقق من التطبيق لملخصات الأفكار وأبرز المحادثات والتنبيهات الذكية.",
  },
];

export default function HowItWorksPage() {
  const { lang } = useLanguage();
  const steps = lang === "ar" ? stepsAr : stepsEn;

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#f5b800] to-[#ffca1c] py-20 px-4 text-center">
          <h1 className="text-5xl font-extrabold text-[#2d1b69] mb-4 hover:scale-105 transition-transform duration-300">
            {lang === "ar" ? "كيف تعمل دُمية" : "How Domyah Works"}
          </h1>
          <p className="text-xl text-[#2d1b69] max-w-2xl mx-auto opacity-80">
            {lang === "ar"
              ? "من فتح الصندوق حتى أول محادثة لطفلك — كل ما تحتاج معرفته."
              : "From unboxing to your child's first conversation - here's everything you need to know."}
          </p>
        </section>

        {/* Steps */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          {steps.map((step) => {
            const isEven = step.number % 2 === 0;
            return (
              <div
                key={step.number}
                className={`group hover-lift flex items-center gap-8 py-8 ${
                  isEven ? "lg:flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#2d1b69] text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#2d1b69] mb-2 group-hover:text-[#e8453a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-[#2d1b69] text-white py-16 text-center px-4">
          <h2 className="text-4xl font-extrabold mb-6 hover:scale-105 transition-transform duration-300">
            {lang === "ar" ? "مستعد لتلتقي بدُمية؟" : "Ready to Meet Domyah?"}
          </h2>
          <Link
            href="/product/domyah"
            className="inline-block bg-[#e8453a] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transition-colors animate-pulse-glow"
          >
            {lang === "ar" ? "اطلب الآن" : "Order Now"}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
