import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Causes", href: "#causes" },
  { label: "Our Services", href: "#services" },
  { label: "Meet The Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-teal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Charity</span>
              <span className="text-orange">Help</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-orange hover:text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-orange hover:text-white" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-orange hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-orange hover:text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Address</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                <span className="text-sm text-white/70">123 Street, New York, USA</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                <span className="text-sm text-white/70">+012 345 67890</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                <span className="text-sm text-white/70">info@example.com</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-orange"
                >
                  <ArrowRight className="h-3 w-3" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Newsletter</h3>
            <p className="text-sm text-white/60">
              Subscribe to our newsletter for the latest updates on our causes and events.
            </p>
            <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-orange focus:outline-none"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; 2026 CharityHelp. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-sm text-white/50 transition-colors hover:text-orange">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 transition-colors hover:text-orange">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
