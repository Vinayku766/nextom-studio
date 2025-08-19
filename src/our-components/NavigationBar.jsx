"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaPaypal } from "react-icons/fa";

export default function CustomNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkUnderlineClasses = `
  relative inline-block
  after:content-['']
  after:absolute
  after:left-0
  after:bottom-[-5px]
  after:h-[4px]
  after:w-0
  after:bg-gradient-to-r
  after:from-pink-500
  after:to-purple-500
  after:transition-all
  after:duration-300
  hover:after:w-full
`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05080c] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link className="flex items-center gap-3" href={"/"}>
          <Image src="/logo/logo.png" alt="Nextom Studio" width={40} height={40} />
          <span className="text-white font-semibold text-lg">Nextom Studio</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 text-white" aria-label="Primary">
        <Link href="#features" className={linkUnderlineClasses}>Features</Link>
      <Link href="#about" className={linkUnderlineClasses}>About</Link>
      <Link href="#showcase" className={linkUnderlineClasses}>Showcase</Link>
      <Link href="#pricing" className={linkUnderlineClasses}>Pricing</Link>
      <Link href="#faq" className={linkUnderlineClasses}>FAQ</Link>
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://www.paypal.com/paypalme/ghost123fortnite" className="btn bg-white font-extrabold text-blue-800 ghost flex justify-center items-center border hover:scale-95 italic border-white/30 hover:border-white/50 transition px-4 py-2 rounded-md">
            <FaPaypal className="size-4 text-blue-800"/>&nbsp;Pay<span className="text-blue-500">pal</span>
          </Link>
          <Link href="#cta" className="btn primary hover:scale-95 text-gray-100 border border-gray-100 hover:border-gray-300 transition px-4 py-2 rounded-md font-semibold">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#05080c]/90 backdrop-blur-lg border-t border-white/10 px-4 py-4 text-white space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Menu">
            <Link href="#features" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="#about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="#showcase" onClick={() => setMobileOpen(false)}>Showcase</Link>
            <Link href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="#faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
          </nav>
          <div className="flex flex-col gap-2 mt-3">
            <Link href="#cta" onClick={() => setMobileOpen(false)} className="btn ghost border border-white/30 px-4 py-2 rounded-md text-white text-center">
              Contact
            </Link>
            <Link href="#cta" onClick={() => setMobileOpen(false)} className="btn primary bg-white text-black px-4 py-2 rounded-md text-center font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
