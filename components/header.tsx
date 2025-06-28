"use client"

import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(["home", "about", "skills", "portfolio", "contact"], 100)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    // Smooth scroll dengan JavaScript
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer">
            Azhar Andrian
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative group ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-all duration-200 hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0 mt-0 pb-0"
          }`}
        >
          <nav className="space-y-4 border-t border-border pt-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:scale-105 py-2 px-4 rounded-lg hover:bg-primary/5 transform ${
                    isMenuOpen ? `translate-y-0 opacity-100 delay-${index * 100}` : "translate-y-4 opacity-0"
                  } ${isActive ? "text-primary bg-primary/5" : ""}`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
