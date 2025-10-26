'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const words = [
    'Full-Stack',
    'Mobile',
    'IA & Data Science',
    'Solutions Innovantes',
  ]
  
  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1))
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, isDeleting, currentWordIndex])
  
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20"
    > 
      <div className="max-w-6xl mx-auto w-full">
        <div>
          {/* Grosse typo style investigation - Responsive */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-none tracking-tight break-words">
            CHEIKHNA<br />
            <span className="text-gray-light">MOUHAMEDOU</span><br />
            <span className="border-b-4 border-accent">OULD</span>
          </h1>

          {/* Subtitle simple */}
          <div className="text-xl md:text-3xl text-gray-light mb-12 font-light">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 h-12 sm:h-14">
              <span>Développeur </span>
              <span className="text-accent border-b-2 border-accent">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-light">
              Je crée des expériences numériques qui marquent. NexstJs, Node.js&Spring Framework, Mobile, IA.
            </p>
          </div>

          {/* CTA simple */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-bold text-base sm:text-lg hover:bg-gray-light transition-colors text-center"
            >
              Voir mes projets →
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground font-bold text-base sm:text-lg hover:bg-foreground hover:text-background transition-colors text-center"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
