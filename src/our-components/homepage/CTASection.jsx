'use client'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify';
import SendMailHook from '@/utils/SendMailHook';
import { ClipLoader } from 'react-spinners';
import Div from '../common/DIv';
import EarthCanvas from "../common/EarthCanvas";
import { motion } from "framer-motion";
import { slideIn } from '@/utils/motion';

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

// const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };


  return (
    <section id="cta" className="text-white py-20 px-4 relative z-2 overflow-hidden">
             <Div className='space-y-6 mb-25 text-center'>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-blue-600">launch your story</span>?
          </h2>
          <p className="text-gray-400">
            Share a brief and we’ll send a tailored plan with timelines and budget the same day.
          </p>
          {/* <Link href="#contact" className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition">
            Book a Free Consult
          </Link> */}
          </Div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Text Content */}
        <motion.div 
           variants={slideIn("left", "tween", 0.2, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}} 
         className="col-span-1">
        <EarthCanvas />
        </motion.div>

        {/* Form */}
  
        <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}} 
        className="backdrop-blur-lg col-span-1 bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
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
              className="w-full bg-blue-800 hover:bg-blue-900 cursor-pointer text-white font-semibold py-3 rounded-md transition"
            >
             {loading ? <ClipLoader size={20} color="#fff" /> : 'Send'}
            </button>
            <small className="text-gray-400 block text-center opacity-80" id="formNote">
              We'll get back to you within a few hours.
            </small>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
