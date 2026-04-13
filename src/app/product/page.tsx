import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b1464] mb-4">Our Family</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet the amazing smart companions ready to grow, learn, and have fun with your child!</p>
          </div>

          {/* Main Product: Domyah */}
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 mb-20 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px]">
                <Image 
                  src="/images/hero-1.webp" 
                  alt="Domyah - The main bear" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-1.5 bg-[#fdd5d8] text-[#e8453a] font-bold rounded-full text-sm mb-6">
                  Best Seller
                </div>
                <h2 className="text-4xl font-extrabold text-[#1b1464] mb-4">Domyah</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Your child&apos;s curious, cuddly best friend. Domyah talks, learns, and grows right alongside them - always ready for a new adventure, a bedtime story, or a giggly conversation.
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-gray-900">400 AED</span>
                  <Link 
                    href="/product/domyah" 
                    className="flex-1 bg-[#e8453a] text-white text-center px-6 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Clear Cut Divider */}
          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-2 border-dashed border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-6 text-2xl font-bold text-gray-500 uppercase tracking-widest">
                Coming Soon
              </span>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            We are working hard behind the scenes to bring more amazing friends and accessories to the Toya family. Stay tuned!
          </p>

          {/* Coming Soon Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "bunny", name: "Domyah Bunny", price: 400, color: "bg-[#fad9e0]", img: "/images/bunny-real.jpg" },
              { id: "pup", name: "Domyah Pup", price: 400, color: "bg-[#8acdea]", img: "/images/pup-real.jpg" },
              { id: "kitty", name: "Domyah Kitty", price: 400, color: "bg-[#c4dfd7]", img: "/images/kitty-real.webp" },
              { id: "owl", name: "Domyah Owl", price: 550, color: "bg-[#fcc612]/40", img: "/images/owl-real.avif" },
            ].map((p) => (
              <div key={p.id} className={`${p.color} rounded-3xl p-6 shadow-sm hover-lift flex flex-col`}>
                <div className="relative w-full aspect-square rounded-2xl mb-6 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-white text-[#1b1464] font-bold px-4 py-2 rounded-full text-sm">Coming Soon</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1b1464] mb-2">{p.name}</h3>
                <p className="text-[#e53e3e] font-bold mb-4">{p.price} AED</p>
                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/971558812252?text=${encodeURIComponent(`Hello! I'm interested in the ${p.name} when it becomes available.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-white/80 text-[#1b1464] font-bold py-3 px-6 rounded-xl text-sm hover:bg-white transition"
                  >
                    Show Interest
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}