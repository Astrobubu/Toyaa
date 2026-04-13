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
              alt="Father and daughter playing with Domyah"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2d1b69] mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Domyah began with a simple question: what if a child&apos;s best friend could actually
                talk back? Not through a screen, but through a warm, cuddly companion they could hold.
              </p>
              <p className="text-gray-700">
                Founded in 2024, our team of parents, engineers, and child development experts came
                together to build something we wished existed for our own kids — a toy that listens,
                learns, and grows alongside them.
              </p>
              <p className="text-gray-700">
                Every Domyah is crafted with love, powered by safe AI, and designed to spark the kind
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
                Every conversation is filtered and monitored to ensure a safe experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover-lift">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#2d1b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d1b69] mb-3">Built to Last</h3>
              <p className="text-gray-600">
                High-quality, child-safe materials and handcrafted details for a toy that lasts.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & WhatsApp Section */}
        <section className="bg-gray-50 py-16 px-4" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1b1464] mb-6 hover:scale-105 transition-transform duration-300">
              Handcrafted Just For You
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We are a small, passionate team, and Domyah is a brand new product! Currently, every single item is lovingly <strong>made to order</strong>. We do not hold bulk stock, which means your Domyah is crafted specially for your little one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-10 text-lg">
              Have a feature request, a special idea, or just want to chat with us about your order? We&apos;d love to hear from you directly!
            </p>
            <a
              href="https://wa.me/971558812252?text=Hello! I have a question/feature request for Domyah."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-[#25D366] hover:bg-[#20b858] transition-colors hover-lift"
            >
              <svg fill="currentColor" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
              </svg>
              Talk to us on WhatsApp
            </a>
          </div>
        </section>

        {/* Join Us */}
        <section className="bg-gradient-to-r from-[#2d1b69] to-[#4a2d8a] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Join the Toya Family</h2>
            <p className="text-xl opacity-90 mb-8">
              We are a small startup on a big mission. Every Domyah is made to order with love.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
