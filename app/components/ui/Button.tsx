interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient-border'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border border-gray-600 hover:border-gray-400 text-white bg-transparent focus:ring-gray-500',
    'gradient-border': 'relative text-white bg-black border-2 border-gray-300/20 group whitespace-nowrap'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  if (variant === 'gradient-border') {
    return (
      <button 
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
      >
        {/* Full border gradient overlay - paints over base border on hover */}
        <div className="absolute inset-[-2px] rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" 
             style={{
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               maskComposite: 'exclude',
               padding: '2px'
             }}>
        </div>
        
        {/* Pulse effect in middle of bottom border - initial state */}
        <div className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
        
        <span className="relative z-30">{children}</span>
      </button>
    )
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button