export default function ParentalFeatures() {
  return (
    <section className="py-20 px-4 bg-[#1b1464] text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#fcc612] font-semibold text-sm uppercase tracking-wider text-center mb-4">
          For Parents
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-4">
          You&apos;re Always in the Loop
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Toya isn&apos;t just a toy — it&apos;s a parenting partner. Guide your child&apos;s learning, understand their world, and stay informed.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Push Lessons */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#fcc612] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Push Lessons &amp; Ideas</h3>
            <p className="text-gray-300 leading-relaxed">
              Want your child to learn about dinosaurs, practice math, or explore kindness? Push topics directly through the app and Toya weaves them naturally into play.
            </p>
          </div>

          {/* Thought Summaries */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#8acdea] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Thought Summaries</h3>
            <p className="text-gray-300 leading-relaxed">
              After each session, get a clear summary of what your child talked about — their questions, curiosities, and what&apos;s on their mind. Stay connected to their inner world.
            </p>
          </div>

          {/* Smart Alerts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#e53e3e] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Smart Alerts</h3>
            <p className="text-gray-300 leading-relaxed">
              If Toya detects concerning language, dangerous thoughts, signs of bullying, or inappropriate content, you get an instant alert. Peace of mind, always on.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            All data is encrypted and private. Only you see your child&apos;s summaries and alerts. Toya is KidSafe certified and COPPA compliant.
          </p>
        </div>
      </div>
    </section>
  );
}
