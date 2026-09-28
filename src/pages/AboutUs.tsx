import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Globe, ShieldCheck, MessageSquare, Users } from 'lucide-react'
import FadeIn from '../components/common/FadeIn'
import TechSection from '../components/sections/TechSection'
import CTASection from '../components/sections/CTASection'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const values = [
  {
    icon: Code2,
    title: 'Technology-First',
    description: 'We use modern, maintainable technologies that are suited to the project scope and growth requirements.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: MessageSquare,
    title: 'Close Collaboration',
    description: 'We work closely with clients at every stage, keeping communication transparent and requirements clear.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Globe,
    title: 'Practical Solutions',
    description: 'We focus on building solutions that solve real problems, not just technically complex systems.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Delivery',
    description: 'We test, review and refine before delivering — ensuring what we build works reliably.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

const AboutUs = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-violet-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 bg-violet-50 text-violet-700 border border-violet-200">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              About <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We are a two-person technology team providing practical digital solutions for businesses, startups and individuals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main About */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 border border-indigo-100">
                  {/* Stats / badges */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                      <div className="text-3xl font-black font-display gradient-text mb-1">2</div>
                      <div className="text-slate-500 text-xs">Team Members</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                      <div className="text-3xl font-black font-display text-emerald-600 mb-1">6+</div>
                      <div className="text-slate-500 text-xs">Services Offered</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                      <div className="text-3xl font-black font-display text-violet-600 mb-1">∞</div>
                      <div className="text-slate-500 text-xs">Commitment to Quality</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                      <div className="text-3xl font-black font-display text-pink-600 mb-1">Full</div>
                      <div className="text-slate-500 text-xs">Stack Coverage</div>
                    </div>
                  </div>

                  {/* Tech strip */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">What We Build With</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-lg font-medium border border-indigo-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Build. Test. Design.</div>
                      <div className="text-indigo-600 text-xs font-semibold">Grow.</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                  A focused team. <span className="gradient-text">Practical solutions.</span>
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed text-base mb-8">
                  <p>
                    We are a two-person technology team providing practical digital solutions for businesses, startups and individuals. Our approach combines development, design, problem-solving and continuous communication to turn requirements into reliable digital products.
                  </p>
                  <p>
                    We can work with existing applications, build new products from scratch, or support specific features and technical requirements — adapting our approach to fit your project's needs and scope.
                  </p>
                  <p>
                    Our experience spans full-stack web development, UI/UX implementation, REST API development, software testing, and digital product delivery. We aim to deliver solutions that are maintainable, scalable and built with best practices.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
                  >
                    Meet Our Team
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Values */}
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-slate-900 mb-3">Our Approach</h2>
              <p className="text-slate-500">The principles that guide how we work and deliver.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <FadeIn key={value.title} delay={index * 0.1} direction="up">
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 text-center group">
                    <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className={value.color} />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 font-display">{value.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <TechSection />
      <CTASection />
    </motion.div>
  )
}

export default AboutUs
