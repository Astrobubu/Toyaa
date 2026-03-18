const features = [
  {
    icon: "🧠",
    title: "Cloud-Connected Processor",
    description: "AI-powered conversations that adapt and learn",
  },
  {
    icon: "🔋",
    title: "Durable Lithium-Ion Battery",
    description: "Hours of uninterrupted playtime",
  },
  {
    icon: "🔊",
    title: "High-Quality Speaker",
    description: "Crystal-clear voice and sound",
  },
  {
    icon: "🎙️",
    title: "Responsive Microphone",
    description: "Hears every whisper and giggle",
  },
];

export default function BuiltForFun() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-4">
          Built for Endless Fun
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Incorporating a Cloud-Connected Processor, Durable Lithium-Ion
          Battery, High-Quality Speaker, and Responsive Microphone
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-[#1b1464] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
