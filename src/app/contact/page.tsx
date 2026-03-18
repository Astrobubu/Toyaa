import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "How long does the battery last?",
    answer: "Toya's rechargeable battery lasts 6-8 hours on a single charge.",
  },
  {
    question: "Is Toya safe for young children?",
    answer:
      "Yes! Toya is KidSafe certified, COPPA compliant, and all conversations are filtered and monitored.",
  },
  {
    question: "Can I wash the plush?",
    answer:
      "Absolutely! Remove the Voice Box™ module and toss the plush in the washing machine.",
  },
  {
    question: "What ages is Toya designed for?",
    answer:
      "Toya is designed for children ages 3-10, with content that adapts to their age and development level.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-[#2d1b69] text-white py-20 px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-80">
            Have a question? We&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact Content */}
        <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
          {/* Left — Contact Form */}
          <div>
            <h2 className="font-bold text-2xl text-[#2d1b69] mb-6">
              Send us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d1b69]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d1b69]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d1b69]"
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#2d1b69]"
              />
              <button
                type="submit"
                className="bg-[#e8453a] text-white font-bold py-3 px-8 rounded-xl w-full hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right — Contact Info */}
          <div>
            <h2 className="font-bold text-2xl text-[#2d1b69] mb-6">
              Other Ways to Reach Us
            </h2>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-2xl mb-2">📧</p>
              <p className="font-bold text-[#2d1b69] mb-1">Email</p>
              <p className="text-gray-600">hello@toyaplay.com</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-2xl mb-2">📍</p>
              <p className="font-bold text-[#2d1b69] mb-1">Address</p>
              <p className="text-gray-600">Dubai, United Arab Emirates</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-4">
              <p className="text-2xl mb-2">🕐</p>
              <p className="font-bold text-[#2d1b69] mb-1">Hours</p>
              <p className="text-gray-600">Sunday - Thursday, 9am - 6pm GST</p>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="bg-gray-50 py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2d1b69] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-6 text-left">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-[#2d1b69] mb-2">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
