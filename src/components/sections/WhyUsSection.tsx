import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Settings2, Cpu, HeartHandshake } from 'lucide-react'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { whyUsCards } from '../../data'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Settings2,
  Cpu,
  HeartHandshake,
}

const WhyUsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Why Choose Us"
            title="Why Work With Us?"
            highlight="Work With Us?"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsCards.map((card, index) => {
            const Icon = iconMap[card.icon] || MessageSquare
            return (
              <FadeIn key={card.title} delay={index * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={card.color} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-2 font-display">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Contact CTA strip */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold text-slate-800 mb-1 font-display">Have a requirement?</div>
              <div className="text-slate-500 text-sm">Let's discuss your project and find the best solution.</div>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default WhyUsSection
