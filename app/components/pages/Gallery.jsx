export default function Gallery() {
  const items = [
    "bg-red-400 h-32",
    "bg-blue-400 h-40",
    "bg-green-400 h-60",
    "bg-yellow-400 h-32",
    "bg-red-600 h-52",
    "bg-pink-400 h-44",
    "bg-indigo-400 h-72",
    "bg-teal-400 h-56",
    "bg-orange-400 h-48",
    "bg-gray-400 h-64",
    "bg-cyan-400 h-36",
    "bg-lime-400 h-28",
  ];

  return (
    <div>
      <div
        id="gallery"
        className="scroll-mt-[80px] h-[calc(100vh - 104px)] w-full bg-darkPurple text-cream resp-px p-14"
      >
        <p className="clash-display font-semibold text-3xl mb-12">Gallery</p>
        <div className="max-w-6xl mx-auto p-5">
          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {items.map((color, index) => (
              <div
                key={index}
                className={`${color} w-full rounded-lg break-inside-avoid p-2`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
