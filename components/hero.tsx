import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for collaborations</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Building Healthcare Technology That Fits{" "}
              <span className="text-primary text-glow">Real Clinical Workflow</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              MBBS Doctor · Health Informatics Researcher · Healthcare AI Builder
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Bridging the gap between clinical medicine and technology. Focused on building EMR systems, 
              implementing HL7 FHIR interoperability standards, and leveraging AI to transform healthcare 
              delivery in Nepal and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact" 
                className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="#contact" 
                className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="#contact" 
                className="p-2 rounded-lg glass-card hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-1 glow-primary animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                  <Image
                    src="/binaya.png"
                    alt="Dr. Binaya Paudel"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1 rounded-full glass-card text-xs font-medium text-primary animate-float" style={{ animationDelay: '0.5s' }}>
                MBBS
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full glass-card text-xs font-medium text-primary animate-float" style={{ animationDelay: '1s' }}>
                MSc Health Informatics
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
