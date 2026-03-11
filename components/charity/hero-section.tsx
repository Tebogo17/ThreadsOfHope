"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Volunteers helping in the community"
        fill
        className="object-cover"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-teal/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {"Let's Change The Lives Together"}
          <br />
          With Humanity
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
          The initiatives focuses particularly on supporting children in care facilities and individuals experiencing homelessness by providing essential items and practical support.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
        >
          Learn More
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      {/* Carousel Arrows (decorative) */}
      <button className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8" aria-label="Previous slide">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8" aria-label="Next slide">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
