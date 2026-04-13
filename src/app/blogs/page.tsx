import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    title: "The Power of Interactive Play in Child Development",
    tag: "Development",
    date: "Mar 15, 2026",
    description:
      "Research shows children who engage in interactive play develop 40% stronger cognitive abilities. Discover how smart toys enhance problem-solving and emotional intelligence.",
    image: "/images/hero-1.webp",
  },
  {
    title: "How Smart Toys Encourage Emotional Growth",
    tag: "Emotional Intelligence",
    date: "Mar 10, 2026",
    description:
      "When children talk about their feelings with Domyah, they practice emotional vocabulary and self-regulation. Learn how AI conversations build empathy.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "A Parent's Guide to Smart Toy Safety",
    tag: "Safety",
    date: "Mar 5, 2026",
    description:
      "Privacy, screen time, data protection — we answer every question parents have. See how KidSafe certification keeps your child safe.",
    image: "/images/hero-3.jpg",
  },
  {
    title: "Why Experts Recommend Interactive Companions",
    tag: "Expert Insights",
    date: "Feb 28, 2026",
    description:
      "Child psychologists are increasingly recommending interactive companions. Studies show improvements in social skills and confidence.",
    image: "/images/hero-4.webp",
  },
  {
    title: "Teaching Through Play: Pushing Lessons via Domyah",
    tag: "Parenting",
    date: "Feb 20, 2026",
    description:
      "Parents can guide learning by pushing topics through the app. Want to teach kindness? Math? Space? Domyah weaves it into conversation.",
    image: "/images/father-daughter.webp",
  },
  {
    title: "Understanding Your Child's Inner World",
    tag: "Connection",
    date: "Feb 15, 2026",
    description:
      "Thought summaries give parents a window into what their child is curious about. Learn how session reports help families connect.",
    image: "/images/why.png",
  },
  {
    title: "Screen Time vs. Play Time: Finding the Balance",
    tag: "Wellness",
    date: "Feb 8, 2026",
    description:
      "How smart physical toys like Domyah offer the benefits of technology without the downsides of screen addiction. A healthier alternative.",
    image: "/images/hero-1.webp",
  },
  {
    title: "Building Confidence Through Conversation",
    tag: "Development",
    date: "Feb 1, 2026",
    description:
      "Children who practice speaking with Domyah show measurable improvements in vocabulary, confidence, and willingness to express themselves.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "The Future of Educational Toys",
    tag: "Innovation",
    date: "Jan 25, 2026",
    description:
      "From simple wooden blocks to AI-powered companions — how educational toys have evolved and where they're heading next.",
    image: "/images/hero-3.jpg",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-12 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-[#2d1b69] hover:scale-105 transition-transform duration-300">
            The Toya Blog
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tips, research, and stories about raising creative, emotionally
            intelligent children.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition hover-lift"
              >
                {/* Image with tag badge */}
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#2d1b69] text-white text-xs font-semibold px-3 py-1 rounded-full hover:scale-110 transition-transform duration-200">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold text-[#2d1b69] mb-2 leading-snug group-hover:text-[#e8453a] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#2d1b69] hover:underline"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">Read More →</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
