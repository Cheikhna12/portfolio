'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'WORK', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const social = [
    { name: 'GITHUB', href: 'https://github.com/Cheikhna12', icon: Github },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/cheikhna-ould-6a7689232', icon: Linkedin },
  ]

  return (
    <footer className="relative bg-background py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Top */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-20 pb-8 border-b border-gray-light/10">
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-light hover:text-foreground transition-colors font-mono"
              >
                [ ] {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-light hover:text-foreground transition-colors font-mono flex items-center gap-2"
              >
                [ ] {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Big Name */}
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tight">
              <span className="block text-foreground">CMO</span>
            </h2>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-end gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-xs text-gray-light uppercase mb-1">Address</p>
                  <p className="text-sm text-foreground">
                    6 square d&apos;Alsace<br />
                    Rennes, 35000, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-accent mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-xs text-gray-light uppercase mb-1">Phone</p>
                  <a href="tel:+33774108960" className="text-sm text-foreground hover:text-accent transition-colors">
                    +33 07 74 10 89 60
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-accent mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-xs text-gray-light uppercase mb-1">Email</p>
                  <a 
                    href="mailto:cheickhamed2780@gmail.com" 
                    className="text-sm text-foreground hover:text-accent transition-colors underline"
                  >
                    cheickhamed2780@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-gray-light/10">
          <div className="flex flex-wrap gap-6 text-xs text-gray-light font-mono">
            <span>© {currentYear}</span>
            <span>MADE WITH ❤️ IN RENNES</span>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
