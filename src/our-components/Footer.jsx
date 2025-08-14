'use client'
import Image from 'next/image';
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black backdrop-blur-md text-white py-3 border-t border-white/10">
      <div className="mx-auto px-6 text-center space-y-5 flex justify-between items-center flex-col sm:flex-row">
        {/* Brand */}
        <div className="flex justify-center items-center gap-3 text-sm xl:text-md font-semibold md:mb-0">
          <Image
            src="/logo/logo.png"
            alt="Nextom logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span>Nextom Studio</span>
        </div>

        {/* Contact Info */}
        <div className="block text-white/70 text-sm md:mb-0">
          <IoMailOpenOutline className='inline-block size-5'/>{' '}
          <Link
            href="mailto:nextomstudio@gmail.com"
            className="hover:text-white underline transition text-sm xl:text-md"
          >
            nextomstudio@gmail.com
          </Link>{' '}&nbsp;&nbsp;
          <FaPhone className='inline-block size-4'/> {' '}
          <Link
            href="tel:+919315084010"
            className="hover:text-white underline transition text-sm xl:text-md"
          >
            +91‑93150‑84010
          </Link>
        </div>

        {/* Copyright */}
        <small className="block text-white text-sm xl:text-md">
          © 2025 Nextom Studio. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
