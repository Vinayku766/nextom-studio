'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaCheck, FaCrown, FaStar } from 'react-icons/fa'
import Div from '../common/DIv'

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const pricing = {
    starter: isYearly ? 299 * 12 * 0.85 : 299,
    pro: isYearly ? 799 * 12 * 0.85 : 799,
    studio: isYearly ? 1499 * 12 * 0.85 : 1499,
  }

  const formatPrice = (price) =>
    isYearly ? `$${price.toFixed(0)} /yr` : `$${price}/mo`

  return (
    <section id="pricing" className="bg-theme-dark text-theme-light py-16">
      <Div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transparent Pricing
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Flexible plans for creators, startups, and teams. Switch between monthly and yearly anytime.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className="text-gray-300">Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            role="switch"
            aria-checked={isYearly}
            className={`relative w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-300 ${
              isYearly ? 'bg-secondary-blue' : 'bg-gray-700'
            }`}
          >
            <span
              className={`w-5 h-5 bg-theme-light rounded-full shadow-md transform transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : ''
              }`}
            ></span>
          </button>
          <span className="text-gray-300 flex items-center gap-1">
            Yearly <span className="bg-secondary-blue text-theme-light text-xs px-2 py-0.5 rounded-full">save 15%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white/5 group hover:scale-105 hover:bg-gradient-to-b hover:from-primary-aqua hover:to-theme-dark duration-500 ease-in-out backdrop-blur-md rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-white mb-2">
              {formatPrice(pricing.starter)}
            </div>
            <ul className="text-sm text-gray-300 space-y-2 mt-4">
              <li className="flex items-center gap-2"><FaCheck /> 4 short videos / mo</li>
              <li className="flex items-center gap-2"><FaCheck /> 1 long‑form edit</li>
              <li className="flex items-center gap-2"><FaCheck /> Stock music & assets</li>
            </ul>
            <Link href="#cta" className="mt-6 inline-block bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-theme-light px-4 py-2 rounded font-semibold group-hover:outline group-hover:bg-transparent transition">
              Choose Starter
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-white/5 group hover:scale-105 hover:bg-gradient-to-b hover:from-primary-aqua hover:to-theme-dark duration-500 ease-in-out backdrop-blur-md rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Pro <FaStar className="text-yellow-300" />
            </h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-white mb-2">
              {formatPrice(pricing.pro)}
            </div>
            <ul className="text-sm space-y-2 mt-4">
              <li className="flex items-center gap-2"><FaCheck /> 12 shorts + 2 long‑form</li>
              <li className="flex items-center gap-2"><FaCheck /> Motion graphics pack</li>
              <li className="flex items-center gap-2"><FaCheck /> Priority turnaround</li>
            </ul>
            <Link
              href="#cta"
              className="mt-6 inline-block bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-theme-light px-4 py-2 rounded font-semibold group-hover:outline group-hover:bg-transparent transition"
            >
              Choose Pro
            </Link>
          </div>

          {/* Studio */}
          <div className="bg-white/5 group hover:scale-105 hover:bg-gradient-to-b hover:from-primary-aqua hover:to-theme-dark duration-500 ease-in-out backdrop-blur-md rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Studio <FaCrown className="text-yellow-400" />
            </h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-white mb-2">
              {formatPrice(pricing.studio)}
            </div>
            <ul className="text-sm text-gray-300 space-y-2 mt-4">
              <li className="flex items-center gap-2"><FaCheck /> Unlimited requests*</li>
              <li className="flex items-center gap-2"><FaCheck /> Dedicated editor</li>
              <li className="flex items-center gap-2"><FaCheck /> Weekly strategy call</li>
            </ul>
            <Link href="#cta" className="mt-6 inline-block bg-gradient-to-r from-primary-aqua to-secondary-blue bg-clip-text text-transparent group-hover:text-theme-light px-4 py-2 rounded font-semibold group-hover:outline group-hover:bg-transparent transition">
              Talk to Sales
            </Link>
          </div>
        </div>
      </Div>
    </section>
  )
}
