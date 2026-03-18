import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#2d1b69] to-[#4a2d8a] text-white py-24 px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 hover:scale-105 transition-transform duration-300">About Toya</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We&apos;re on a mission to make childhood more imaginative, connected, and fun.
          </p>
        </section>

        {/* Our Story */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-10 lg:mb-0">
            <Image
              src="/images/father-daughter.webp"
              alt="Father and daughter playing with Toya"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2d1b69] mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Toya began with a simple question: what if a child&apos;s best friend could actually
                talk back? Not through a screen, but through a warm, cuddly companion they could hold.
              </p>
              <p className="text-gray-700">
                Founded in 2024, our team of parents, engineers, and child development experts came
                together to build something we wished existed for our own kids — a toy that listens,
                learns, and grows alongside them.
              </p>
              <p className="text-gray-700">
                Every Toya is crafted with love, powered by safe AI, and designed to spark the kind
                of curiosity that lasts a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gray-50 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2d1b69] mb-6 hover:scale-105 transition-transform duration-300">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To empower children through innovative play that inspires creativity and critical
              thinking. We create high-quality, sustainable smart toys that educate while
              entertaining, nurturing curiosity and a passion for learning.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-[#2d1b69] text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover-lift">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Creativity First</h3>
              <p className="text-gray-600">We believe play should inspire imagination, not replace it.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover-lift">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Safety Always</h3>
              <p className="text-gray-600">
                Every conversation is filtered, monitored, and KidSafe certified.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover-lift">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Built to Last</h3>
              <p className="text-gray-600">
                Sustainable materials, removable electronics, machine-washable plush.
              </p>
            </div>
          </div>
        </section>

        {/* Team / Numbers */}
        <section className="bg-gradient-to-r from-[#2d1b69] to-[#4a2d8a] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-extrabold mb-2">50K+</p>
              <p className="text-lg opacity-80">Happy Families</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-extrabold mb-2">4.7★</p>
              <p className="text-lg opacity-80">Average Rating</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-extrabold mb-2">30+</p>
              <p className="text-lg opacity-80">Countries Served</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-extrabold mb-2">24/7</p>
              <p className="text-lg opacity-80">Parental Support</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
