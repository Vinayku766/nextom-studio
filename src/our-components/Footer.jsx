'use client'
import Image from 'next/image';
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiPhone, FiYoutube } from "react-icons/fi";
import { useState } from "react";

const sections = [
  {
    title: "Home",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Video Editing", href: "/services/video-editing" },
      { label: "Motion Graphics", href: "/services/motion-graphics" },
      { label: "Short-form Content", href: "/services/short-form" },
      { label: "Corporate & Ads", href: "/services/corporate" },
      { label: "YouTube & Creator Edits", href: "/services/youtube" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Tutorials", href: "/tutorials" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden px-5 py-5">
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 flex justify-between px-10">

    <div className="w-52 h-[500px] bg-gradient-to-t from-blue-800/90 via-cyan-700/80 to-transparent blur-[100px] animate-aurora-vertical"></div>
    <div className="w-40 h-[450px] bg-gradient-to-t from-indigo-700/90 via-purple-600/80 to-transparent blur-[90px] animate-aurora-fade [animation-delay:1s]"></div>

    <div className="w-56 h-[550px] bg-gradient-to-t from-cyan-600/90 via-blue-700/80 to-transparent blur-[120px] animate-aurora-wobble [animation-delay:2s]"></div>
    <div className="w-44 h-[400px] bg-gradient-to-t from-green-600/90 via-teal-500/80 to-transparent blur-[100px] animate-aurora-fade [animation-delay:3s]"></div>

    <div className="w-52 h-[480px] bg-gradient-to-t from-indigo-800/90 via-cyan-700/80 to-transparent blur-[110px] animate-aurora-vertical [animation-delay:4s]"></div>
    <div className="w-40 h-[420px] bg-gradient-to-t from-purple-700/90 via-blue-600/80 to-transparent blur-[100px] animate-aurora-wobble [animation-delay:5s]"></div>
  </div>
</div>

      {/* Footer Content */}
      <div className="mx-auto px-6 max-w-7xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg py-4 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8 py-3">
        
          <div className="w-full sm:w-1/3 text-center sm:text-left space-y-4">
            <div className="flex justify-center sm:justify-start items-center gap-3 font-semibold">
              <Image
                src="/logo/logo.png"
                alt="Nextom logo"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className='text-lg'>Nextom Studio</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Nextom Studio is a creative video editing agency helping brands, creators, and businesses bring their stories to life. From cinematic edits to social media content, we deliver premium-quality videos with fast turnaround times and a collaborative approach.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 text-white/70 text-lg">
              <Link href="mailto:nextomstudio@gmail.com" className="hover:text-blue-800 hover:scale-120 duration-300 transition">
                <IoMailOpenOutline />
              </Link>
              <Link href="tel:+919315084010" className="hover:text-blue-800 hover:scale-120 duration-300 transition">
                <FiPhone />
              </Link>
              <Link href="https://www.instagram.com/nextomstudio/" className="hover:text-blue-800 hover:scale-120 duration-300 transition">
                <FaInstagram />
              </Link>
              <Link href="https://www.youtube.com/@nextomstudio8727" className="hover:text-blue-800 hover:scale-120 duration-300 transition">
                <FiYoutube />
              </Link>
            </div>

            {/* Copyright */}
          
          </div>


          {/* Left: Links Section */}
          <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="text-left">
                {/* Desktop View */}
                <h4 className="hidden sm:block text-lg font-semibold mb-3">{section.title}</h4>
                <ul className="hidden sm:flex flex-col space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-sm text-white/70 hover:text-white transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Accordion */}
                <div className="sm:hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-2 border-b border-white/20 text-left"
                  >
                    <span className="font-medium">{section.title}</span>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <ul className="flex flex-col mt-2 space-y-2 pl-2">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} className="text-sm text-white/70 hover:text-white transition">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        
        </div>
        <div className='text-center border-t border-white/10 pt-4'>
             <small className="block text-white/60 text-xs">
              © 2025 Nextom Studio. All rights reserved.
            </small>
            </div>
      </div>
    
    </footer>
  );
};

export default Footer;
