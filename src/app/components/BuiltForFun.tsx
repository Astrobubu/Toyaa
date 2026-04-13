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
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Computer Inside */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v.5M8 9.5V10m8 4v.5m0-5V10m-3.5-6.5h-1A1.5 1.5 0 0010 5v1.5m4-3h1A1.5 1.5 0 0116.5 5v1.5M10 17.5V19a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-1.5m-7-11h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z" /></svg>
            </div>
            <h3 className="font-bold text-[#1b1464] mb-2">Computer Inside</h3>
            <p className="text-sm text-gray-600">A tiny cloud-connected processor powers every conversation, story, and learning moment.</p>
          </div>

          {/* 3 AA Battery Powered */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-bold text-[#1b1464] mb-2">3 AA Battery Powered</h3>
            <p className="text-sm text-gray-600">Simple to replace and enough to power the magic for weeks of play. No charging cables needed.</p>
          </div>

          {/* Crystal-Clear Audio */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>
            </div>
            <h3 className="font-bold text-[#1b1464] mb-2">Crystal-Clear Audio</h3>
            <p className="text-sm text-gray-600">High-quality speaker and responsive microphone — Domyah hears every whisper and speaks clearly.</p>
          </div>

          {/* Safe & Durable */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h3 className="font-bold text-[#1b1464] mb-2">Safe & Durable</h3>
            <p className="text-sm text-gray-600">Made with child-safe, non-toxic materials. Built tough to survive hugs, drops, and adventures.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
