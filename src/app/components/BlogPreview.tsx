import Image from "next/image";

const posts = [
  {
    title: "The Power of Interactive Play in Child Development",
    desc: "Research shows children who engage in interactive play develop 40% stronger cognitive abilities. Discover how smart toys like Toya enhance problem-solving, language skills, and emotional intelligence through meaningful conversations.",
    img: "/images/hero-1.webp",
    tag: "Development",
    date: "Mar 15, 2026",
  },
  {
    title: "How Smart Toys Encourage Emotional Growth",
    desc: "When children talk to Toya about their feelings, they're practicing emotional vocabulary and self-regulation. Learn how AI-powered conversations help kids name their emotions and develop empathy.",
    img: "/images/father-daughter.webp",
    tag: "Emotional Intelligence",
    date: "Mar 10, 2026",
  },
  {
    title: "A Parent's Guide to Smart Toy Safety",
    desc: "Privacy, screen time, data protection — we answer every question parents have about AI toys. See how Toya's KidSafe certification and end-to-end encryption keep your child safe.",
    img: "/images/hero-3.jpg",
    tag: "Safety",
    date: "Mar 5, 2026",
  },
  {
    title: "Why Experts Recommend Interactive Companions",
    desc: "Child psychologists and educators are increasingly recommending interactive companions like Toya. Studies show children who engage with responsive toys show improvements in social skills and confidence.",
    img: "/images/hero-4.webp",
    tag: "Expert Insights",
    date: "Feb 28, 2026",
  },
  {
    title: "Teaching Through Play: Pushing Lessons via Toya",
    desc: "Parents can now guide their child's learning by pushing specific topics through the app. Want to teach kindness? Math? Space exploration? Toya weaves it naturally into conversation.",
    img: "/images/hero-2.jpg",
    tag: "Parenting",
    date: "Feb 20, 2026",
  },
  {
    title: "Understanding Your Child's Inner World",
    desc: "Toya's thought summaries give parents a window into what their child is curious about, worried about, and excited by. Learn how session reports are helping families connect on a deeper level.",
    img: "/images/why.png",
    tag: "Connection",
    date: "Feb 15, 2026",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-4">
          From the Blog
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Tips, research, and stories about raising creative, emotionally intelligent children.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#e53e3e] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                <h3 className="font-bold text-[#1b1464] mb-2 group-hover:text-[#e53e3e] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{post.desc}</p>
                <p className="text-[#e53e3e] font-semibold text-sm mt-4 group-hover:translate-x-1 transition-transform inline-block">
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
