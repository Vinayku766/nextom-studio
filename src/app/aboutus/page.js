'use client'
import Image from "next/image"
import { motion } from 'framer-motion'

const page = () => {
  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="about"
      className="relative bg-black text-white px-6 md:px-20 py-24 overflow-hidden"
    >
      <div
        className="absolute -top-55 left-1/2 -translate-x-1/2 w-225 h-225
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
            📝 About Us
          </motion.h3>

          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Turning Ideas Into
            <span className="block bg-linear-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
              Cinematic Reality
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-stone-300 leading-relaxed"
            variants={fadeUp}
          >
            Nextom Studio is a next-generation creative studio where ideas turn
            into cinematic reality. We help brands, creators, and businesses
            stand out through high-quality visuals, powerful storytelling, and
            on-time delivery — always.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="shrink-0 w-40 h-40 rounded-full overflow-hidden border border-white/20"
            variants={scaleUp}
          >
            <Image
              src="/User/Vipul-Dagar.png"
              alt="Vipul Dagar"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div className="space-y-4 text-lg text-stone-300 leading-relaxed" variants={slideLeft}>
            <p>
              Founded by <span className="text-white font-semibold">Vipul Dagar</span>, a professional VFX artist, filmmaker, and visual storyteller with <span className="text-white font-semibold">7+ years of experience</span>, Nextom Studio was built with one clear goal:
            </p>
            <p className="text-white font-semibold text-xl">👉 Create visuals that people remember.</p>
            <p>
              From brand films and Instagram content to podcasts, commercials, edits, and CGI, we handle everything with creativity, precision, and passion ❤️‍🔥
            </p>
          </motion.div>
        </motion.div>

        {/* ================= HIGHLIGHT CARD ================= */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={scaleUp}
        >
          <h4 className="text-2xl font-bold mb-4">🌟 What Makes Us Different</h4>
          <ul className="space-y-3 text-stone-200">
            <li>🔥 Cinematic & modern approach</li>
            <li>🧠 Creative + technical expertise</li>
            <li>⚙️ Advanced tools & professional setup</li>
            <li>📱 Platform-ready content (Instagram, YouTube, Ads)</li>
            <li>🤍 Client-first mindset</li>
          </ul>
          <p className="mt-6 text-sm text-stone-300">
            Every project is custom-crafted to match your brand’s identity 🎯
          </p>
        </motion.div>
        <motion.div
          className="text-center max-w-3xl mx-auto py-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold" variants={slideRight}>
            ⏱️ On-Time. Every Time.
          </motion.h2>

          <motion.p className="mt-6 text-lg text-stone-200" variants={slideLeft}>
            We understand deadlines matter. At Nextom Studio, on-time delivery is non-negotiable.
          </motion.p>

          <motion.ul className="mt-6 space-y-2 text-stone-200">
            {['Planned workflow', 'Clear communication', 'Professional execution', 'No unnecessary delays'].map((li, i) => (
              <motion.li key={i} variants={fadeUp}>✔️ {li}</motion.li>
            ))}
          </motion.ul>

          <motion.p className="mt-4 text-stone-300" variants={fadeUp}>
            Your time is valuable — and we respect that 🤝
          </motion.p>
        </motion.div>
       </motion.div>
       
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold" variants={fadeUp}>🎥 What We Do</motion.h2>
          <motion.p className="mt-4 text-lg text-stone-300" variants={fadeUp}>
            We don’t just edit — we create experiences.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
            {[
              'Brand Videos & Advertisements',
              'Instagram Reels, Stories & Social Media Content',
              'Professional Shoots (Indoor & Outdoor)',
              'Podcast Video & Audio Production 🎙️',
              'VFX, CGI & Motion Graphics',
              'Cinematic Video Editing & Color Grading',
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-5 text-stone-200"
                variants={fadeUp}
              >
                ✨ {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="mt-8 text-stone-200" variants={fadeUp}>
            Whether you want to shoot fresh content, edit existing footage, or build a strong brand presence online — we’ve got you covered 💪
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mt-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold">🎯 Our Vision</h3>
            <p className="mt-4 text-stone-200 leading-relaxed">
              To build a studio known for premium visuals, futuristic creativity,
              and impactful storytelling, while helping brands grow in the
              digital world 🌍
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold">🚀 Our Mission</h3>
            <p className="mt-4 text-stone-200 leading-relaxed">
              To deliver eye-catching, emotional, and result-driven content that
              looks cinematic, feels premium, and performs everywhere 📈
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-bold">👤 Founder’s Note</h3>

          <blockquote className="mt-6 text-lg italic text-stone-200 leading-relaxed">
            “Nextom Studio was created from my deep love for films, VFX, and
            storytelling. Every frame we create carries emotion, intention,
            and quality.”
          </blockquote>

          <p className="mt-4 font-semibold text-white">
            — Vipul Dagar, Founder
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default page
