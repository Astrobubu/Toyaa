import Image from "next/image";

export default function ToyaOS() {
  return (
    <section className="py-20 px-4 bg-[#c4dfd7]/30">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] mb-6">
            Toya OS™
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Powered by our proprietary Toya OS™, every conversation is safe, age-appropriate, and designed to spark curiosity. Our system learns your child&apos;s interests and adapts to provide the most engaging and educational experience possible.
          </p>
          {/* KidSafe badge */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-4 w-fit">
            <div className="bg-green-100 rounded-xl p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1b1464]">KidSafe Certified</p>
              <p className="text-sm text-gray-500">Independently verified child safety</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/why.png"
            alt="Toya OS"
            width={500}
            height={500}
            className="rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
