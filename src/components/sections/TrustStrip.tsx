import { CheckCircle, Clock, Settings, Layers } from 'lucide-react'
import FadeIn from '../common/FadeIn'

const strips = [
  {
    icon: CheckCircle,
    label: 'Quality Work',
    description: 'Reliable solutions built with best practices',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Clock,
    label: 'On-Time Support',
    description: 'Responsive communication throughout',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Settings,
    label: 'Flexible Engagement',
    description: 'Tasks, modules or complete projects',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
  {
    icon: Layers,
    label: 'End-to-End Solutions',
    description: 'From design and development to support',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

const TrustStrip = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {strips.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.label} delay={i * 0.08} direction="up">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300 bg-white group">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={item.color} />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-slate-800 text-sm mb-1">{item.label}</div>
                    <div className="text-slate-500 text-xs leading-snug">{item.description}</div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
