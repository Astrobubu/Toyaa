const steps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Get started by downloading our app from the Google Play Store or the Apple App Store. The app is your control center for managing everything.",
  },
  {
    number: "02",
    title: "Pair Your Smart Doll",
    description:
      "Easily connect the smart doll to your phone via Bluetooth and personalize your child's experience.",
  },
  {
    number: "03",
    title: "Customize & Set Preferences",
    description:
      "Choose the doll's voice, language, and personality. Enter personal details like your child's name to enhance interaction.",
  },
  {
    number: "04",
    title: "Monitor & Engage",
    description:
      "Stay in control with the parental dashboard. View summaries, set boundaries, and ensure safe interactions.",
  },
  {
    number: "05",
    title: "Enjoy Fun, Safe Interaction",
    description:
      "Let your child build a connection with the doll through personalized conversations, games, and learning.",
  },
  {
    number: "06",
    title: "Update & Enhance",
    description:
      "Regularly update the app to access new features. Your smart doll will continue to gain new abilities and content.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition hover-lift"
            >
              <div className="text-5xl font-extrabold text-[#fdb698]/50">
                {step.number}
              </div>
              <h3 className="font-bold text-[#1b1464] text-xl mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
