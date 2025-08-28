'use client'

export default function Benefits() {
  return (
    <section id="benefits-section" className="relative py-24 overflow-hidden">
      {/* Background matching other sections */}
      <div className="absolute inset-0 bg-[#04070d]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/30" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/[0.05]">
              <svg className="w-3 h-3 mr-1.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
              </svg>
              <span className="text-white text-[10px] uppercase tracking-[0.15em] font-medium">
                BENEFITS
              </span>
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            <span className="text-white">Why</span>
            {' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Choose</span>
            {' '}
            <span className="italic font-serif text-gray-400">Us?</span>
          </h2>
          
          <p className="text-white text-lg">
            Everything you need to automate, optimize, and scale
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 - Real-Time Intelligence */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20 group">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Top-right gradient glow - Landio style */}
              <div 
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(213, 219, 230, 0.07) 0%, transparent 25%)',
                }}
              />
            <div className="mb-6 relative flex items-center justify-center" style={{ height: '250px' }}>
              <svg className="w-48 h-48 relative" viewBox="0 0 192 192" fill="none">
                <defs>
                  {/* Mask to contain gradient within arc */}
                  <mask id="arcMask">
                    <path 
                      d="M 1 96 A 95 95 0 0 1 191 96 L 191 192 L 1 192 Z" 
                      fill="white"
                    />
                  </mask>
                  
                  {/* Radial gradient for glow effect */}
                  <radialGradient id="arcGlow" cx="50%" cy="0%" r="50%">
                    <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity="0"/>
                  </radialGradient>
                  
                  {/* Hover gradient */}
                  <radialGradient id="arcGlowHover" cx="50%" cy="0%" r="60%">
                    <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.08"/>
                    <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                
                {/* Background glow contained within arc */}
                <circle 
                  cx="96" 
                  cy="96" 
                  r="96" 
                  fill="url(#arcGlow)" 
                  mask="url(#arcMask)"
                  className="transition-opacity duration-500"
                />
                
                {/* Hover glow */}
                <circle 
                  cx="96" 
                  cy="96" 
                  r="96" 
                  fill="url(#arcGlowHover)" 
                  mask="url(#arcMask)"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Draw only the top half arc */}
                <path 
                  d="M 1 96 A 95 95 0 0 1 191 96" 
                  stroke="url(#gradient1)" 
                  strokeWidth="1.5"
                  fill="none"
                />
                
                {/* Clock hand pointing to 10 o'clock - animates to 2 o'clock on hover */}
                <rect
                  x="96"
                  y="90"
                  width="70"
                  height="12"
                  rx="6"
                  fill="rgb(31, 41, 55)"
                  className="transition-transform duration-500 ease-in-out origin-[96px_96px] -rotate-[150deg] group-hover:-rotate-[30deg]"
                  opacity="0.8"
                />
                
                {/* Outer circle with black background */}
                <circle
                  cx="96"
                  cy="96"
                  r="10"
                  fill="rgb(0, 0, 0)"
                />
                
                {/* Blue/purple dot at center (pivot point) */}
                <circle
                  cx="96"
                  cy="96"
                  r="5"
                  fill="rgb(147, 151, 225)"
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="96" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="rgb(107, 114, 128)" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <h3 className="text-white text-xl font-medium mb-3">
              Real-Time Intelligence
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Access accurate, real-time data to drive smarter decisions
            </p>
            </div>
          </div>
          
          {/* Card 2 - Measurable Impact */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Top-right gradient glow - Landio style */}
              <div 
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(213, 219, 230, 0.07) 0%, transparent 25%)',
                }}
              />
            <div className="mb-6 h-48 flex items-center justify-center">
              <div className="relative">
                {/* Bar chart visualization */}
                <div className="flex items-end gap-3">
                  <div className="w-8 h-16 bg-gray-700 rounded-t"></div>
                  <div className="w-8 h-20 bg-gray-600 rounded-t"></div>
                  <div className="w-8 h-24 bg-gray-500 rounded-t"></div>
                  <div className="w-8 h-20 bg-gray-600 rounded-t"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-white text-xl font-medium mb-3">
              Measurable Impact
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Track performance, uncover insights, and achieve data-backed growth
            </p>
            </div>
          </div>
          
          {/* Card 3 - Seamless Integration */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Top-right gradient glow - Landio style */}
              <div 
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(213, 219, 230, 0.07) 0%, transparent 25%)',
                }}
              />
            <div className="mb-6 h-48 flex items-center justify-center">
              <div className="relative">
                {/* Network/connection visualization */}
                <div className="relative w-32 h-32">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  {/* Connected nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
                    <line x1="64" y1="64" x2="64" y2="12" stroke="gray" strokeWidth="1" opacity="0.5"/>
                    <line x1="64" y1="64" x2="64" y2="116" stroke="gray" strokeWidth="1" opacity="0.5"/>
                    <line x1="64" y1="64" x2="12" y2="64" stroke="gray" strokeWidth="1" opacity="0.5"/>
                    <line x1="64" y1="64" x2="116" y2="64" stroke="gray" strokeWidth="1" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-white text-xl font-medium mb-3">
              Seamless Integration
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Connect tools, teams, and workflows with intelligent automation
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}