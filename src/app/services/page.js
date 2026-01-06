'use client';
import { MdMovieEdit, MdAutoAwesomeMotion, MdOutlineOndemandVideo } from "react-icons/md";
import { motion } from 'framer-motion';
import { BsCameraReelsFill } from "react-icons/bs";
import { RiAdvertisementFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import Link from "next/link";

const page = () => {
  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="services"
      className="relative bg-black text-white px-6 md:px-20 py-24 overflow-hidden"
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225
        bg-linear-to-b from-primary-aqua/50 via-secondary-blue/30 to-transparent
        rounded-full blur-[160px] opacity-80 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto space-y-28">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-lg uppercase tracking-widest text-primary-aqua font-bold"
            variants={fadeUp}
          >
            🎥 Our Services
          </motion.h3>

          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Creative Services That
            <span className="block bg-linear-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
              Elevate Your Brand
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-stone-300 leading-relaxed"
            variants={fadeUp}
          >
            From cinematic video editing to high-performing social content,
            Nextom Studio delivers visuals that look premium, feel powerful,
            and drive real impact 🚀
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              id:"video-editing",
              title: 'Video Editing',
              desc: 'Cinematic, clean, and engaging edits crafted to tell your story with perfect pacing, color grading, and sound design.',
              icon: <MdMovieEdit />
            },
            { id: "motion-graphics",
              title: 'Motion Graphics',
              desc: 'High-quality motion graphics, animations, titles, and logo reveals that bring energy and clarity to your content.',
              icon: <MdAutoAwesomeMotion />,
            },
            {
              id: "short-form",
              title: 'Short-form Content',
              desc: 'Scroll-stopping Reels, Shorts, and TikToks optimized for attention, retention, and platform performance.',
              icon: <BsCameraReelsFill />,
            },
            {
              id: "corporate",
              title: 'Corporate & Ads',
              desc: 'Professional brand films, advertisements, and promos designed to build trust and drive conversions.',
              icon: <RiAdvertisementFill />
            },
            {
              id:"youtube",
              title: 'YouTube & Creator Edits',
              desc: 'Creator-focused editing that boosts watch time, engagement, and overall channel growth.',
              icon: <SiYoutubemusic />,
            },
            {
              id:"youtube",
              title: 'VFX & CGI',
              desc: 'Advanced visual effects and CGI to add cinematic depth, realism, and uniqueness to your videos.',
              icon: <MdOutlineOndemandVideo />
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6"
              variants={scaleUp}
              id={service.id}
            >
              <span className="text-3xl">{service.icon}</span>
              <h4 className="text-xl font-bold my-3">{service.title}</h4>
              <p className="text-stone-300 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={fadeUp}
          >
            ⚙️ Our Creative Process
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-stone-300"
            variants={fadeUp}
          >
            A smooth, transparent, and professional workflow — every time.
          </motion.p>

          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {[
              'Brief & Strategy',
              'Creative Execution',
              'Review & Refinement',
              'Final Delivery',
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-5"
                variants={fadeUp}
              >
                <h5 className="font-semibold text-lg mb-2">
                  {i + 1}. {step}
                </h5>
                <p className="text-sm text-stone-300">
                  Clear communication and focused execution at every stage.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= WHY CHOOSE US ================= */}
        <motion.div
          className="bg-white/10 border border-white/20 rounded-2xl p-10 backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={scaleUp}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            🌟 Why Choose Nextom Studio
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-200">
            <li>🔥 Cinematic & modern visuals</li>
            <li>🎯 Brand-focused storytelling</li>
            <li>⚡ Fast & reliable delivery</li>
            <li>🧠 Creative + technical expertise</li>
            <li>📱 Platform-optimized content</li>
            <li>🤍 Client-first approach</li>
          </ul>

          <p className="mt-6 text-center text-stone-300">
            Every project is crafted to stand out, perform better, and feel premium 🎬
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-bold">
            🚀 Ready to Level Up Your Content?
          </h3>
          <p className="mt-4 text-lg text-stone-300">
            Let’s turn your ideas into cinematic visuals that people remember.
          </p>
          <Link href={"/contact"}>
          <button className="mt-4 py-4 cursor-pointer px-10 rounded-full bg-linear-to-r from-primary-aqua to-secondary-blue text-black font-semibold hover:opacity-90 transition">
            Get Started
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default page
