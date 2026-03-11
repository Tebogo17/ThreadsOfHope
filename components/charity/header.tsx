"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-teal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-1 text-white/80">
              <MapPin className="h-3.5 w-3.5" />
              87 Hawk Cresc, Johannesburg, SA
            </span>
            <span className="flex items-center gap-1 text-white/80">
              <Mail className="h-3.5 w-3.5" />
              threadsofhope.donations@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="mr-2 hidden text-white/80 sm:inline">Follow Us:</span>
            <Link href="#" className="rounded-full p-1.5 text-white/70 transition-colors hover:text-white" aria-label="Facebook">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="rounded-full p-1.5 text-white/70 transition-colors hover:text-white" aria-label="Twitter">
              <Twitter className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="rounded-full p-1.5 text-white/70 transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="rounded-full p-1.5 text-white/70 transition-colors hover:text-white" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-teal shadow-lg"
            : "bg-teal"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold">
            <span className="text-orange">Threads </span>
            <span className="text-white"> OF </span>
            <span className="text-orange">Hope</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#home" className="text-orange font-semibold transition-colors hover:text-orange">
              Home
            </Link>
            <Link href="#about" className="text-white/90 font-medium transition-colors hover:text-orange">
              About
            </Link>
            <Link href="#causes" className="text-white/90 font-medium transition-colors hover:text-orange">
              Causes
            </Link>
            <button className="flex items-center gap-1 text-white/90 font-medium transition-colors hover:text-orange">
              Pages <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="#contact" className="text-white/90 font-medium transition-colors hover:text-orange">
              Contact
            </Link>
            <Link
              href="#donate"
              className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
            >
              Donate Now
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-teal md:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              <Link href="#home" className="rounded-lg px-3 py-2 text-orange font-semibold" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="rounded-lg px-3 py-2 text-white/90 hover:text-orange" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#causes" className="rounded-lg px-3 py-2 text-white/90 hover:text-orange" onClick={() => setMobileMenuOpen(false)}>
                Causes
              </Link>
              <Link href="#services" className="rounded-lg px-3 py-2 text-white/90 hover:text-orange" onClick={() => setMobileMenuOpen(false)}>
                Pages
              </Link>
              <Link href="#contact" className="rounded-lg px-3 py-2 text-white/90 hover:text-orange" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="#donate"
                className="mt-2 rounded-full bg-orange px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
