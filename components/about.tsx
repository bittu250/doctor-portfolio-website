import { Stethoscope, Database, Brain, Globe } from "lucide-react"

const highlights = [
  {
    icon: Stethoscope,
    title: "Clinical Foundation",
    description: "MBBS background providing deep understanding of clinical workflows and healthcare delivery challenges."
  },
  {
    icon: Database,
    title: "Health Informatics",
    description: "MSc in Health Informatics with focus on EMR/EHR systems and healthcare data management."
  },
  {
    icon: Brain,
    title: "AI in Healthcare",
    description: "Exploring applications of artificial intelligence for mental health support and clinical decision-making."
  },
  {
    icon: Globe,
    title: "Digital Health Innovation",
    description: "Driving digital health transformation in Nepal through practical, context-aware solutions."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a medical doctor with a deep passion for healthcare technology. My journey began in 
              clinical medicine, where I witnessed firsthand the gaps between healthcare delivery and 
              technology adoption.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my MSc in Health Informatics, I&apos;m focused on building solutions that 
              bridge this gap. My work centers on designing EMR/EHR systems that actually fit clinical 
              workflows, implementing HL7 FHIR interoperability standards, and exploring how AI can 
              enhance healthcare delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that meaningful healthcare technology must be built with a deep understanding 
              of clinical realities. My unique position as both a clinician and health informaticist 
              allows me to create solutions that are not just technically sound but also practically 
              implementable in real healthcare settings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Nepal, I&apos;m passionate about driving digital health innovation in resource-constrained 
              settings, ensuring that the benefits of healthcare technology reach those who need it most.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
