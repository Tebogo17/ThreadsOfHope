"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const stats = [
  { label: "Total Donors", value: 1250 },
  { label: "Fund Raised", value: 415 },
  { label: "Happy Volunteers", value: 980 },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-3xl font-bold text-white md:text-4xl">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function DonationCTASection() {
  return (
    <section id="donate" className="relative overflow-hidden bg-teal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange">Donate Now</span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
              Thanks For The Results Achieved With You
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-white/70">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter target={stat.value} suffix="+" />
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with CTA */}
          <div className="relative w-full lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/donation-cta.jpg"
                alt="Volunteers helping at a charity event"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <a
              href="#contact"
              className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-hover"
            >
              Donate Now
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
