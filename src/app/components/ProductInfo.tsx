const StarFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fcc612"
    className="w-5 h-5"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarOutline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fcc612"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1b1464]">
        Toya
      </h1>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">$119</span>
        <span className="text-lg font-normal">USD</span>
      </div>

      {/* Star Rating Row */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarOutline />
        </div>
        <span className="font-bold">4.7</span>
        <span className="text-gray-500">120 Reviews</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        Hey there! I&apos;m Toya, your child&apos;s curious, cuddly best friend. I talk,
        learn, and grow right alongside them — always ready for a new adventure,
        a bedtime story, or a giggly conversation. Every day with me feels like
        discovering something wonderful together!
      </p>

      {/* Purchase Option Buttons */}
      <div className="flex flex-col gap-3">
        {/* Single Character */}
        <button className="w-full p-5 rounded-2xl border-2 border-[#e53e3e] bg-red-50 text-left hover:bg-red-100 transition-colors">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-gray-900">Single Character</div>
              <div className="text-gray-500 text-sm">Toya</div>
            </div>
            <div className="text-right">
              <span className="line-through text-gray-400 mr-2">$119</span>
              <span className="font-bold text-gray-900">$99</span>
            </div>
          </div>
        </button>

        {/* Bundle & Save */}
        <button className="w-full p-5 rounded-2xl border-2 border-gray-200 bg-white text-left hover:border-[#e53e3e] transition-colors">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-gray-900">Bundle &amp; Save</div>
              <div className="text-gray-500 text-sm">Pick 2+ Characters</div>
            </div>
            <div className="text-right">
              <span className="line-through text-gray-400 mr-2">$269</span>
              <span className="font-bold text-gray-900">$218</span>
            </div>
          </div>
        </button>
      </div>

      {/* Shop Now Button */}
      <button className="w-full bg-[#e53e3e] text-white font-bold text-lg py-4 rounded-2xl hover:bg-red-600 transition-colors animate-pulse-glow">
        Shop Now
      </button>
    </div>
  );
}
