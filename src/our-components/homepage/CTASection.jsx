'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import SendMailHook from '@/utils/SendMailHook';
import { ClipLoader } from 'react-spinners';

export default function CTASection() {
const form = useRef();
const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
  e.preventDefault();

  const name = form.current[0].value.trim();
  const email = form.current[1].value.trim();
  const textArea = form.current[2].value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !textArea) {
    toast.error('Please enter all fields', {
      position: 'top-right',
      theme: 'colored',
    });
    return;
  }

  if (!emailRegex.test(email)) {
    toast.error('Please enter a valid email address', {
      position: 'top-right',
      theme: 'colored',
    });
    return;
  }

  setLoading(true);

  try {
    await SendMailHook(form);
    form.current.reset(); // optional: clear form after success
    toast.success('Query Sent Successfully!', {
      position: 'top-right',
      theme: 'dark',
      icon: '🚀',
    });
  } catch (error) {
    toast.error('Failed to send. Please try again.', {
      position: 'top-right',
      theme: 'colored',
    });
  }finally {
      setLoading(false);
    }
};



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
          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <input
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Project details"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
            >
             {loading ? <ClipLoader size={20} color="#fff" /> : 'Send'}
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
