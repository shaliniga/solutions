import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Tag, ArrowRight } from 'lucide-react'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { projects } from '../../data'

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
      >
        {/* Project visual header */}
        <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          {/* Browser mockup */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <div className="bg-black/20 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>
                <div className="flex-1 bg-white/10 rounded-full h-3 px-2" />
              </div>
              <div className="p-3 space-y-2">
                <div className="h-2 bg-white/30 rounded-full w-3/4" />
                <div className="h-2 bg-white/20 rounded-full" />
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-8 bg-white/15 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
            <Tag size={11} />
            {project.category}
          </div>

          {/* Status */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            {project.status}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-display text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium rounded-lg">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to={`/projects`}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={12} />
              View Project
            </Link>
            <Link
              to={`/projects`}
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              Case Study
            </Link>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

const ProjectsSection = ({ preview = false }: { preview?: boolean }) => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Our Work"
            title="Our Selected Work"
            highlight="Selected Work"
            subtitle="Examples of applications and digital solutions we have worked on."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {preview && (
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl border-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all hover:-translate-y-0.5"
              >
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
