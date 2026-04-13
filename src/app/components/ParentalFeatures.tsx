"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ParentalFeatures() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-4 bg-[#1b1464] text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#fcc612] font-semibold text-sm uppercase tracking-wider text-center mb-4">
          {lang === 'ar' ? 'للآباء' : 'For Parents'}
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">
          {lang === 'ar' ? 'أنت دائماً في الصورة' : "You're Always in the Loop"}
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          {lang === 'ar' 
            ? 'دمية ليست مجرد لعبة - إنها شريك في التربية. وجه تعلم طفلك، وافهم عالمه، وابق على اطلاع.' 
            : "Domyah isn't just a toy - it's a parenting partner. Guide your child's learning, understand their world, and stay informed."}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Value-Based Nudging */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#fcc612] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              {lang === 'ar' ? 'التوجيه القائم على القيم' : 'Value-Based Nudging'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {lang === 'ar' 
                ? 'وجه طفلك بلطف نحو موضوعات تعليمية معينة أو قيم أساسية مثل اللطف والصبر والفضول. تدمج دمية هذه الدروس بشكل طبيعي في كل محادثة.' 
                : 'Gently nudge your child towards specific learning topics or core values like kindness, patience, and curiosity. Domyah weaves these lessons naturally into every conversation.'}
            </p>
          </div>

          {/* Thought Summaries */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#8acdea] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              {lang === 'ar' ? 'ملخصات الأفكار' : 'Thought Summaries'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {lang === 'ar' 
                ? 'بعد كل جلسة، احصل على ملخص واضح لما تحدث عنه طفلك - أسئلتهم وفضولهم وما يدور في أذهانهم. ابق على اتصال بعالمهم الداخلي.' 
                : "After each session, get a clear summary of what your child talked about - their questions, curiosities, and what's on their mind. Stay connected to their inner world."}
            </p>
          </div>

          {/* Smart Alerts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#e53e3e] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">
              {lang === 'ar' ? 'تنبيهات ذكية' : 'Smart Alerts'}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {lang === 'ar' 
                ? 'إذا اكتشفت دمية لغة مقلقة، أو أفكاراً خطيرة، أو علامات تنمر، أو محتوى غير لائق، ستحصل على تنبيه فوري. راحة البال، تعمل دائماً.' 
                : 'If Domyah detects concerning language, dangerous thoughts, signs of bullying, or inappropriate content, you get an instant alert. Peace of mind, always on.'}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {lang === 'ar' 
              ? 'جميع البيانات مشفرة وخاصة. أنت فقط ترى ملخصات وتنبيهات طفلك. سلامة طفلك وخصوصيته هي أولويتنا القصوى.' 
              : "All data is encrypted and private. Only you see your child's summaries and alerts. Your child's safety and privacy are our top priorities."}
          </p>
        </div>
      </div>
    </section>
  );
}
