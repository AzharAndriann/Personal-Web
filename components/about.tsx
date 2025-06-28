import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"

export function About() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Membangun aplikasi web modern dengan teknologi terkini",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Mengembangkan aplikasi mobile yang responsif dan user-friendly",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Merancang interface yang menarik dan pengalaman pengguna yang optimal",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Solutions",
      description: "Memberikan solusi digital komprehensif untuk bisnis Anda",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saya adalah seorang developer dengan pengalaman 5+ tahun dalam industri teknologi. Passionate dalam
            menciptakan solusi digital yang inovatif dan berdampak positif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Perjalanan Karir</h3>
            <p className="text-muted-foreground">
              Dimulai dari ketertarikan pada teknologi sejak kecil, saya mengembangkan passion dalam programming dan
              design. Dengan dedikasi tinggi, saya terus belajar dan mengasah kemampuan untuk memberikan hasil terbaik.
            </p>
            <p className="text-muted-foreground">
              Saya percaya bahwa teknologi dapat mengubah dunia menjadi lebih baik, dan saya berkomitmen untuk menjadi
              bagian dari perubahan positif tersebut melalui karya-karya digital yang saya ciptakan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="text-primary mx-auto w-fit">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
