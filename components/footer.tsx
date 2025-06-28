import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-muted-foreground">
              Full Stack Developer yang passionate dalam menciptakan solusi digital inovatif dan berdampak positif.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </a>
              </div>
              <div>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang
                </a>
              </div>
              <div>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Keahlian
                </a>
              </div>
              <div>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </div>
              <div>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">Web Development</div>
              <div className="text-muted-foreground">Mobile Development</div>
              <div className="text-muted-foreground">UI/UX Design</div>
              <div className="text-muted-foreground">Consulting</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart className="h-4 w-4 text-red-500" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  )
}
