'use client'

import { useState, useEffect } from 'react'

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  
  const tasks = [
    { icon: 'twitter', text: 'Social media post', status: 'check' },
    { icon: 'users', text: 'Employee Tracking', status: 'refresh' },
    { icon: 'clock', text: 'Payment reminder', status: 'check' },
    { icon: 'dollar', text: 'Cost Management', status: 'refresh' }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // If at the end and going forward, reverse direction
        if (prev === tasks.length - 1 && direction === 1) {
          setDirection(-1)
          return prev - 1
        }
        // If at the beginning and going backward, reverse direction
        if (prev === 0 && direction === -1) {
          setDirection(1)
          return prev + 1
        }
        // Otherwise continue in current direction
        return prev + direction
      })
    }, 3000) // Cycle every 3 seconds
    
    return () => clearInterval(interval)
  }, [direction])
  return (
    <section id="services-section" className="relative py-24 overflow-hidden">
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
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/[0.05]">
              <svg className="w-3 h-3 mr-1.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              <span className="text-white text-[10px] uppercase tracking-[0.15em] font-medium">
                SERVICES
              </span>
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            <span className="text-white">Smarter Services, </span>
            <span 
              className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(229, 231, 235) 0%, rgb(156, 163, 175) 50%, rgb(75, 85, 99) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built with AI
            </span>
          </h2>
          
          <p className="text-white text-lg">
            Transform your business with intelligent automation and insights
          </p>
        </div>
        
        {/* Services Grid - Two cards with 1:2 ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 - Takes 1 column */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20 group lg:col-span-1">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="mb-6 h-48 flex items-center justify-center">
                {/* Cycling carousel animation */}
                <div className="relative w-full h-full overflow-hidden">
                  <div className="relative h-full flex flex-col justify-center">
                    {tasks.map((task, index) => {
                      const offset = index - activeIndex
                      const isActive = index === activeIndex
                      const isVisible = Math.abs(offset) <= 1 // Only show current, previous, and next
                      
                      // Simple linear position
                      const translateY = offset * 60 // 60px spacing between items
                      
                      if (!isVisible) return null // Don't render invisible items
                      
                      return (
                        <div
                          key={index}
                          className={`absolute left-0 right-0 transition-all duration-[2000ms] ease-out ${
                            isActive ? 'z-10' : 'z-0'
                          }`}
                          style={{
                            transform: `translateY(${translateY}px) scale(${isActive ? 1.05 : 0.95})`,
                            opacity: isActive ? 1 : 0.9,
                            transformOrigin: 'center center',
                            filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
                          }}
                        >
                          <div className={`flex items-center justify-between p-3 rounded-lg border mx-4 ${
                            isActive 
                              ? 'border-gray-700 bg-gray-900/50 shadow-lg' 
                              : 'border-gray-800/50 bg-transparent'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                {task.icon === 'twitter' && (
                                  <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                  </svg>
                                )}
                                {task.icon === 'users' && (
                                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                )}
                                {task.icon === 'clock' && (
                                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                                {task.icon === 'dollar' && (
                                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                              </div>
                              <span className={`text-sm font-medium ${
                                isActive ? 'text-white' : 'text-gray-600'
                              }`}>
                                {task.text}
                              </span>
                            </div>
                            <div className={`${isActive ? 'text-gray-400' : 'text-gray-700'}`}>
                              {task.status === 'check' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              
              <h3 className="text-white text-xl font-medium mb-3">
                Automate repetitive tasks
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We help you streamline internal operations by automating manual workflows
              </p>
            </div>
          </div>
          
          {/* Card 2 - Takes 2 columns (double width) */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-400/50 to-gray-600/20 group lg:col-span-2">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="mb-6 h-48 flex items-center justify-center">
                {/* Workflow visualization with floating icons */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central circle with gradient border and two-layer glow */}
                  <div className="absolute">
                    {/* Outer subtle glow effect - very spread out with lower opacity */}
                    <div 
                      className="absolute -inset-40 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(147, 151, 225, 0.08) 0%, rgba(147, 151, 225, 0.04) 40%, transparent 70%)',
                        filter: 'blur(80px)',
                      }}
                    />
                    
                    {/* Outer prominent glow effect - bottom half of circle */}
                    <div 
                      className="absolute"
                      style={{
                        left: '-24px',
                        right: '-24px',
                        bottom: '-12px',
                        top: '50%',
                        background: 'radial-gradient(ellipse at center top, rgba(147, 151, 225, 0.3) 0%, rgba(147, 151, 225, 0.15) 40%, transparent 80%)',
                        filter: 'blur(15px)',
                        borderRadius: '0 0 50% 50%',
                      }}
                    />
                    
                    {/* Circle with gradient border - fading from top to bottom */}
                    <div className="relative w-32 h-32">
                      {/* Border gradient background */}
                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.05) 40%, transparent 50%, transparent 100%)',
                        }}
                      />
                      {/* Inner circle */}
                      <div className="absolute inset-[1.5px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
                        {/* Center icon */}
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon cards - Left side (4 icons in diamond pattern) */}
                  {/* Top-left: Email - Group A */}
                  <div className="absolute left-8 top-8" style={{ animation: 'scaleGroupA 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Mid-left top: Menu - Group B */}
                  <div className="absolute left-52 top-12" style={{ animation: 'scaleGroupB 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom-left: GitHub - Group B */}
                  <div className="absolute left-2 bottom-3" style={{ animation: 'scaleGroupB 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Mid-left bottom: Document - Group A */}
                  <div className="absolute left-52 bottom-4" style={{ animation: 'scaleGroupA 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Icon cards - Right side (3 icons) - Spread out more */}
                  {/* Top-right: Settings - Group A - moved 20px left, 5px up */}
                  <div className="absolute" style={{ right: '100px', top: '-16px', animation: 'scaleGroupA 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Middle-right: Notion - Group B */}
                  <div className="absolute right-4 top-20" style={{ animation: 'scaleGroupB 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <span className="text-gray-400 text-xl font-bold">N</span>
                    </div>
                  </div>
                  
                  {/* Bottom-right: X/Twitter - Group A - moved way more left to avoid overlap */}
                  <div className="absolute" style={{ right: '140px', bottom: '22px', animation: 'scaleGroupA 4s infinite' }}>
                    <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] border border-t-gray-400/50 border-r-gray-600/20 border-b-transparent border-l-gray-600/20 flex items-center justify-center">
                      <svg className="w-7 h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <style jsx>{`
                    @keyframes scaleGroupA {
                      0%, 20% { transform: scale(1); }
                      30%, 70% { transform: scale(0.7); }
                      80%, 100% { transform: scale(1); }
                    }
                    
                    @keyframes scaleGroupB {
                      0%, 20% { transform: scale(0.7); }
                      30%, 70% { transform: scale(1); }
                      80%, 100% { transform: scale(0.7); }
                    }
                  `}</style>
                </div>
              </div>
              
              <h3 className="text-white text-xl font-medium mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Boost efficiency across teams with smart automation<br />
                Build intelligent workflows that automate multi-step processes across tools and platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}