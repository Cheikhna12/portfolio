'use client'

const Experience = () => {

  const experiences = [
   
    {
      company: 'Ebenyx Technologie',
      position: 'stagiaire Développeur Full-Stack',
      period: 'Janvier - Septembre 2025',
      description: 'Applications web (Angular, React), APIs (Spring), Mobile (Flutter)',
    },
    {
      company: 'Ivoire Phoenix',
      position: 'Stagiaire Développeur',
      period: 'Août - Octobre 2024',
      description: 'Développement d\'api avec le framework Django',
    },
    {
      company: 'Somelec Mauritanie',
      position: 'Développeur Junior',
      period: 'Septembre - Novembre 2023',
      description: 'Java Spring Boot, JDBC, Migration de données PostgreSQL',
    },
  ]

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Expérience Professionnelle
          </h2>

          {/* Liste vintage simple */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border-b border-border pb-6 last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                      
                    </h3>
                    <p className="text-base text-gray-light mt-1">{exp.position}</p>
                  </div>
                  <span className="text-sm text-gray-light mt-2 sm:mt-0 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-light text-sm mt-3">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* CiPolitik - Style vintage */}
          <div className="mt-16 p-6 border-2 border-foreground">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Co-fondateur — CiPolitik
                </h3>
                <p className="text-sm text-gray-light mb-3">
                  Plateforme d&apos;education politique, Côte d&apos;Ivoire
                </p>
              </div>
            </div>
            <a
              href="http://www.politik.ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm underline hover:no-underline"
            >
              www.politik.ci
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
