import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Globe, Code2, Send, CheckCircle, AlertCircle } from 'lucide-react'
import FadeIn from '../components/common/FadeIn'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  timeline: string
  description: string
}

interface FormErrors {
  [key: string]: string
}

const serviceOptions = [
  'Website Development',
  'Web Application',
  'React Development',
  'Node.js / API',
  'Mobile Application',
  'UI/UX Design',
  'Testing / QA',
  'Maintenance',
  'Other',
]

const budgetOptions = [
  'Below ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not Sure Yet',
]

const timelineOptions = [
  'ASAP',
  '1–2 Weeks',
  '1 Month',
  '1–3 Months',
  'Flexible',
]

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'YOUR EMAIL',
    href: 'mailto:your@email.com',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 hover:bg-indigo-100',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'YOUR WHATSAPP',
    href: 'https://wa.me/910000000000',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 hover:bg-emerald-100',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'YOUR BRAND',
    href: 'https://linkedin.com',
    color: 'text-blue-600',
    bg: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'YOUR BRAND',
    href: 'https://github.com',
    color: 'text-slate-700',
    bg: 'bg-slate-100 hover:bg-slate-200',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.description.trim()) newErrors.description = 'Please describe your project'
    else if (formData.description.trim().length < 20) newErrors.description = 'Please provide more details (at least 20 characters)'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate form submission — connect to your backend/email service here
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass = (name: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 bg-white ${
      errors[name]
        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
    }`

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
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 leading-tight mb-5">
              Let's Build Something{' '}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your project, requirement or technical challenge.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold font-display text-slate-900 mb-4">Contact Options</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Send us a message through the form, or reach out directly through any of the channels below.
                </p>

                <div className="space-y-3 mb-10">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${method.bg} group`}
                      >
                        <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                          <Icon size={18} className={method.color} />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium">{method.label}</div>
                          <div className="font-semibold text-slate-700 text-sm">{method.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Quick note */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                  <div className="font-bold text-indigo-800 text-sm mb-2">Response Time</div>
                  <p className="text-indigo-600 text-xs leading-relaxed">
                    We typically respond to project inquiries within 24–48 hours. For urgent requirements, WhatsApp is the fastest option.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.1}>
              <div className="lg:col-span-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-emerald-800 mb-3">
                      Message Received!
                    </h3>
                    <p className="text-emerald-600 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We will review your requirement and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={inputClass('fullName')}
                          autoComplete="name"
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 00000 00000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass('phone')}
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Company / Business
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Company or business name"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass('company')}
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass('service')} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`${inputClass('budget')} appearance-none cursor-pointer`}
                        >
                          <option value="">Select a range</option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={`${inputClass('timeline')} appearance-none cursor-pointer`}
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Project Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        placeholder="Tell us about your project, requirements or what you need help with..."
                        value={formData.description}
                        onChange={handleChange}
                        className={`${inputClass('description')} resize-none`}
                      />
                      {errors.description && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/25 text-base"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Project Inquiry
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
