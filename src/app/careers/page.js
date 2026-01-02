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
      id="careers"
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
            💼 Careers
          </motion.h3>

          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
            variants={fadeUp}
          >
            Build the Future of
            <span className="block bg-linear-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
              Cinematic Storytelling
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-stone-300 leading-relaxed"
            variants={fadeUp}
          >
            Nextom Studio is a creative-driven production studio focused on
            cinematic visuals, VFX, and powerful storytelling. We’re building
            something meaningful — step by step.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={slideLeft}>
            <h2 className="text-3xl font-bold mb-4">🎬 Studio Culture</h2>
            <p className="text-stone-300 leading-relaxed">
              At Nextom Studio, creativity comes first. We value ideas,
              storytelling, and craftsmanship over trends and shortcuts.
              Everyone we work with is treated as a creative partner — not just
              a resource.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md"
            variants={scaleUp}
          >
            <ul className="space-y-3 text-stone-200">
              <li>🎥 Cinematic-first mindset</li>
              <li>🧠 Creative freedom & ownership</li>
              <li>🤝 Respect for artists & collaborators</li>
              <li>⏱️ Professional workflows & timelines</li>
              <li>📈 Growth through real-world projects</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">🚫 We’re Not Hiring Right Now</h2>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed">
            Currently, Nextom Studio does not have any open job positions.
            We are focused on strengthening our creative foundation and
            delivering high-quality work to our clients.
          </p>
        </motion.div>
        {/* <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center"
            variants={fadeUp}
          >
            🔮 Future Opportunities
          </motion.h2>

          <motion.p
            className="mt-4 text-center text-lg text-stone-300"
            variants={fadeUp}
          >
            As we grow, we may collaborate or hire creative talent in areas like:
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              'Video Editors & Colorists',
              'VFX & CGI Artists',
              'Cinematographers',
              'Motion Graphics Designers',
              'Sound Designers',
              'Creative Producers',
            ].map((role, i) => (
              <motion.div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-5 text-stone-200"
                variants={fadeUp}
              >
                ✨ {role}
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        {/* ================= STAY CONNECTED ================= */}
        <motion.div
          className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center max-w-4xl mx-auto backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={scaleUp}
        >
          <h2 className="text-3xl font-bold">🤝 Stay Connected</h2>
          <p className="mt-4 text-lg text-stone-300 leading-relaxed">
            If you’re passionate about films, VFX, and storytelling, we’d love
            to connect in the future. Follow Nextom Studio or reach out with
            your portfolio — when opportunities open up, we’ll announce them.
          </p>

          <p className="mt-6 text-sm text-stone-400">
            Future openings will be shared on our official website and social platforms.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default page
