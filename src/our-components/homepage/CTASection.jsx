'use client'
import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="cta" className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">launch your story</span>?
          </h2>
          <p className="text-gray-400 max-w-md">
            Share a brief and we’ll send a tailored plan with timelines and budget the same day.
          </p>
          <Link href="#contact" className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Book a Free Consult
          </Link>
        </div>

        {/* Form */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="msg"
              rows={4}
              placeholder="Project details"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
            >
              Send Brief
            </button>
            <small className="text-gray-400 block text-center opacity-80" id="formNote">
              We'll get back to you within a few hours.
            </small>
          </form>
        </div>
      </div>
    </section>
  )
}
