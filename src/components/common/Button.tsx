import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  onClick?: () => void
  className?: string
  icon?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon = false,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 focus:ring-indigo-500',
    secondary: 'bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 focus:ring-indigo-500',
    outline: 'bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
    dark: 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg focus:ring-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex">
        <Link to={to} className={classes}>{content}</Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group inline-flex">
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`group ${classes}`}
      disabled={disabled}
    >
      {content}
    </motion.button>
  )
}

export default Button
