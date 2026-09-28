import { motion } from 'framer-motion'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSection from '../components/sections/ProcessSection'
import CTASection from '../components/sections/CTASection'
import FadeIn from '../components/common/FadeIn'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const Services = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-indigo-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 bg-indigo-50 text-indigo-700 border border-indigo-200">
              What We Offer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Our <span className="gradient-text">Digital Services</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              From development and design to testing and ongoing support, we provide flexible technology services based on your requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </motion.div>
  )
}

export default Services
