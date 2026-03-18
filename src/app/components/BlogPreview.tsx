import Image from "next/image";

const posts = [
  {
    title: "The Power of Interactive Play in Child Development",
    desc: "Discover how interactive play with smart toys enhances cognitive abilities and builds emotional intelligence.",
    img: "/images/hero-1.webp",
  },
  {
    title: "How Smart Toys Encourage Emotional Growth",
    desc: "Smart toys like Toya are changing the way children learn by making education interactive and fun.",
    img: "/images/father-daughter.webp",
  },
  {
    title: "Integrating Smart Toys in Early Education",
    desc: "Discover how smart toys are shaping the future of early education by making learning personalized.",
    img: "/images/hero-3.jpg",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          From the Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-bold text-[#1b1464] mb-2">{post.title}</p>
                <p className="text-gray-600 text-sm">{post.desc}</p>
                <p className="text-[#e53e3e] font-semibold text-sm mt-4">
                  Read More →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
