import Image from "next/image"
import { ArrowRight } from "lucide-react"

const causes = [
  {
    tag: "Education",
    title: "Education For African Children",
    description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit duo justo magna.",
    image: "/images/cause-education.jpg",
    raised: "$1,240.00",
    goal: "$2,500.00",
    progress: 50,
  },
  {
    tag: "Drinking Water",
    title: "Donate For A Drinking Water",
    description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit duo justo magna.",
    image: "/images/cause-water.jpg",
    raised: "$1,860.00",
    goal: "$3,000.00",
    progress: 62,
  },
  {
    tag: "Medical",
    title: "Ensure Medical Treatment",
    description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit duo justo magna.",
    image: "/images/cause-medical.jpg",
    raised: "$940.00",
    goal: "$2,000.00",
    progress: 47,
  },
]

export function CausesSection() {
  return (
    <section id="causes" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">Feature Causes</span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Every Child Deserves The Opportunity To Learn
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="group overflow-hidden rounded-xl bg-card shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                  {cause.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{cause.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cause.description}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-foreground">Raised: {cause.raised}</span>
                    <span className="text-foreground">Goal: {cause.goal}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-orange transition-all duration-500"
                      style={{ width: `${cause.progress}%` }}
                    />
                  </div>
                </div>

                {/* Button */}
                <a
                  href="#donate"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange-hover"
                >
                  Donate Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
