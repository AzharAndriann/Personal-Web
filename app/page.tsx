import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import  Header  from "@/components/header"
import { Hero } from "@/components/hero"
import { Project } from "@/components/project"
import ScrollToTop from "@/components/ScrollToTOp"
import { Skills } from "@/components/skills"

export default function HomePage ()
{
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}
