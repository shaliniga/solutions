import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { faqs } from '../../data'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            highlight="Asked Questions"
          />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'border-indigo-200 shadow-md' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-800 text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion
