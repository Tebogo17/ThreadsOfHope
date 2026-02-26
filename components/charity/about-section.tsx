import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Overlapping Images */}
          <div className="relative w-full max-w-md flex-shrink-0 lg:w-1/2">
            <div className="relative h-80 w-64 overflow-hidden rounded-lg shadow-lg md:h-96 md:w-72">
              <Image
                src="/images/about-1.jpg"
                alt="Donation boxes being packed by volunteers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-32 h-64 w-52 overflow-hidden rounded-lg border-4 border-background shadow-xl md:left-40 md:h-72 md:w-56">
              <Image
                src="/images/about-2.jpg"
                alt="Volunteer holding a help sign"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="mt-12 w-full lg:mt-0 lg:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange">About Us</span>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
              We Help People In Need Around The World
            </h2>

            {/* Quote Box */}
            <div className="mt-6 border-l-4 border-orange pl-5">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet.
              </p>
              <p className="mt-3 font-semibold text-orange">Jhon Doe, Founder</p>
            </div>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#causes"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
              >
                Learn More
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange px-6 py-3 text-sm font-semibold text-orange transition-colors hover:bg-orange hover:text-white"
              >
                Contact Us
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange/20">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
