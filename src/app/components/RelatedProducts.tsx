"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  { name: "Toya Bear", price: 99, color: "bg-[#fdb698]", img: "/images/logo.png" },
  { name: "Toya Bunny", price: 119, color: "bg-[#fad9e0]", img: "/images/bunny-real.jpg" },
  { name: "Toya Pup", price: 99, color: "bg-[#8acdea]", img: "/images/pup-real.jpg" },
  { name: "Toya Kitty", price: 119, color: "bg-[#c4dfd7]", img: "/images/kitty.svg" },
  { name: "Toya Owl", price: 149, color: "bg-[#fcc612]/40", img: "/images/owl.svg" },
];

export default function RelatedProducts() {
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
                </div>
                <h3 className="font-bold text-[#1b1464] text-lg">{p.name}</h3>
                <p className="text-[#e53e3e] font-bold">${p.price} USD</p>
                <button className="mt-3 bg-[#e53e3e] text-white font-semibold py-2 px-6 rounded-xl text-sm hover:bg-red-600 transition">
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
