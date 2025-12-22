"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFilm, FaPalette, FaVideo } from "react-icons/fa";

const ServiceCard = ({ title, items, icon }) => (
  <div className="relative flex-1 min-w-[230px] bg-white/5 border border-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 ring-1 ring-white/10 hover:ring-white/20 transition-transform transform duration-300 hover:scale-105">
    
      <div className="absolute top-5 right-5 p-3 rounded-lg bg-white/10 flex-none">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <ul className="mt-3 text-sm leading-relaxed space-y-2 text-stone-200/90">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-primary-aqua">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
  </div>
);

const page = () => {
  return (
    <div className="bg-black text-white">
      <section className="relative px-6 md:px-20 py-20 text-center overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
          bg-gradient-to-b from-primary-aqua/60 via-secondary-blue/40 to-transparent
          rounded-full blur-[160px] opacity-80 pointer-events-none">
        </div>
        {/* <div className="absolute left-5 bottom-5">
         <Image className="" src="/gifs/cartoon-1.gif" alt="moving cartoon" width="200" height="400"/>
        </div> */}
        <h3 className="text-3xl font-bold mt-10">About Us</h3>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3 max-w-3xl mx-auto">
          Crafting Cinematic Stories That Move Audiences
        </h1>

        <p className="text-stone-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Nextom Studio is a creative powerhouse delivering high-impact ads, music videos,
          digital shorts, and long-form storytelling with bold visuals and unforgettable pacing.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="#cta"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold 
            hover:bg-gray-200 hover:shadow transition"
          >
            Start a Project
          </Link>

          <Link
            href="#cta"
            className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold 
            hover:bg-white/5 transition"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* ============================== */}
      {/* OUR APPROACH SECTION */}
      {/* ============================== */}
      <section className="mt-10">
        <div className='max-w-4xl mx-auto'>
          <h4 className="text-center font-bold text-3xl">Our Approach</h4>
          <p className="text-center mt-4 text-lg">We believe storytelling is the core of every great video. Our team combines film-level color, crisp audio engineering, and seamless post-production techniques to create content that captures attention from the first frame to the last.</p>
        </div>
      </section>

      {/* ============================== */}
      {/* SERVICES SECTION */}
      {/* ============================== */}
      <section className='mt-16 px-6 md:px-20 py-12'>
        <h4 className="text-center text-3xl font-bold">What We Do - Services</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          <ServiceCard
            title="Editing"
            items={[
              "Story-driven editing",
              "Speed ramping & rhythm control",
              "Transitions & montage cuts",
              "Multi-platform formatting (9:16 • 1:1 • 16:9)"
            ]}
            icon={<FaFilm className="text-xl text-primary-aqua" />}
          />
          <ServiceCard
            title="Color & Sound"
            items={[
              "Film-emulation look building",
              "Skin-tone correction & grading",
              "Dialogue cleanup & noise reduction",
              "SFX layers & dynamic audio mixes"
            ]}
            icon={<FaPalette className="text-xl text-primary-aqua" />}
          />
          <ServiceCard
            title="Motion Graphics & VFX"
            items={[
              "Animated titles & lower thirds",
              "Product callouts & UI elements",
              "Tracking, masking, and rotoscope work",
              "Clean, polished visual enhancements"
            ]}
            icon={<FaVideo className="text-xl text-primary-aqua" />}
          />
        </div>
      </section>

      <section className="bg-black/50 py-20 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h4 className="text-3xl font-bold">What Our Clients Say</h4>
          <div className="mt-8 space-y-8">
            <blockquote className="text-lg italic">
              “Nextom Studio completely transformed our brand video. The pacing, color, and storytelling were next level.”
              <br />
              <span className="font-semibold mt-2 block">— Abhishek, Marketing Head, RedChief</span>
            </blockquote>
            <blockquote className="text-lg italic">
              “Fast delivery, premium quality. They just get it.”
              <br />
              <span className="font-semibold mt-2 block"> — Shraddha, CEO,  Aarti Tech Pvt Ltd</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white/10 backdrop-blur-4xl border border-white/20 rounded-2xl py-12 text-center max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold text-white">Ready to Create Something Exceptional?</h4>
        <p className="text-base text-white/80 mt-4">Let’s bring your vision to life with cinematic precision and creative energy.</p>
        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="mailto:contact@nextomstudio.com"
            className="px-6 py-3 border border-white/20 rounded-md bg-white text-black font-semibold 
            hover:bg-gray-300 transition"
          >
            Connect with Us
          </Link>

          <Link
            href="https://www.instagram.com/nextomstudio"
            className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold 
            hover:bg-white/5 transition"
          >
            Follow Us on Instagram
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
