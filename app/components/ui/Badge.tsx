interface BadgeProps {
  children: React.ReactNode
  className?: string
  showAnimation?: boolean
}

const Badge = ({ children, className = '', showAnimation = false }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-300 ${className}`}>
      {showAnimation && (
        <div className="relative flex items-center justify-center">
          {/* Inner circle */}
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          {/* Animated ring */}
          <div className="absolute w-4 h-4 border border-blue-400/60 rounded-full animate-ping"></div>
        </div>
      )}
      {children}
    </div>
  )
}

export default Badge