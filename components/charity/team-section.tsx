import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const team = [
  {
    name: "David Walker",
    role: "CEO & Founder",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Program Director",
    image: "/images/team-2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Operations Manager",
    image: "/images/team-3.jpg",
  },
  {
    name: "James Wilson",
    role: "Community Lead",
    image: "/images/team-4.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {"Let's Meet With Our Ordinary Soldiers"}
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-xl bg-card text-center shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with social icons */}
                <div className="absolute inset-0 flex items-end justify-center bg-teal/0 pb-4 transition-all duration-300 group-hover:bg-teal/40">
                  <div className="flex gap-2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal transition-colors hover:bg-orange hover:text-white" aria-label={`${member.name}'s Facebook`}>
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal transition-colors hover:bg-orange hover:text-white" aria-label={`${member.name}'s Twitter`}>
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal transition-colors hover:bg-orange hover:text-white" aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
