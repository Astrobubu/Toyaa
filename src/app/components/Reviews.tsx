"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Alice Johnson",
    img: "/images/rev3.jpg",
    text: "I\u2019ve been using Toya products for a few months now, and I can confidently say they are top-notch! The quality is exceptional, and the design is both modern and functional. Every piece feels thoughtfully crafted.",
    rating: 5,
  },
  {
    name: "Charlie Brown",
    img: "/images/rev2.jpg",
    text: "As a busy parent, I\u2019m always looking for products that simplify my life, and Toya has delivered! Their innovative solutions have made such a difference in our household. Toya has quickly become a brand I trust!",
    rating: 5,
  },
  {
    name: "David Miller",
    img: "/images/rev1.jpg",
    text: "Toya\u2019s customer service is truly outstanding. Their team responded promptly and helped me resolve my issue with a friendly attitude. It\u2019s refreshing to see a company that genuinely cares about its customers.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          The Reviews Are In!
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition h-full">
                <div className="flex text-[#fcc612] mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image src={r.img} alt={r.name} width={48} height={48} className="rounded-full object-cover w-12 h-12" />
                  <span className="font-bold text-[#1b1464]">{r.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
