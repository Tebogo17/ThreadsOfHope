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
              {'"'}Threads of Hope is more than just an organization; it is a movement powered by people who care. Through the dedication of our team, volunteers, and supporters, we continue to create meaningful impact and bring hope where it is needed most.I invite you to join us in this mission. Together, we can take steps that lead to brighter futures and stronger communities.{'"'}
              <br></br>
              <br></br>
              Thank you for being part of the journey.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
                S
              </div>
              <div>
                <p className="font-bold text-foreground">Sarletta Mokhine</p>
                <p className="text-sm text-muted-foreground">Deputy Chairperson / PR & Media Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
