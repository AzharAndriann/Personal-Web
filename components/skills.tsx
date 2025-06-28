import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 75 },
  ]

  const tools = [
    "Visual Studio Code",
    "Figma",
    "Adobe Creative Suite",
    "Git & GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Postman",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keahlian & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang berkualitas tinggi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors">
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
