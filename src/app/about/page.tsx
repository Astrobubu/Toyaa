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
          <h1 className="text-5xl font-extrabold mb-4">About Toya</h1>
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
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2d1b69] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Toya began with a simple question: what if a child&apos;s best friend could actually
              talk back? Not through a screen, but through a warm, cuddly companion they could hold.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2024, our team of parents, engineers, and child development experts came
              together to build something we wished existed for our own kids — a toy that listens,
              learns, and grows alongside them.
            </p>
            <p className="text-gray-700">
              Every Toya is crafted with love, powered by safe AI, and designed to spark the kind
              of curiosity that lasts a lifetime.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gray-50 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2d1b69] mb-6">Our Mission</h2>
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
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Creativity First</h3>
              <p className="text-gray-600">We believe play should inspire imagination, not replace it.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Safety Always</h3>
              <p className="text-gray-600">
                Every conversation is filtered, monitored, and KidSafe certified.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
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
            <div>
              <p className="text-4xl font-extrabold mb-2">50K+</p>
              <p className="text-lg opacity-80">Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2">4.7★</p>
              <p className="text-lg opacity-80">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2">30+</p>
              <p className="text-lg opacity-80">Countries Served</p>
            </div>
            <div>
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
