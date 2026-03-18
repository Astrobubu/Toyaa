const items = [
  { emoji: "🔌", label: "Adapter & Cable" },
  { emoji: "🧸", label: "Toya Plush Doll" },
  { emoji: "📦", label: "Toya Voice Box™" },
  { emoji: "⭐", label: "Collectible Stickers" },
  { emoji: "❤️", label: "A Whole Lot of Love" },
];

export default function WhatsInTheBox() {
  return (
    <section className="py-20 px-4 bg-[#fad9e0]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1b1464] text-center mb-4">
          What&apos;s in the Box
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Inside, you&apos;ll find an Adapter, Cable, Plush Toy, Toya Voice Box™, Collectible Stickers, and a Whole Lot of Love!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 text-center w-36 shadow-sm"
            >
              <div className="text-3xl mb-3 animate-bounce-soft">{item.emoji}</div>
              <div className="font-semibold text-[#1b1464] text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
