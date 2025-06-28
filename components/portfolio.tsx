import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur real-time collaboration, drag & drop interface, dan notifikasi push.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Python", "Django", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Booking System",
      description: "Sistem reservasi restoran dengan fitur booking online, menu digital, dan manajemen meja real-time.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Express.js", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard analytics untuk media sosial dengan visualisasi data yang interaktif dan reporting otomatis.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi yang aman dan user-friendly.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek mencerminkan dedikasi saya dalam
            menciptakan solusi digital yang berkualitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
