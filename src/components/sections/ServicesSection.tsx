import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Code2, Smartphone, Globe, ShieldCheck, Palette, Layers,
  Check, ArrowRight
} from 'lucide-react'
import FadeIn from '../common/FadeIn'
import SectionHeader from '../common/SectionHeader'
import { services } from '../../data'

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Globe,
  ShieldCheck,
  Palette,
  Layers,
}

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = iconMap[service.icon] || Code2
  const badges = service.technologies || service.tools || []

  return (
    <FadeIn delay={index * 0.08} direction="up">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-gradient-to-br ${service.color.bg} border ${service.color.border} rounded-3xl p-7 h-full flex flex-col transition-all duration-300 hover:shadow-xl group`}
      >
        {/* Number */}
        <div className="absolute top-6 right-6 text-5xl font-black text-slate-200 font-display leading-none select-none">
          {service.number}
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm ${
            service.color.bg.includes('blue') ? 'bg-blue-100' :
            service.color.bg.includes('pink') ? 'bg-pink-100' :
            service.color.bg.includes('emerald') ? 'bg-emerald-100' :
            service.color.bg.includes('amber') ? 'bg-amber-100' :
            service.color.bg.includes('violet') ? 'bg-violet-100' :
            'bg-cyan-100'
          }`}
        >
          <Icon size={26} className={service.color.icon} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-slate-800 mb-3 pr-10">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Service list */}
        <ul className="space-y-2 mb-5 flex-1">
          {service.items.slice(0, 6).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Check size={14} className={`${service.color.icon} mt-0.5 flex-shrink-0`} />
              {item}
            </li>
          ))}
          {service.items.length > 6 && (
            <li className="text-sm text-slate-400 pl-5">
              +{service.items.length - 6} more
            </li>
          )}
        </ul>

        {/* Tech badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {badges.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${service.color.badge}`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          to={service.ctaLink}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${service.color.icon} hover:gap-3 transition-all group`}
        >
          {service.ctaText}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </FadeIn>
  )
}

const ServicesSection = ({ preview = false }: { preview?: boolean }) => {
  const displayedServices = preview ? services.slice(0, 3) : services

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge="Our Services"
            title="Our Digital Services"
            highlight="Digital Services"
            subtitle="From development and design to testing and ongoing support, we provide flexible technology services based on your requirements."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {preview && (
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                View All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default ServicesSection
