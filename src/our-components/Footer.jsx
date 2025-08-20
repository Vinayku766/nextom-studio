'use client'
import Image from 'next/image';
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black backdrop-blur-md text-white py-3 border-t border-white/10">
      <div className="mx-auto px-6 text-center space-y-5 flex justify-between items-center flex-col sm:flex-row max-w-7xl">
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

        {/* Copyright */}
        <small className="block text-white text-sm xl:text-md mb-5 md:mb-0">
          © 2025 Nextom Studio. All rights reserved.
        </small>

        {/* Contact Info */}
        <div className="flex justify-between items-center gap-3 text-white/70 text-sm md:mb-0">
          {' '}
          <Link
            href="mailto:nextomstudio@gmail.com"
            className="hover:text-pink-500 duration-300 ease-in-out hover:scale-110 underline transition text-sm xl:text-md"
          >
           <IoMailOpenOutline className='inline-block size-5'/>
          </Link>{' '}
          <Link
            href="tel:+919315084010"
            className="hover:text-pink-500 duration-300 ease-in-out hover:scale-110 underline transition text-sm xl:text-md"
          >
           <FiPhone className='inline-block size-5'/> 
          </Link>
          {' '}
             <Link
            href="https://www.instagram.com/nextomstudio/"
            className="hover:text-pink-500 duration-300 ease-in-out hover:scale-110 underline transition text-sm xl:text-md"
          >
           <FaInstagram className='inline-block size-5'/>
          </Link>
          {' '}
          <Link 
          href='https://www.youtube.com/@nextomstudio8727'
          className='hover:text-pink-500 duration-300 ease-in-out hover:scale-110 underline transition text-sm xl:text-md'
          >
          <FiYoutube className='inline-block size-5'/>
          </Link>
          {' '}
        </div>
      </div>
    </footer>
  )
}

export default Footer
