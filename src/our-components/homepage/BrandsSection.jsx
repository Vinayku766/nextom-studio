'use client'

const brands = [
  { name: 'BrandOne', svg: <circle cx="12" cy="12" r="8" /> },
  { name: 'Vertex', svg: <rect x="4" y="6" width="16" height="12" rx="3" /> },
  { name: 'NorthPeak', svg: <path d="M4 18L12 6l8 12H4Z" /> },
  { name: 'Aurora', svg: <path d="M6 6h12v12H6z" /> },
  {
    name: 'Mono',
    svg: (
      <>
        <circle cx="8" cy="12" r="4" />
        <circle cx="16" cy="12" r="4" />
      </>
    ),
  },
]

const loopedBrands = [...brands, ...brands] // repeat for seamless scrolling

const BrandsSection = () => {
  return (
    <section className="bg-black py-10 overflow-hidden border-t border-b border-white/10">
      <div className="relative">
        <div className="marquee-track flex gap-6 w-max">
          {loopedBrands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-white text-sm font-medium min-w-max"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
                height={20}
                className="text-pink-500"
              >
                {brand.svg}
              </svg>
              {brand.name}
            </div>
          ))}
        </div>
      </div>

      {/* Inline custom CSS */}
      <style jsx>{`
        .marquee-track {
          animation: scrollMarquee 40s linear infinite;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default BrandsSection
