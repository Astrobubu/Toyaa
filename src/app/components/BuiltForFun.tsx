export default function BuiltForFun() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-4">
          Built for Endless Fun
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          A smart companion on the outside, powerful technology on the inside — designed for real life with kids.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Computer Inside */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Computer Inside</h3>
            <p className="text-sm text-gray-600">A tiny cloud-connected processor powers every conversation, story, and learning moment.</p>
          </div>

          {/* Battery Included */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔋</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Battery Included</h3>
            <p className="text-sm text-gray-600">Rechargeable lithium-ion battery gives hours of uninterrupted playtime. Just charge and go!</p>
          </div>

          {/* High-Quality Speaker */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔊</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Crystal-Clear Audio</h3>
            <p className="text-sm text-gray-600">High-quality speaker and responsive microphone — Toya hears every whisper and speaks clearly.</p>
          </div>

          {/* Open & Remove */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Open & Remove</h3>
            <p className="text-sm text-gray-600">The Voice Box™ easily slides out of the plush. Pop it open, remove the tech, and you have a regular cuddly toy.</p>
          </div>

          {/* Easy to Clean */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧼</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Easy to Clean</h3>
            <p className="text-sm text-gray-600">Remove the electronics module and toss the plush in the wash. Spills, dirt, sticky fingers — no problem.</p>
          </div>

          {/* Safe & Durable */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="font-bold text-[#1b1464] mb-2">Safe & Durable</h3>
            <p className="text-sm text-gray-600">Made with child-safe, non-toxic materials. Built tough to survive drops, hugs, and adventures.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
