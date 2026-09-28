import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Globe, User } from 'lucide-react'
import FadeIn from '../components/common/FadeIn'
import CTASection from '../components/sections/CTASection'
import { teamMembers } from '../data'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const TeamCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const gradients = [
    'from-indigo-500 via-violet-500 to-purple-600',
    'from-pink-500 via-rose-500 to-violet-500',
  ]

  return (
    <FadeIn delay={index * 0.15} direction="up">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
      >
        {/* Avatar Header */}
        <div className={`h-56 bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          {/* Avatar placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center mb-3">
              <User size={48} className="text-white/80" />
            </div>
            <div className="text-white/60 text-xs font-medium tracking-wider">
              REPLACE WITH PHOTO
            </div>
          </div>

          {/* Role badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20 whitespace-nowrap">
            {member.role}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold font-display text-slate-800 mb-1">
              {member.name}
            </h3>
            <p className="text-indigo-600 text-sm font-semibold">{member.role}</p>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed text-center mb-6">
            {member.description}
          </p>

          {/* Skills */}
          <div className="mb-6">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center">
              Core Skills
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-500 flex items-center justify-center transition-all"
            >
              <Globe size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-800 hover:text-white text-slate-500 flex items-center justify-center transition-all"
            >
              <Code2 size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

const Team = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-indigo-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 bg-indigo-50 text-indigo-700 border border-indigo-200">
              Our Team
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Meet <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Two developers. One goal: building useful digital solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-violet-50 border-y border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">
              One Team. <span className="gradient-text">One Goal.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Together we cover full-stack development, UI/UX implementation, software testing, API development and digital product delivery — giving you a complete team for your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                Work With Us
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                About Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}

export default Team
