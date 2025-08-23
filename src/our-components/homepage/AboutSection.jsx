'use client'
import Image from 'next/image'
import Div from '../common/DIv'

const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-white py-10 px-6 relative">
      <Div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Avatar */}
        <div className="shrink-0 w-75 h-75 md:w-52 md:h-52 rounded-full overflow-hidden">
          <Image
            src="/User/Vipul-Dagar.png"
            alt="Vipul Dagar portrait"
            width={208}
            height={208}
            className="w-full h-full object-cover scale-115 -translate-x-[20px] translate-y-[20px] md:scale-120 md:-translate-x-[20px]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About{' '}
            <span className="text-blue-800 text-shadow-lg text-shadow-gray">
              Vipul Dagar
            </span>
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            I’m Vipul Dagar — a video editor with <b className="text-white">7+ years</b> crafting ads, music videos,
            shorts, and long‑form content for brands and creators. I combine clean pacing, cinematic color, and punchy
            sound design to keep attention from the first second to the last.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">Editing</h3>
              <p className="text-sm text-white/70">
                Story‑driven cuts, speed‑ramping, transitions, and format repurposing (9:16 • 1:1 • 16:9).
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">Color & Sound</h3>
              <p className="text-sm text-white/70">
                Look‑building with film emulation, dialogue cleanup, SFX layers, and dynamic mixes.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-2">Motion & VFX</h3>
              <p className="text-sm text-white/70">
                Animated titles, product callouts, tracking, masking, and tasteful visual flair.
              </p>
            </div>
          </div>
        </div>
      </Div>
    </section>
  )
}

export default AboutSection
