import { Briefcase, GraduationCap, Stethoscope, Code } from "lucide-react"

const experiences = [
  {
    icon: Stethoscope,
    title: "Clinical Medicine Experience",
    organization: "Healthcare Institutions",
    period: "Ongoing",
    description: "Hands-on clinical experience in patient care, understanding healthcare delivery challenges, and identifying opportunities for technology-driven improvements.",
    tags: ["Patient Care", "Clinical Workflows", "Healthcare Systems"]
  },
  {
    icon: GraduationCap,
    title: "MSc Health Informatics",
    organization: "Academic Institution",
    period: "Current",
    description: "Advanced study in health informatics covering EMR/EHR systems, healthcare data management, interoperability standards, and clinical decision support systems.",
    tags: ["Health Informatics", "Research", "Healthcare IT"]
  },
  {
    icon: Code,
    title: "EMR Development",
    organization: "Healthcare Technology Projects",
    period: "Ongoing",
    description: "Designing and developing Electronic Medical Records systems with focus on HL7 FHIR interoperability, user-centered design, and clinical workflow integration.",
    tags: ["HL7 FHIR", "EMR Design", "Full Stack Development"]
  },
  {
    icon: Briefcase,
    title: "Healthcare AI Concepts",
    organization: "Research & Development",
    period: "Ongoing",
    description: "Exploring applications of artificial intelligence in healthcare, including mental health support tools, clinical decision support, and diagnostic assistance.",
    tags: ["AI/ML", "Mental Health Tech", "Innovation"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Research</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground">
            My journey at the intersection of medicine and technology
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className={`flex gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <span className="text-xs text-primary font-medium">{exp.period}</span>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      </div>
                    </div>
                    <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
