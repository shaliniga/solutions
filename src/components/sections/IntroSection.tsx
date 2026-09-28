import { Link } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'
import FadeIn from '../common/FadeIn'

const IntroSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Decorative grid */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-8 lg:p-10">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Cards */}
                <div className="relative space-y-4">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                        <div className="text-indigo-600 font-bold text-sm">01</div>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Requirement Analysis</div>
                        <div className="text-slate-400 text-xs">Understanding your business goals</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['Define', 'Plan', 'Scope'].map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg font-medium">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-violet-50 ml-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                        <div className="text-violet-600 font-bold text-sm">02</div>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">Design & Development</div>
                        <div className="text-slate-400 text-xs">Building your digital product</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full" />
                    <div className="text-right text-xs text-slate-400 mt-1">In Progress</div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-emerald-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <div className="text-emerald-600 font-bold text-sm">03</div>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 text-sm">Launch & Support</div>
                          <div className="text-slate-400 text-xs">Ongoing improvements</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Live
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">2-Person Team</div>
                    <div className="text-slate-400 text-xs">Dedicated & Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-indigo-50 text-indigo-700 border border-indigo-200">
                About Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 leading-tight mb-6">
                Technology Solutions Built Around{' '}
                <span className="gradient-text">Your Business</span>
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed mb-8">
                <p>
                  We are a two-person technology team focused on building practical, scalable and user-friendly digital solutions. From individual development tasks to complete applications, we work closely with our clients to understand their requirements and deliver solutions that fit their goals.
                </p>
                <p>
                  Our approach combines development, design, problem-solving and continuous communication — turning your requirements into reliable digital products.
                </p>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                Meet Our Team
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
