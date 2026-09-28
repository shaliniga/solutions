import type { ReactNode } from 'react'

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  children?: ReactNode
}

const SectionHeader = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false,
  children,
}: SectionHeaderProps) => {
  const textColor = light ? 'text-white' : 'text-slate-900'
  const subtitleColor = light ? 'text-slate-300' : 'text-slate-500'
  const badgeColor = light
    ? 'bg-white/10 text-white border border-white/20'
    : 'bg-indigo-50 text-indigo-700 border border-indigo-200'

  const renderTitle = () => {
    if (!highlight) return <span>{title}</span>
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-12 md:mb-16`}>
      {badge && (
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${badgeColor}`}>
          {badge}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-4 ${textColor}`}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

export default SectionHeader
