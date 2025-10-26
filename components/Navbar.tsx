'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Navbar - Horizontal en haut */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold"
          >
            CM<span className="text-accent">.</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-accent text-background font-bold'
                      : 'text-gray-light hover:bg-surface hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navbar - Vertical à droite */}
      <nav className="hidden lg:block fixed right-0 top-0 h-screen z-50">
        <div className="h-full flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm border-l border-border px-6 py-8">
          {/* Navigation verticale */}
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative"
              >
                {/* Indicateur actif */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-6 h-0.5 transition-all ${
                    activeSection === item.id
                      ? 'bg-accent w-8'
                      : 'bg-gray-light w-4 opacity-0 group-hover:opacity-100'
                  }`}
                />
                
                {/* Texte vertical */}
                <span
                  className={`writing-mode-vertical-rl rotate-180 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-accent font-bold'
                      : 'text-gray-light group-hover:text-foreground'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Scroll indicator en bas */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-xs text-gray-light writing-mode-vertical-rl rotate-180">
              SCROLL
            </span>
          </div>
        </div>
      </nav>

      {/* Spacer pour mobile */}
      <div className="lg:hidden h-16" />
    </>
  )
}

export default Navbar
