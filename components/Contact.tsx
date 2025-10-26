'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, AlertCircle, Loader2 } from 'lucide-react'
import Toast from './Toast'

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setShowToast(true)
        
        // Fermer le toast automatiquement après 5 secondes
        setTimeout(() => {
          setShowToast(false)
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Erreur de connexion. Veuillez réessayer.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cheickhamed2780@gmail.com',
      link: 'mailto:cheickhamed2780@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 07 74 10 89 60',
      link: 'tel:+33774108960',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: '6 square d\'Alsace, Rennes 35000',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/cheikhna-ould-6a7689232' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/Cheikhna12' },
  ]

  return (
    <>
      <Toast show={showToast} onClose={() => setShowToast(false)} />
      
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-sm text-gray-light uppercase tracking-[0.2em] mb-4">[ CONNECT ]</h2>
          <h3 className="text-4xl md:text-6xl font-bold font-display mb-8">
            Let&apos;s work together<span className="text-accent">.</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-light mb-6 leading-relaxed">
                  Développeur full-stack passionné, je suis <span className="text-foreground font-semibold">disponible</span> pour des{' '}
                  <span className="text-accent font-semibold">projets freelance</span> ou des opportunités professionnelles.
                </p>
                <p className="text-gray-light">
                  Intéressé par les projets impliquant le développement full-stack, l&apos;IA et la data science.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-background/40 backdrop-blur-sm rounded-lg group-hover:bg-accent transition-colors border border-gray-light/10">
                      <info.icon className="text-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-light mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-light/10">
                <p className="text-sm text-gray-light mb-4">Retrouvez-moi sur :</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background/40 backdrop-blur-sm rounded-lg hover:bg-accent transition-colors group border border-gray-light/10"
                      aria-label={social.label}
                    >
                      <social.icon className="text-foreground" size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-background/30 backdrop-blur-sm p-8 lg:p-12 rounded-lg border border-gray-light/10">
              <h4 className="text-2xl font-semibold text-foreground mb-6">
                Envoyez-moi un message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-light mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-light/20 rounded text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-light/20 rounded text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-light mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-light/20 rounded text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Opportunité de collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-gray-light/20 rounded text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-accent text-white font-medium rounded hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500">
                    <AlertCircle size={18} />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Contact
