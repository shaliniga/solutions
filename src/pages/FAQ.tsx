import { motion } from 'framer-motion'
import FAQAccordion from '../components/sections/FAQAccordion'
import CTASection from '../components/sections/CTASection'
import FadeIn from '../components/common/FadeIn'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const FAQ = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35 }}
    >
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-amber-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 bg-amber-50 text-amber-700 border border-amber-200">
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Common questions about working with us, our services and how we engage with clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion />
      <CTASection />
    </motion.div>
  )
}

export default FAQ
