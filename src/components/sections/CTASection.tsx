import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../common/FadeIn'

const tags = [
  'Web Development',
  'Software',
  'APIs',
  'Dashboards',
  'UI/UX',
  'Testing',
  'Support',
]

const CTASection = () => {
  return (
    <section className="dark-section py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-900/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <FadeIn>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/10 text-white border border-white/20">
            Get Started
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
            Have a Project{' '}
            <span className="gradient-text">in Mind?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you want to build, improve or fix. Let's discuss how we can help.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/40 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 text-slate-300 text-sm rounded-full hover:bg-white/10 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default CTASection
