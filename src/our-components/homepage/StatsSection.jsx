'use client'

import { useEffect } from 'react'

const stats = [
  { label: 'Projects Delivered', count: 1200 },
  { label: 'Avg Turnaround (hrs)', count: 72 },
  { label: 'Client Satisfaction (%)', count: 98 },
  { label: 'Industries Served', count: 15 },
]

export default function StatsSection() {
  useEffect(() => {
    const animateCount = (el, target) => {
      let start = 0
      const duration = 1500
      const stepTime = Math.max(Math.floor(duration / target), 10)
      const counter = setInterval(() => {
        start += 1
        el.textContent = start
        if (start >= target) {
          el.textContent = target
          clearInterval(counter)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const num = entry.target
            const target = +num.dataset.count
            animateCount(num, target)
            num.classList.add('counted')
          }
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll('.num').forEach(el => observer.observe(el))
  }, [])

  return (
    <section className="pb-12 bg-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {stats.map(({ label, count }) => (
          <div
            key={label}
            className="relative text-center p-5 rounded-2xl border border-white bg-transparent backdrop-blur-sm before:content-[''] before:absolute before:inset-[-1px] before:rounded-2xl before:bg-[conic-gradient(from_0deg,rgba(66,246,181,0.18),rgba(111,225,255,0.18),rgba(176,108,255,0.18),rgba(66,246,181,0.18))] before:blur-lg before:opacity-25 before:-z-10"
          >
            <div
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-black num text-pink-500"
              data-count={count}
            >
              0
            </div>
            <div className="opacity-80 text-white">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
