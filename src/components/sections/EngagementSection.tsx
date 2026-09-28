import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Puzzle, Rocket, ArrowRight } from 'lucide-react'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { engagements } from '../../data'

const iconMap = [Target, Puzzle, Rocket]

const EngagementSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="How We Work"
            title="Flexible Ways to Work With Us"
            highlight="Work With Us"
            subtitle="We can support you at any stage of your project — from a small task to a complete digital product."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {engagements.map((engagement, index) => {
            const Icon = iconMap[index]
            const colors = [
              { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-100 hover:border-indigo-300', icon: 'bg-indigo-100 text-indigo-600', number: 'text-indigo-200' },
              { bg: 'from-violet-50 to-purple-50', border: 'border-violet-100 hover:border-violet-300', icon: 'bg-violet-100 text-violet-600', number: 'text-violet-200' },
              { bg: 'from-pink-50 to-rose-50', border: 'border-pink-100 hover:border-pink-300', icon: 'bg-pink-100 text-pink-600', number: 'text-pink-200' },
            ]
            const color = colors[index]

            return (
              <FadeIn key={engagement.number} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-gradient-to-br ${color.bg} border ${color.border} rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Number background */}
                  <div className={`absolute top-4 right-6 text-6xl font-black font-display leading-none select-none ${color.number}`}>
                    {engagement.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${color.icon} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-800 mb-3">
                    {engagement.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {engagement.description}
                  </p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default EngagementSection
