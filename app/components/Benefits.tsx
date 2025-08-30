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
            <div className="mb-6 h-48 flex items-center justify-center">
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
                
                {/* Full circle with top-to-bottom fading gradient */}
                <circle 
                  cx="96" 
                  cy="96" 
                  r="95" 
                  stroke="url(#clockGradient)" 
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
                  {/* Top-to-bottom gradient that fades completely by 50% */}
                  <linearGradient id="clockGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.6"/>
                    <stop offset="25%" stopColor="rgb(156, 163, 175)" stopOpacity="0.3"/>
                    <stop offset="40%" stopColor="rgb(156, 163, 175)" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="rgb(156, 163, 175)" stopOpacity="0"/>
                    <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity="0"/>
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
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20 group">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              {/* Top-right gradient glow - Landio style */}
              <div 
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(213, 219, 230, 0.07) 0%, transparent 25%)',
                }}
              />
            <div className="mb-6 h-48 flex items-center justify-center">
              <div className="relative w-full flex justify-center">
                {/* Bar chart visualization - animated on hover with dark theme */}
                <div className="flex items-end gap-3">
                  <div className="w-10 h-20 bg-gray-900 rounded-t origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-[1.2]"></div>
                  <div className="w-10 h-28 bg-gray-800 rounded-t origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-[1.14]"></div>
                  <div className="w-10 h-32 bg-gray-800 rounded-t origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-[1.125]"></div>
                  <div className="w-10 h-24 bg-gray-900 rounded-t origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-[1.67]"></div>
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
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20 group">
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
                {/* Network/connection visualization - rotates on hover */}
                <div className="relative w-48 h-48 transition-transform duration-500 ease-out group-hover:rotate-[15deg]">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10"></div>
                  
                  {/* Individual lines radiating from center - extended with longest at top */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
                    {/* Line 1: Top at 0 degrees - LONGEST */}
                    <line x1="96" y1="96" x2="96" y2="3" stroke="gray" strokeWidth="4" opacity="0.5"/>
                    {/* Line 2: Top-right at ~45 degrees - LONG */}
                    <line x1="96" y1="96" x2="178" y2="14" stroke="gray" strokeWidth="4" opacity="0.5"/>
                    {/* Line 3: Right at ~75 degrees - MEDIUM */}
                    <line x1="96" y1="96" x2="186" y2="70" stroke="gray" strokeWidth="4" opacity="0.5"/>
                    {/* Line 4: Bottom-right at ~150 degrees - SHORTER */}
                    <line x1="96" y1="96" x2="150" y2="150" stroke="gray" strokeWidth="4" opacity="0.5"/>
                    {/* Line 5: Bottom-left at ~225 degrees - SHORTER */}
                    <line x1="96" y1="96" x2="42" y2="150" stroke="gray" strokeWidth="4" opacity="0.5"/>
                    {/* Line 6: Left at ~270 degrees - MEDIUM */}
                    <line x1="96" y1="96" x2="6" y2="96" stroke="gray" strokeWidth="4" opacity="0.5"/>
                  </svg>
                  
                  {/* Nodes at end of each line */}
                  {/* Node 1 - Top */}
                  <div className="absolute" style={{ top: '3px', left: '96px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Node 2 - Top-right */}
                  <div className="absolute" style={{ top: '14px', left: '178px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Node 3 - Right */}
                  <div className="absolute" style={{ top: '70px', left: '186px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Node 4 - Bottom-right */}
                  <div className="absolute" style={{ top: '150px', left: '150px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Node 5 - Bottom-left */}
                  <div className="absolute" style={{ top: '150px', left: '42px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Node 6 - Left */}
                  <div className="absolute" style={{ top: '96px', left: '6px' }}>
                    <div className="w-5 h-5 bg-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
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