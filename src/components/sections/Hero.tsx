import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Palette, Database } from 'lucide-react'

const capabilities = [
  'Web Development',
  'Software Dev',
  'UI/UX Design',
  'REST APIs',
  'Testing & QA',
  'Digital Solutions',
]

// Floating tech card component
const TechCard = ({
  label,
  sublabel,
  icon: Icon,
  className,
  delay,
  color,
}: {
  label: string
  sublabel?: string
  icon: React.ElementType
  className: string
  delay: number
  color: string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    className={`absolute glass-light rounded-2xl p-3 shadow-xl border border-white/80 ${className}`}
  >
    <div className="flex items-center gap-2.5">
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon size={16} className="text-white" />
      </div>
      <div>
        <div className="text-slate-800 font-semibold text-xs">{label}</div>
        {sublabel && <div className="text-slate-400 text-xs">{sublabel}</div>}
      </div>
    </div>
  </motion.div>
)

const HeroVisual = () => (
  <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center">
    {/* Blob backgrounds */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse-glow" />
    </div>
    <div className="absolute top-8 right-8 w-40 h-40 bg-violet-100 rounded-full blur-2xl opacity-50" />
    <div className="absolute bottom-8 left-8 w-36 h-36 bg-pink-100 rounded-full blur-2xl opacity-50" />

    {/* Main laptop mockup */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative animate-float z-10"
    >
      <div className="w-64 md:w-80 bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        {/* Browser chrome */}
        <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-slate-600 rounded-full h-5 px-3 flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
            <div className="text-slate-300 text-xs">yourbrand.com</div>
          </div>
        </div>
        {/* Screen content */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 h-44">
          <div className="bg-indigo-600/20 rounded-lg p-3 mb-2">
            <div className="h-2 bg-indigo-400/60 rounded w-3/4 mb-1" />
            <div className="h-2 bg-indigo-400/40 rounded w-1/2" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-700/60 rounded-lg p-2">
                <div className="h-1.5 bg-slate-500 rounded w-full mb-1" />
                <div className="h-1.5 bg-slate-600 rounded w-2/3" />
                <div className="mt-2 h-4 bg-gradient-to-r from-indigo-500/40 to-violet-500/40 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating phone mockup */}
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="absolute right-0 bottom-8 md:right-4 animate-float-slow z-10"
      style={{ animationDelay: '1s' }}
    >
      <div className="w-24 md:w-28 bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700 px-3 py-2 flex justify-center">
          <div className="w-8 h-1 bg-slate-500 rounded-full" />
        </div>
        <div className="bg-gradient-to-b from-indigo-900/80 to-violet-900/80 p-2 h-32">
          <div className="bg-white/10 rounded-lg p-2 mb-1">
            <div className="h-1.5 bg-white/40 rounded w-full mb-1" />
            <div className="h-1.5 bg-white/20 rounded w-2/3" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-md p-1.5">
                <div className="w-4 h-4 rounded bg-indigo-400/40 mb-1" />
                <div className="h-1 bg-white/20 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating tech cards */}
    <TechCard
      label="React + TypeScript"
      sublabel="Frontend"
      icon={Code2}
      className="top-4 left-2 md:left-0"
      delay={0.6}
      color="bg-indigo-500"
    />
    <TechCard
      label="Node.js API"
      sublabel="Backend"
      icon={Database}
      className="top-20 right-2 md:right-0"
      delay={0.7}
      color="bg-emerald-500"
    />
    <TechCard
      label="UI/UX Design"
      sublabel="Figma"
      icon={Palette}
      className="bottom-4 left-2 md:left-0"
      delay={0.8}
      color="bg-violet-500"
    />
    <TechCard
      label="Mobile Ready"
      icon={Smartphone}
      className="bottom-20 right-2 md:right-0"
      delay={0.9}
      color="bg-pink-500"
    />
  </div>
)

const Hero = () => {
  return (
    <section className="relative hero-bg pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold rounded-full tracking-widest uppercase mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              IT & Digital Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 leading-[1.08] mb-6"
            >
              From Ideas to{' '}
              <span className="gradient-text block sm:inline">Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              We build reliable websites, web applications, APIs, dashboards and digital experiences for startups, businesses and individuals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all hover:-translate-y-0.5"
              >
                Explore Our Services
              </Link>
            </motion.div>

            {/* Capability List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
            >
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-lg shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {cap}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
