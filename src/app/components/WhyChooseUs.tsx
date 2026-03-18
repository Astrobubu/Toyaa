const features = [
  {
    emoji: "📚",
    title: "Interactive Learning",
    description: "Toya blends fun with education, helping kids learn while they play.",
  },
  {
    emoji: "🎯",
    title: "Personalized Experience",
    description: "Tailored interactions that adapt to your child's personality and growth.",
  },
  {
    emoji: "🔒",
    title: "Safe & Secure",
    description: "Designed with top-tier privacy and security for your child's safety.",
  },
  {
    emoji: "🌱",
    title: "Grows with Your Child",
    description: "Toya evolves with new content as your child develops.",
  },
  {
    emoji: "📱",
    title: "Easy Parental Control",
    description: "Simple app controls let parents customize and monitor playtime.",
  },
  {
    emoji: "💛",
    title: "Emotional Development",
    description: "Promotes empathy and communication through engaging conversations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-[#8acdea]/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          Why Choose Toya?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition hover-tilt"
            >
              <div className="text-3xl mb-4">{feature.emoji}</div>
              <h3 className="font-bold text-[#1b1464] text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
