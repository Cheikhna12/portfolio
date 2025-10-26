'use client'

import Image from 'next/image'

const TechScroll = () => {
  const technologies = [
    { name: 'React', logo: '/icons/react.svg' },
    { name: 'Next.js', logo: '/icons/nextjs.svg' },
    { name: 'TypeScript', logo: '/icons/typescript.svg' },
    { name: 'Node.js', logo: '/icons/nodejs.svg' },
    { name: 'Python', logo: '/icons/python.svg' },
    { name: 'Django', logo: '/icons/django.svg' },
    { name: 'Flask', logo: '/icons/flask.svg' },
    { name: 'Java', logo: '/icons/java.svg' },
    { name: 'Spring', logo: '/icons/spring.svg' },
    { name: 'Angular', logo: '/icons/angular.svg' },
    { name: 'PostgreSQL', logo: '/icons/postgresql.svg' },
    { name: 'MongoDB', logo: '/icons/mongodb.svg' },
    { name: 'Flutter', logo: '/icons/flutter.svg' },
    { name: 'Git', logo: '/icons/git.svg' },
  ]

  // Dupliquer pour effet infini
  const duplicatedTech = [...technologies, ...technologies, ...technologies]

  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Technologies & Frameworks</h3>
      </div>
      
      <div className="relative">
        <div className="ticker-animate-ltr flex gap-8">
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-3 p-6 bg-white border-2 border-foreground min-w-[150px] hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-bold text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechScroll
