'use client'

import { Target, Zap, Lightbulb, Palette, Rocket, Shield, Smartphone, Users, Globe, FlaskConical } from 'lucide-react'

const TickerValues = () => {
  const values = [
    { Icon: Target, text: 'Précision & Excellence' },
    { Icon: Zap, text: 'Performance Optimale' },
    { Icon: Lightbulb, text: 'Innovation Continue' },
    { Icon: Palette, text: 'Design Élégant' },
    { Icon: Rocket, text: 'Livraison Rapide' },
    { Icon: Shield, text: 'Code Sécurisé' },
    { Icon: Smartphone, text: 'Mobile First' },
    { Icon: Users, text: 'Accessibilité' },
    { Icon: Globe, text: 'Scalabilité' },
    { Icon: FlaskConical, text: 'Tests Rigoureux' },
  ]

  // Dupliquer pour effet infini
  const duplicatedValues = [...values, ...values, ...values]

  return (
    <section className="py-20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ce qui me définit
        </h2>
      </div>

      {/* Ticker Row 1 - Left to Right */}
      <div className="relative mb-6 overflow-hidden">
        <div className="ticker-animate-ltr flex gap-6">
          {duplicatedValues.map((value, index) => {
            const Icon = value.Icon
            return (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-surface border border-border rounded-full"
              >
                <Icon size={20} className="text-accent" />
                <span className="text-foreground font-medium whitespace-nowrap">
                  {value.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Ticker Row 2 - Right to Left */}
      <div className="relative overflow-hidden">
        <div className="ticker-animate-rtl flex gap-6">
          {duplicatedValues.map((value, index) => {
            const Icon = value.Icon
            return (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-surface border border-border rounded-full"
              >
                <Icon size={20} className="text-accent" />
                <span className="text-foreground font-medium whitespace-nowrap">
                  {value.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TickerValues
