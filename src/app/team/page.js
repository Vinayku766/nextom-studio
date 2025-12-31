'use client'
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
    🤝 Our Team
  </motion.h3>
    <motion.h1
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
            variants={fadeUp}
          >
    Driven by Creativity, 
    <span className="block bg-linear-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
    United by Passion
    </span>
  </motion.h1>
  <motion.p
    className="mt-6 text-lg text-stone-300 leading-relaxed"
    variants={fadeUp}
  >
    At <span className="text-white font-semibold">Nextom Studio</span>, our strength is our people 💪✨  
    We are a passionate, skilled, and hardworking creative team based in  
    <span className="text-white font-semibold"> Uttam Nagar, New Delhi, India 🇮🇳</span>,  
    working together to deliver exceptional results — every single time.
  </motion.p>

  <motion.p
    className="mt-4 text-lg text-stone-200"
    variants={fadeUp}
  >
    We believe great visuals are created when <span className="text-white font-semibold">
    creativity, teamwork, and commitment</span> come together.
  </motion.p>
</motion.div>

<motion.div
  className="max-w-6xl mx-auto space-y-8"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.h2 className="text-3xl font-bold text-center" variants={fadeUp}>
    👥 Team Members & Designations
  </motion.h2>
   <div className="grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-10">
  <motion.div
    className="bg-white/10 border border-white/20 rounded-2xl p-6"
    variants={scaleUp}
  >
    <h3 className="text-xl font-bold">🎬 Vipul Dagar</h3>
    <p className="text-primary-aqua font-semibold mt-1">
      Founder | Creative Director | VFX Artist
    </p>
    <p className="mt-3 text-stone-200">
      The creative mind behind Nextom Studio. With <span className="text-white font-semibold">
      7+ years of professional experience</span>, Vipul leads every project with
      cinematic vision, powerful storytelling, and technical excellence.
    </p>
  </motion.div>

  <motion.div className="bg-white/10 border border-white/20 rounded-2xl p-6" variants={scaleUp}>
    <h3 className="text-xl font-bold">🎥 Video Editors & Motion Designers</h3>
    <p className="text-primary-aqua font-semibold mt-1">
      Post-Production Specialists
    </p>
    <p className="mt-3 text-stone-200">
      Turning raw footage into engaging stories using clean edits, smooth transitions,
      professional color grading, motion graphics, and VFX that elevate the final output.
    </p>
  </motion.div>

  <motion.div className="bg-white/10 border border-white/20 rounded-2xl p-6" variants={scaleUp}>
    <h3 className="text-xl font-bold">📸 Cinematographers & Shoot Team</h3>
    <p className="text-primary-aqua font-semibold mt-1">
      Production & Camera Experts
    </p>
    <p className="mt-3 text-stone-200">
      From brand shoots to podcasts and reels, our team ensures perfect framing,
      lighting, and cinematic quality — indoor or outdoor.
    </p>
  </motion.div>

  <motion.div className="bg-white/10 border border-white/20 rounded-2xl p-6" variants={scaleUp}>
    <h3 className="text-xl font-bold">🎙️ Podcast Production Team</h3>
    <p className="text-primary-aqua font-semibold mt-1">
      Audio & Video Podcast Specialists
    </p>
    <p className="mt-3 text-stone-200">
      Multi-camera setups, crystal-clear audio, lighting, editing, and final delivery —
      helping brands and creators look and sound professional.
    </p>
  </motion.div>

  <motion.div className="bg-white/10 border border-white/20 rounded-2xl p-6" variants={scaleUp}>
    <h3 className="text-xl font-bold">📱 Social Media & Brand Content Team</h3>
    <p className="text-primary-aqua font-semibold mt-1">
      Reels, Stories & Digital Content Creators
    </p>
    <p className="mt-3 text-stone-200">
      Focused on Instagram, YouTube, and digital platforms — creating
      scroll-stopping, platform-optimized, result-driven content 📈
    </p>
  </motion.div>
  </div>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 space-x-10 space-y-10">
<motion.div
  className="max-w-5xl mx-auto text-center space-y-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.h2 className="text-3xl font-bold" variants={fadeUp}>
    💼 How We Work
  </motion.h2>

  <motion.ul className="space-y-3 text-stone-200 text-lg">
    {[
      '🤍 We treat every client like a partner',
      '🧠 We understand your vision before execution',
      '⏱️ We respect deadlines — on-time delivery always',
      '🎯 We focus on results, not just visuals',
    ].map((item, i) => (
      <motion.li key={i} variants={fadeUp}> {item}</motion.li>
    ))}
  </motion.ul>

  <motion.p className="text-stone-300" variants={fadeUp}>
    No confusion. No excuses. Just clear communication and quality work.
  </motion.p>
</motion.div>

<motion.div
  className="max-w-5xl mx-auto text-center space-y-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.h2 className="text-3xl font-bold" variants={fadeUp}>
    🌟 Why Clients Trust Us
  </motion.h2>

  <motion.ul className="space-y-3 text-stone-200 text-lg">
    {[
      'Skilled & experienced team',
      'Transparent workflow',
      'End-to-end support (shoot to final delivery)',
      'Support at every step of the journey',
    ].map((item, i) => (
      <motion.li key={i} variants={fadeUp}>✔️ {item}</motion.li>
    ))}
  </motion.ul>

  <motion.p className="text-stone-200" variants={fadeUp}>
    Whether you’re a brand, creator, startup, or business —  
    we’re always ready to go the extra mile 🚀
  </motion.p>
</motion.div>
</div>
      </div>
    </section>
  )
}

export default page
