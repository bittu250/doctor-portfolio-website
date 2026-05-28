import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              Dr. Binaya Paudel
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Healthcare Technology & Health Informatics
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Built with <Heart className="h-4 w-4 text-primary fill-primary" /> by Dr. Binaya Paudel
          </p>
        </div>
      </div>
    </footer>
  )
}
