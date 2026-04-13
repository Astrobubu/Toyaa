"use client";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "Domyah Smart Plush",
    desc: "A soft, cuddly plush toy made with child-safe, non-toxic materials. Handcrafted and built to survive countless hugs and adventures.",
    img: "/images/hero-2.jpg",
  },
  {
    title: "Domyah Voice Box\u2122",
    desc: "The brain of Domyah \u2014 a compact, cloud-connected module that slides into a hidden pocket inside the plush. Contains the processor, speaker, microphone, and a compartment for 3 AA batteries.",
    img: "/images/why.png",
  },
  {
    title: "3 AA Batteries",
    desc: "Everything you need to get started right away. 3 AA batteries are enough to power the magic for weeks of playtime. Easy to replace when needed.",
    img: "/images/hero-4.webp",
  },
  {
    title: "Quick Start Guide",
    desc: "A simple, illustrated guide to get you set up in minutes. From inserting the Voice Box to pairing the app \u2014 we made it foolproof.",
    img: "/images/father-daughter.webp",
  },
];

export default function WhatsInTheBox() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2d1b69] text-center mb-4">
          What&apos;s in the Box
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Everything you need for your child&apos;s new best friend, right out of the box.
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm mb-8 lg:mb-0">
            <Image
              src={items[active].img}
              alt={items[active].title}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          {/* Right: Item list */}
          <div className="space-y-3">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                  active === i
                    ? "bg-white shadow-md border-l-4 border-[#e8453a]"
                    : "bg-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      active === i
                        ? "bg-[#e8453a] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        active === i ? "text-[#2d1b69]" : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {active === i && (
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
