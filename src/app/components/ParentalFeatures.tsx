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
            <div className="bg-[#fcc612] rounded-xl w-14 h-14 flex items-center justify-center text-2xl mb-6">
              📤
            </div>
            <h3 className="font-bold text-xl mb-3">Push Lessons & Ideas</h3>
            <p className="text-gray-300 leading-relaxed">
              Want your child to learn about dinosaurs, practice math, or explore kindness? Push topics directly through the app and Toya weaves them naturally into play.
            </p>
          </div>

          {/* Thought Summaries */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#8acdea] rounded-xl w-14 h-14 flex items-center justify-center text-2xl mb-6">
              📊
            </div>
            <h3 className="font-bold text-xl mb-3">Thought Summaries</h3>
            <p className="text-gray-300 leading-relaxed">
              After each session, get a clear summary of what your child talked about — their questions, curiosities, and what&apos;s on their mind. Stay connected to their inner world.
            </p>
          </div>

          {/* Smart Alerts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition">
            <div className="bg-[#e53e3e] rounded-xl w-14 h-14 flex items-center justify-center text-2xl mb-6">
              🚨
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
