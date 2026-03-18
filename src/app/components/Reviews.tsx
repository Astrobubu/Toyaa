import Image from "next/image";

const reviews = [
  {
    name: "Alice Johnson",
    img: "/images/rev3.jpg",
    rating: 5,
    text: "I've been using Toya products for a few months now, and I can confidently say they are top-notch! The quality is exceptional, and the design is both modern and functional. Every piece feels thoughtfully crafted.",
  },
  {
    name: "Charlie Brown",
    img: "/images/rev2.jpg",
    rating: 5,
    text: "As a busy parent, I'm always looking for products that simplify my life, and Toya has delivered! Their innovative solutions have made such a difference in our household. Toya has quickly become a brand I trust!",
  },
  {
    name: "David Miller",
    img: "/images/rev1.jpg",
    rating: 5,
    text: "Toya's customer service is truly outstanding. Their team responded promptly and helped me resolve my issue with a friendly attitude. It's refreshing to see a company that genuinely cares about its customers.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          The Reviews Are In!
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#fcc612]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <span className="font-bold text-[#1b1464]">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
