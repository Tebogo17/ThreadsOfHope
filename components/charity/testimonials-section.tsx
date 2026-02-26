"use client"

import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Trusted By Thousands Of People And Nonprofits
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-orange/20 bg-card p-8 shadow-md md:p-10">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-orange text-orange" />
              ))}
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {'"'}Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. This organization changed our community for the better and we are incredibly grateful for their work.{'"'}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
                M
              </div>
              <div>
                <p className="font-bold text-foreground">Maria Thompson</p>
                <p className="text-sm text-muted-foreground">Community Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
