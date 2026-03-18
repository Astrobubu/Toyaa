"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero-1.webp",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.webp",
];

export default function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#fdb698]">
        <Image
          src={images[selectedIndex]}
          alt={`Product image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Row */}
      <div className="flex gap-3">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 ${
              index === selectedIndex
                ? "border-[#e53e3e]"
                : "border-transparent"
            }`}
          >
            <div className="relative w-full h-full bg-[#fdb698]">
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
