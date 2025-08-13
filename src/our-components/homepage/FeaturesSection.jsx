'use client'
import { FiVideo } from 'react-icons/fi'
import { TbColorSwatch } from 'react-icons/tb'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import { PiSparkleLight } from 'react-icons/pi'
import { LuBrain } from 'react-icons/lu'
import { FaBolt } from 'react-icons/fa'

const features = [
  {
    icon: <FiVideo className="w-8 h-8 text-pink-500" />,
    title: 'Multi‑Camera Editing',
    description: 'Sync and switch angles instantly. Perfect for podcasts, interviews, and product explainers.',
  },
  {
    icon: <TbColorSwatch className="w-8 h-8 text-yellow-500" />,
    title: 'Advanced Color',
    description: 'Film‑style looks with skin‑tone isolation, film grain, and shot‑to‑shot matching.',
  },
  {
    icon: <HiOutlineSpeakerWave className="w-8 h-8 text-indigo-400" />,
    title: 'Sound Design',
    description: 'Crisp dialogue cleanup, cinematic whooshes, and custom music beds for your pace.',
  },
  {
    icon: <PiSparkleLight className="w-8 h-8 text-purple-400" />,
    title: 'Motion Graphics',
    description: 'Logo stings, lower‑thirds, kinetic typography, data viz, and social hooks that pop.',
  },
  {
    icon: <LuBrain className="w-8 h-8 text-green-400" />,
    title: 'AI‑Assist',
    description: 'Speech‑to‑text captions, silence removal, b‑roll suggestions, and content repurposing.',
  },
  {
    icon: <FaBolt className="w-8 h-8 text-yellow-300" />,
    title: 'Lightning Turnarounds',
    description: 'Agile pipeline with parallel review to deliver edits in 24–72 hours when needed.',
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Various Styles,{' '}
          <span className="text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
            Countless Assets
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto mb-12 text-lg">
          From punchy short‑form to cinematic brand films, our toolkit covers editing, grading,
          sound design, motion graphics, and AI‑assisted workflows that save hours without losing soul.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
