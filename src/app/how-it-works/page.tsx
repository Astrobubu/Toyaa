import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Unbox Your Domyah",
    description:
      "Inside you'll find your Domyah plush, the Voice Box™ module, 3 AA batteries, and a quick start guide.",
  },
  {
    number: 2,
    title: "Download the App",
    description:
      "Grab the Toya app from the App Store or Google Play. Create your parent account and set up your child's profile with their name, age, and interests.",
  },
  {
    number: 3,
    title: "Insert the Voice Box™",
    description:
      "Slide the Voice Box™ into the pocket inside your Domyah plush. It clicks right in - no tools needed. The plush is designed with a hidden zippered compartment.",
  },
  {
    number: 4,
    title: "Pair via Bluetooth",
    description:
      "Open the app, tap 'Connect', and Domyah pairs automatically. The doll will say hello - that's when you know you're connected!",
  },
  {
    number: 5,
    title: "Customize the Experience",
    description:
      "Choose Domyah's voice, language, and personality. Set conversation boundaries, push learning topics, and configure alert preferences.",
  },
  {
    number: 6,
    title: "Let the Magic Begin",
    description:
      "Hand Domyah to your child and watch the connection grow. Check the app for thought summaries, conversation highlights, and smart alerts.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#f5b800] to-[#ffca1c] py-20 px-4 text-center">
          <h1 className="text-5xl font-extrabold text-[#2d1b69] mb-4 hover:scale-105 transition-transform duration-300">
            How Domyah Works
          </h1>
          <p className="text-xl text-[#2d1b69] max-w-2xl mx-auto opacity-80">
            From unboxing to your child&apos;s first conversation - here&apos;s
            everything you need to know.
          </p>
        </section>

        {/* Steps */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          {steps.map((step) => {
            const isEven = step.number % 2 === 0;
            return (
              <div
                key={step.number}
                className={`group hover-lift flex items-center gap-8 py-8 ${
                  isEven ? "lg:flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Numbered circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#2d1b69] text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-xl text-[#2d1b69] mb-2 group-hover:text-[#e8453a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-[#2d1b69] text-white py-16 text-center px-4">
          <h2 className="text-4xl font-extrabold mb-6 hover:scale-105 transition-transform duration-300">Ready to Meet Domyah?</h2>
          <a
            href="#products"
            className="inline-block bg-[#e8453a] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transition-colors animate-pulse-glow"
          >
            Shop Now
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
