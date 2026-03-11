import { Footprints, HeartHandshake, Users } from "lucide-react"

const services = [
  {
    icon: Footprints,
    title: "Children's Donation",
    description: "Providing clothes and shoes to children so they can walk safely to school and participate in daily activities with confidence",
  },
  {
    icon: HeartHandshake,
    title: "Community Donation",
    description: "Organizing donation drives and community programs that provide essential support to underserved families.",
  },
  {
    icon: Users,
    title: "Old Age Home",
    description: "Delivering comfort and care to senior citizens through footwear donations and community support initiatives.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Learn More What We Do And Get Involved
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-orange hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
