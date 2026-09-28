import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { technologies } from '../../data'

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  Frontend: { bg: 'bg-blue-50 border-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  Backend: { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  Database: { bg: 'bg-violet-50 border-violet-100', text: 'text-violet-700', dot: 'bg-violet-500' },
  Tools: { bg: 'bg-amber-50 border-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  Visualization: { bg: 'bg-pink-50 border-pink-100', text: 'text-pink-700', dot: 'bg-pink-500' },
  Deployment: { bg: 'bg-cyan-50 border-cyan-100', text: 'text-cyan-700', dot: 'bg-cyan-500' },
}

const TechSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Tech Stack"
            title="Technologies We Work With"
            highlight="Technologies"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, i) => {
            const color = categoryColors[category.category] || categoryColors.Frontend
            return (
              <FadeIn key={category.category} delay={i * 0.07} direction="up">
                <div className={`rounded-2xl border p-6 ${color.bg} h-full`}>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-2.5 h-2.5 rounded-full ${color.dot}`} />
                    <h3 className={`font-bold text-sm uppercase tracking-wider ${color.text}`}>
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex items-center px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-100 shadow-sm hover:shadow-md transition-shadow`}
                      >
                        {item}
                      </span>
                    ))}
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

export default TechSection
