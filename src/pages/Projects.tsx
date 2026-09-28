import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Tag, ArrowRight } from 'lucide-react'
import FadeIn from '../components/common/FadeIn'

import CTASection from '../components/sections/CTASection'
import { projects } from '../data'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const caseStudyData = {
  mindtrack: {
    overview: 'MindTrack is an employee wellness and analytics platform built to provide organizations with insights into employee wellbeing through structured mood tracking and data visualization.',
    challenge: 'The client needed a platform that could serve multiple user types (employees, managers, HR administrators) with different views and access levels, while maintaining data privacy and providing meaningful analytics.',
    approach: 'We designed a multi-role architecture with separate dashboard experiences for each user type, implementing a PostgreSQL database structure that supported role-based access and data isolation.',
    features: [
      'Employee wellness dashboard with mood tracking',
      'Manager view with team analytics',
      'HR administrator panel with organization-wide insights',
      'Data visualization with interactive charts',
      'Role-based access control',
      'Responsive design for all devices',
    ],
    status: 'Completed and deployed.',
    highlights: [
      'Built with React, TypeScript and Vite for a fast, type-safe frontend',
      'Node.js and Express backend with RESTful API design',
      'PostgreSQL with Drizzle ORM for type-safe database operations',
      'Tailwind CSS for rapid, consistent UI development',
    ],
  },
  'ecommerce-platform': {
    overview: 'A modern e-commerce application providing a complete shopping experience with product management, cart functionality and order processing.',
    challenge: 'Required a scalable MERN stack application with a clean product browsing experience, cart management and checkout flow backed by a Node.js API and MongoDB database.',
    approach: 'We built a full-stack MERN application with a React frontend consuming Node.js/Express APIs, with MongoDB providing flexible document storage for products and orders.',
    features: [
      'Product listing with search and filter',
      'Shopping cart with quantity management',
      'Checkout functionality',
      'Order management',
      'REST API backend',
      'Responsive UI',
    ],
    status: 'Completed.',
    highlights: [
      'Full MERN stack implementation',
      'RESTful API design with Express',
      'MongoDB for flexible product data storage',
      'React state management for cart and user session',
    ],
  },
  'analytics-dashboard': {
    overview: 'An interactive analytics dashboard featuring reusable UI components, data visualization charts and responsive layouts for business reporting.',
    challenge: 'Needed a clean, reusable dashboard UI with multiple chart types, responsive layouts and a component architecture that could be extended and maintained.',
    approach: 'Built with React and Vite for performance, using Recharts for data visualization and Tailwind CSS for consistent, responsive styling.',
    features: [
      'Multiple chart types (line, bar, pie)',
      'Reusable UI components',
      'Responsive dashboard layout',
      'Data summary cards',
      'Interactive chart controls',
      'Clean visual design',
    ],
    status: 'Completed.',
    highlights: [
      'Recharts integration for interactive data visualization',
      'Modular component architecture for maintainability',
      'Tailwind CSS for rapid, consistent styling',
      'Vite for fast development and optimized builds',
    ],
  },
}

const ProjectDetailModal = ({ project }: { project: typeof projects[0] }) => {
  const caseStudy = caseStudyData[project.id as keyof typeof caseStudyData]

  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden mb-8">
      {/* Header */}
      <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="bg-black/20 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>
              <div className="flex-1 bg-white/10 rounded-full h-4 px-3" />
            </div>
            <div className="p-4 space-y-2">
              <div className="h-3 bg-white/30 rounded-full w-3/4" />
              <div className="h-2 bg-white/20 rounded-full" />
              <div className="grid grid-cols-3 gap-1.5 mt-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 bg-white/15 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-6 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
          <Tag size={12} />
          {project.category}
        </div>
        <div className="absolute bottom-4 right-6 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-7">
            <div>
              <h3 className="text-2xl font-bold font-display text-slate-800 mb-3">{project.title}</h3>
              <p className="text-slate-500 leading-relaxed">{project.description}</p>
            </div>

            {caseStudy && (
              <>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Our Approach</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{caseStudy.approach}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          <div className="space-y-5">
            {/* Tech */}
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Technology</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="inline-flex items-center px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {caseStudy && (
              <div className="bg-indigo-50 rounded-2xl p-5">
                <h4 className="font-bold text-indigo-800 mb-3 text-sm uppercase tracking-wide">Technical Highlights</h4>
                <ul className="space-y-2">
                  {caseStudy.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-indigo-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-5 text-white">
              <div className="font-bold mb-1 text-sm">Have a Similar Project?</div>
              <p className="text-indigo-200 text-xs mb-4 leading-relaxed">Let's discuss what we can build together.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-indigo-700 text-xs font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Let's Talk
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 bg-blue-50 text-blue-700 border border-blue-200">
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Our <span className="gradient-text">Selected Work</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Examples of applications and digital solutions we have worked on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <ProjectDetailModal project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}

export default Projects
