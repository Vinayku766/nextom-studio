"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePopup } from "@/utils/PopupProviderHook";

export default function CustomNavbar() {
  const videoRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
 const { openPopup } = usePopup(); 
  const handleMouseEnter = () => {
    const video = videoRef.current
    if (!video) return

    video.play()
  }

  const handleMouseLeave = () => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0
  }

  const linkUnderlineClasses = `
  relative inline-block
  after:content-['']
  after:absolute
  after:left-0
  after:bottom-[-5px]
  after:h-[4px]
  after:w-0
  after:bg-gradient-to-r
  after:from-primary-aqua
  after:to-secondary-blue
  after:transition-all
  after:duration-300
  hover:after:w-full
  font-semibold
`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-theme-dark/75 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link className="flex items-center gap-3" href={"/"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <video className="w-12 h-12 rounded-full" ref={videoRef}  src="./logo/roataion-logo.mp4" playsInline loop muted/>
          {/* <Image src="/logo/fixed-logo-real.png" alt="Nextom Studio" width={42} height={42} /> */}
          <span className="text-theme-light font-semibold text-lg">Nextom Studio</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 text-theme-light" aria-label="Primary">
        <Link href="/#features" className={linkUnderlineClasses}>Features</Link>
      {/* <Link href="#showcase" className={linkUnderlineClasses}>Showcase</Link> */}
      <Link href="/#pricing" className={linkUnderlineClasses}>Pricing</Link>
      <Link href="/#faq" className={linkUnderlineClasses}>FAQ</Link>
      <Link href="/#about" className={linkUnderlineClasses}>About</Link>
      <Link href="/contact" className={linkUnderlineClasses}>Contact</Link>
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button   onClick={() => {
    setMobileOpen(false);
    openPopup();
  }} className="btn bg-theme-light cursor-pointer font-bold text-theme-dark ghost flex justify-center items-center border hover:scale-95 border-white/30 hover:border-white/50 transition px-3 py-1 rounded-md">
            Pay Online
          </button>
          <Link href="#cta" className="btn primary hover:scale-95 text-gray-100 border border-gray-100 hover:border-gray-300 transition px-3 py-1 rounded-md font-semibold">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-theme-light text-2xl"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#05080c]/90 backdrop-blur-lg border-t border-white/10 px-4 py-4 text-theme-light space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Menu">
            <Link href="/#features" onClick={() => setMobileOpen(false)}>Features</Link>
            {/* <Link href="#showcase" onClick={() => setMobileOpen(false)}>Showcase</Link> */}
            <Link href="/#pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/#faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>
          <div className="flex flex-col gap-2 mt-3">
            <button  onClick={() => {
    setMobileOpen(false);
    openPopup();
  }} className="btn bg-theme-light cursor-pointer font-bold text-theme-dark ghost flex justify-center items-center border hover:scale-95 border-white/30 hover:border-white/50 transition px-3 py-1 rounded-md">
            Pay Online
          </button>
            <Link href="#cta" onClick={() => setMobileOpen(false)} className="btn primary bg-theme-light text-black px-4 py-2 rounded-md text-center font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
