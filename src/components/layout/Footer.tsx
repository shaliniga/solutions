import { Link } from 'react-router-dom'
import { Code2, Mail, Phone, MessageCircle, Globe, ArrowRight } from 'lucide-react'

const footerNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

const footerServices = [
  'Software Development',
  'Website Development',
  'Mobile Solutions',
  'UI/UX Design',
  'Testing & QA',
  'Maintenance',
]

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg font-display leading-none">YOUR BRAND</div>
                <div className="text-indigo-400 text-xs font-semibold tracking-wider">IT & DIGITAL SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              We build practical digital solutions for modern businesses, startups and individuals.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Globe size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <Code2 size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:your@email.com" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-indigo-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={14} />
                  </div>
                  YOUR EMAIL
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-indigo-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={14} />
                  </div>
                  YOUR PHONE
                </a>
              </li>
              <li>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-emerald-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <MessageCircle size={14} />
                  </div>
                  YOUR WHATSAPP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2026 YOUR BRAND. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>Build. Test. Design. Grow.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
