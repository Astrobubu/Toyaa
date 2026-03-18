import Image from "next/image";

const products = [
  { name: "Toya Bear", price: 99, color: "bg-[#fdb698]", img: "/images/hero-2.jpg" },
  { name: "Toya Bunny", price: 119, color: "bg-[#fad9e0]", img: "/images/hero-3.jpg" },
  { name: "Toya Pup", price: 99, color: "bg-[#8acdea]", img: "/images/hero-1.webp" },
  { name: "Toya Kitty", price: 119, color: "bg-[#c4dfd7]", img: "/images/father-daughter.webp" },
  { name: "Toya Owl", price: 149, color: "bg-[#fcc612]/40", img: "/images/hero-4.webp" },
];

export default function RelatedProducts() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          Meet the Family
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {products.map((product) => (
            <div
              key={product.name}
              className={`${product.color} rounded-2xl p-6 min-w-[250px] flex-shrink-0 hover:shadow-lg transition cursor-pointer`}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-bold text-[#1b1464] text-lg">{product.name}</p>
              <p className="text-[#e53e3e] font-bold">${product.price} USD</p>
              <button className="mt-3 bg-[#e53e3e] text-white font-semibold py-2 px-6 rounded-xl text-sm hover:bg-red-600 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
