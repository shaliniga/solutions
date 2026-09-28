import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Puzzle, Zap, Shield, Users, Globe } from 'lucide-react'
import FadeIn from '../components/common/FadeIn'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/sections/CTASection'
import EngagementSection from '../components/sections/EngagementSection'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const solutions = [
  {
    icon: Target,
    title: 'For Startups',
    description: 'Build your MVP or core product with a lean, capable team. We understand startup requirements — speed, flexibility and reliable delivery.',
    items: ['MVP development', 'Product launch support', 'Feature iteration', 'Technical guidance'],
    color: 'from-indigo-50 to-blue-50',
    border: 'border-indigo-100 hover:border-indigo-300',
    icon_color: 'text-indigo-600',
    icon_bg: 'bg-indigo-100',
  },
  {
    icon: Globe,
    title: 'For Small Businesses',
    description: 'Establish your digital presence or improve existing systems. We work within your scope and budget to deliver practical solutions.',
    items: ['Business websites', 'Online presence', 'Application improvements', 'Maintenance'],
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100 hover:border-emerald-300',
    icon_color: 'text-emerald-600',
    icon_bg: 'bg-emerald-100',
  },
  {
    icon: Zap,
    title: 'For Growing Businesses',
    description: 'Scale your digital capabilities. Add features, integrate new tools, improve performance and expand your product.',
    items: ['Feature development', 'System integrations', 'Performance improvements', 'API development'],
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100 hover:border-amber-300',
    icon_color: 'text-amber-600',
    icon_bg: 'bg-amber-100',
  },
  {
    icon: Users,
    title: 'For Entrepreneurs',
    description: 'Turn your idea into a working digital product. We can guide you from requirement to deployment.',
    items: ['Idea to product', 'End-to-end development', 'Design and build', 'Launch support'],
    color: 'from-violet-50 to-purple-50',
    border: 'border-violet-100 hover:border-violet-300',
    icon_color: 'text-violet-600',
    icon_bg: 'bg-violet-100',
  },
  {
    icon: Shield,
    title: 'For Individuals',
    description: 'Portfolio websites, personal projects, or specific technical requirements — we can help regardless of project size.',
    items: ['Portfolio websites', 'Personal projects', 'Technical requirements', 'Small tasks'],
    color: 'from-pink-50 to-rose-50',
    border: 'border-pink-100 hover:border-pink-300',
    icon_color: 'text-pink-600',
    icon_bg: 'bg-pink-100',
  },
  {
    icon: Puzzle,
    title: 'For Existing Teams',
    description: 'Augment your existing product team with focused development, testing or design support.',
    items: ['Feature development', 'QA and testing', 'UI implementation', 'Development support'],
    color: 'from-cyan-50 to-sky-50',
    border: 'border-cyan-100 hover:border-cyan-300',
    icon_color: 'text-cyan-600',
    icon_bg: 'bg-cyan-100',
  },
]

const Solutions = () => {
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
              Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Solutions for Every <span className="gradient-text">Business Stage</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're starting from scratch, growing your product, or need specific technical support — we have flexible solutions for your requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              badge="Who We Help"
              title="Who We Work With"
              highlight="Who We Work With"
              subtitle="We work with a wide range of clients and requirements — from individuals to growing teams."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <FadeIn key={solution.title} delay={index * 0.08} direction="up">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-gradient-to-br ${solution.color} border ${solution.border} rounded-3xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className={`w-14 h-14 ${solution.icon_bg} rounded-2xl flex items-center justify-center mb-5`}>
                      <Icon size={26} className={solution.icon_color} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-800 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${solution.icon_color.replace('text-', 'bg-')}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <EngagementSection />

      {/* Inline CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">
              Have a requirement?
            </h2>
            <p className="text-slate-500 text-lg mb-8">Let's discuss your project.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}

export default Solutions
