'use client';
import {useState, useRef} from 'react';
import SendMailHook from '@/utils/SendMailHook';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
// import {motion} from "framer-motion";
// import { slideIn } from '@/utils/motion';
import Div from '@/our-components/common/DIv';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const backgroundStyle = {
        backgroundImage:"url(./contact/Global-Connect.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    const sendEmail = async (e) => {
  e.preventDefault();

  const name = form.current[0].value.trim();
  const phone = form.current[1].value.trim();
  const email = form.current[2].value.trim();
  const textArea = form.current[3].value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !phone || !textArea) {
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

  const cleanedPhone = phone.replace(/\D/g, "");

  if(cleanedPhone.length < 10){
     toast.error('Phone number must be at least 10 digits long', {
      position: 'top-right',
      theme: 'colored',
    });
    return;
  }

  setLoading(true);

  try {
    await SendMailHook(form);
    form.current.reset();
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
    <section
      className="relative overflow-hidden border-t border-b border-white/10"
      style={backgroundStyle}
    >
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/80 pointer-events-none"></div>
      <Div className="bg-black/40 pt-24 pb-20">
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 text-white">
          {/* Left content */}
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="font-bold tracking-wider text-xl md:text-3xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl leading-snug text-white">
              The first step to your cinematic journey starts here,
              <br /> Get in touch with us.
            </h1>

            <div className="space-y-2">
              <h4 className="text-xl md:text-2xl text-white/90 font-medium">
                Send Us a Message
              </h4>
              <p className="text-gray-300 max-w-lg text-base md:text-lg">
                Let’s make your brand videos unforgettable. Share your
                requirements with us and we’ll get in touch with you in less
                than 24 hours — promise!
              </p>
            </div>

            <h5 className="text-white/80 font-semibold text-lg">
              Let’s Create Something that Lasts.
            </h5>
          </div>
           <div
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/30">
          <form
            ref={form}
            onSubmit={sendEmail}
            className='space-y-4'
          >
            <input
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-aqua transition"
            />
            <input
              name="phone"
              placeholder="Phone number"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-aqua transition"
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-aqua transition"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Project details"
              className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-aqua transition"
            />

            <button
              disabled={loading}
              type="submit"
              className="
    relative w-full overflow-hidden
    font-semibold py-3 rounded-md text-white
    bg-gradient-to-r from-primary-aqua to-secondary-blue cursor-pointer"
            >
              <span className="relative z-10 flex justify-center items-center">
                {loading ? <ClipLoader size={20} color="#fff" /> : "Send"}
              </span>
            </button>
            <small
              className="text-gray-400 block text-center opacity-80"
              id="formNote"
            >
              We'll get back to you within a few hours.
            </small>
          </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative container mx-auto mt-16 px-6">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/30">
            <h4 className="text-xl font-semibold text-white mb-2">
              Head Office
            </h4>
            <p className="text-gray-300">Address</p>
          </div>
        </div>
      </Div>
    </section>
  );
}

export default Contact
