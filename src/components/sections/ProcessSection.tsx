import { motion } from 'framer-motion'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { processSteps } from '../../data'

const icons = ['🔍', '📋', '🎨', '⚙️', '🚀']

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="How We Work"
            title="Our Development Process"
            highlight="Development Process"
            subtitle="A structured approach that keeps your project on track from start to finish."
          />
        </FadeIn>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative">
          {/* Connector line */}
          <div className="absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-indigo-200 via-violet-300 to-pink-200" />

          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1} direction="up">
              <div className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 hover:border-indigo-500 transition-colors"
                >
                  <span className="text-2xl">{icons[index]}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </motion.div>

                <div className="font-bold text-xs text-indigo-600 tracking-widest uppercase mb-2">
                  Step {step.number}
                </div>
                <h3 className="font-bold font-display text-slate-800 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1} direction="up">
              <div className="relative flex gap-6 pb-8">
                {/* Left: Number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center shadow-md flex-shrink-0 relative">
                    <span className="text-xl">{icons[index]}</span>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b from-indigo-300 to-indigo-100 mt-3" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="pt-2 pb-4">
                  <div className="font-bold text-xs text-indigo-600 tracking-widest uppercase mb-1">
                    {step.number}
                  </div>
                  <h3 className="font-bold font-display text-slate-800 text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
