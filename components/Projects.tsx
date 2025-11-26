'use client'

import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      title: 'InternshipQuest',
      category: 'Jeu RPG 2D',
      description: 'Jeu de simulation de recherche de stage développé avec LibGDX. Le joueur incarne un étudiant qui explore une ville, visite des entreprises et participe à des mini-jeux pour décrocher un stage.',
      tech: ['Java', 'LibGDX', 'Tiled', 'Maven'],
      link: null,
      github: 'https://github.com/Cheikhna12/internshipGame',
    },
    {
      title: 'CiPolitik',
      category: 'Plateforme Web Politique',
      description: 'Co-fondateur et architecte technique d\'une plateforme révolutionnant l\'information politique en Côte d\'Ivoire.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      link: 'http://www.politik.ci',
      github: null,
    },
    {
      title: 'JobBoard',
      category: 'Application Web',
      description: 'Plateforme de recherche d\'emploi.',
      tech: ['NextJs', 'Prisma', 'Postgres', 'Vercel'],
      link: 'https://job-board-aaa.vercel.app/',
      github: null,
    }
  ]

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white border-2 border-foreground hover:border-accent transition-colors"
            >
              <p className="text-xs text-gray-light uppercase mb-2">{project.category}</p>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-light text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Voir
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
