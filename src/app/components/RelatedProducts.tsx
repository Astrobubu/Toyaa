"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useCart } from "../context/CartContext";

const products = [
  { id: "bunny", name: "Domyah Bunny", price: 400, color: "bg-[#fad9e0]", img: "/images/bunny-real.jpg" },
  { id: "pup", name: "Domyah Pup", price: 400, color: "bg-[#8acdea]", img: "/images/pup-real.jpg" },
  { id: "kitty", name: "Domyah Kitty", price: 400, color: "bg-[#c4dfd7]", img: "/images/kitty-real.webp" },
  { id: "owl", name: "Domyah Owl", price: 550, color: "bg-[#fcc612]/40", img: "/images/owl-real.avif" },
];

export default function RelatedProducts() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          Meet the Family
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
          className="!pb-4"
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className={`${p.color} rounded-2xl p-6 hover:shadow-lg transition cursor-pointer`}>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="bg-white text-[#1b1464] px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-[#1b1464] text-lg">{p.name}</h3>
                <p className="text-[#e53e3e] font-bold">{p.price} AED</p>
                <a 
                  href={`https://wa.me/971558812252?text=${encodeURIComponent(`Hello! I'm interested in the ${p.name} when it becomes available.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-center bg-white/80 text-[#1b1464] border border-[#1b1464] font-bold py-2 px-6 rounded-xl text-sm hover:bg-white transition"
                >
                  Show Interest
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
