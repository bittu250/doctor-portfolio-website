import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Structured EMR with HL7 FHIR Integration",
    description: "A comprehensive Electronic Medical Records system designed for Nepal's healthcare context, featuring HL7 FHIR interoperability for seamless data exchange between healthcare facilities.",
    tags: ["React.js", "Node.js", "HL7 FHIR", "MySQL", "REST API"],
    githubUrl: "#",
    demoUrl: "#",
    featured: true
  },
  {
    title: "Mental Health AI App",
    description: "An AI-powered mental health support application providing accessible mental health resources and screening tools, designed with cultural sensitivity for South Asian users.",
    tags: ["React Native", "AI/ML", "Python", "TensorFlow", "Mental Health"],
    githubUrl: "#",
    demoUrl: "#",
    featured: true
  },
  {
    title: "Healthcare Informatics Research",
    description: "Academic research focusing on healthcare data interoperability, clinical decision support systems, and the adoption of digital health solutions in low-resource settings.",
    tags: ["Research", "Health Informatics", "Data Analysis", "CDSS"],
    githubUrl: "#",
    demoUrl: "#",
    featured: false
  },
  {
    title: "Medical Articles & Digital Health Writing",
    description: "Collection of medical writing and articles on digital health innovation, healthcare AI ethics, and the future of medicine in developing nations.",
    tags: ["Medical Writing", "Digital Health", "Healthcare AI", "Ethics"],
    githubUrl: "#",
    demoUrl: "#",
    featured: false
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground">
            Building practical solutions at the intersection of medicine and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 group ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {project.featured && (
                    <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                      Featured
                    </Badge>
                  )}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm" className="group/btn">
                  <Link href={project.githubUrl}>
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="group/btn">
                  <Link href={project.demoUrl}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
