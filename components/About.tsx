'use client'

import { Download, Brain, Code2, BookOpen, Plane, Music, Gamepad2 } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            À propos
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Photo de profil - Style Polaroid */}
            <div className="md:col-span-2">
              <div className="relative w-full max-w-sm polaroid rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/profile.jpg"
                  alt="Cheikhna Mouhamedou Ould"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto"
                />
                <div className="mt-4 text-center font-handwriting text-gray-light italic">
                  Cheikhna @ Rennes
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 text-gray-light leading-relaxed text-lg">
              <p>
                Développeur logiciel de <span className="text-foreground">22 ans</span>, actuellement en Master of Science chez <span className="text-foreground">Epitech Rennes</span>.
              </p>
              
              <p>
                Spécialisé dans le <span className="text-foreground">développement full-stack</span> et les <span className="text-foreground">applications mobiles</span>, je crée des solutions numériques élégantes et performantes.
              </p>
              
              <p>
                Passionné par <span className="text-accent">l&apos;innovation</span> et <span className="text-accent">l&apos;excellence technique</span>, j&apos;aime transformer des idées complexes en expériences utilisateur intuitives.
              </p>
              
              <div className="pt-4">
                <a
                  href="/cv/CV_Cheikhna_Mouhamedou_Ould.pdf"
                  download
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  <Download size={18} />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>

          {/* Formation et distinctions */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <h3 className="text-xl font-semibold mb-6">Formation</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-surface border border-border">
                  <p className="font-semibold text-foreground">Master of Science</p>
                  <p className="text-sm text-gray-light">Epitech • 2025-2028</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border">
                  <p className="font-semibold text-foreground">Licence Informatique et Génie Logiciel</p>
                  <p className="text-sm text-gray-light">IIT • 2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Distinctions</h3>
              <div className="space-y-3 text-gray-light">
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Prix du meilleur élève en mathématiques (AJERTA 2020-2021)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Finaliste du concours ADUTI de l&apos;INPHB (2023)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Centres d'intérêt */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-xl font-semibold mb-8">Centres d&apos;intérêt</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <Brain className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Intelligence Artificielle</h4>
                  <p className="text-sm text-gray-light">Machine Learning, NLP, Computer Vision</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <Code2 className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Veille Technologique</h4>
                  <p className="text-sm text-gray-light">Open source, nouvelles architectures</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <BookOpen className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Lecture</h4>
                  <p className="text-sm text-gray-light">Tech, développement personnel, sciences</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <Plane className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Voyages</h4>
                  <p className="text-sm text-gray-light">Découverte de nouvelles cultures</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <Music className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Musique</h4>
                  <p className="text-sm text-gray-light">Hip-hop, R&B, musiques du monde</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent transition-colors group">
                <div className="p-3 bg-background rounded-lg group-hover:bg-accent transition-colors">
                  <Gamepad2 className="text-accent group-hover:text-background" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Gaming</h4>
                  <p className="text-sm text-gray-light">Stratégie, compétitif, game design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
