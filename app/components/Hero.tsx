'use client'

import Badge from './ui/Badge'
import Button from './ui/Button'
import SocialLinks from './ui/SocialLinks'

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('testimonial-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/hero-video-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay - Pure black to match inspiration */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icon with contained glow effect */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Contained glow effect - more subtle and closer to icon */}
            <div className="absolute inset-0 bg-blue-400/60 rounded-full blur-lg scale-110"></div>
            <div className="absolute inset-0 bg-cyan-300/40 rounded-full blur-md scale-105"></div>
            {/* Icon container */}
            <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
              {/* AI/Bot icon */}
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v3a1 1 0 0 1-1 1h-4v1a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-1H4a1 1 0 0 1-1-1v-3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM9 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge showAnimation={true}>NEW GEN AI AUTOMATION PARTNER</Badge>
        </div>

        {/* Main Headline - Two Lines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-300 mb-4 leading-tight tracking-wide">
          <div className="block">Automate Smarter. Grow</div>
          <div className="block">Faster. <span className="italic font-light">With AI.</span></div>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          AI Automation for Modern Businesses Made Simple
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Button variant="gradient-border" className="text-lg px-12 py-4">
            <span className="flex items-center gap-2 whitespace-nowrap">
              Book A Free Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToNextSection}
          className="text-gray-400 hover:text-white transition-colors duration-300 animate-float"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero