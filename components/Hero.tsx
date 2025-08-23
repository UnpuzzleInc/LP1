'use client';

import React, { useCallback, useEffect } from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const scrollToNextSection = useCallback(() => {
    console.log('Button clicked! Starting scroll function...');
    
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const nextSection = document.getElementById('next-section');
      console.log('Attempting to scroll. Section found:', !!nextSection);
      
      if (nextSection) {
        const yOffset = -64; // Account for fixed header height
        const y = nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        console.log('Scrolling to position:', y);
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Fallback: scroll down by viewport height
        console.log('Section not found, scrolling by viewport height');
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }, 0);
  }, []);

  // Solution 2: Add event listener after mount
  useEffect(() => {
    const handleScrollClick = () => {
      console.log('Event listener triggered!');
      const section = document.getElementById('next-section');
      if (section) {
        console.log('Section found via event listener, scrolling...');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log('Section not found, using fallback scroll');
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const button = document.querySelector('[aria-label="Scroll to next section"]');
      console.log('Button element found:', !!button);
      
      if (button) {
        button.addEventListener('click', handleScrollClick);
        console.log('Event listener attached to button');
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const button = document.querySelector('[aria-label="Scroll to next section"]');
      if (button) {
        button.removeEventListener('click', handleScrollClick);
      }
    };
  }, []);

  return (
    <section 
      className={`relative w-full h-screen overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#04070d'
      }}
    >
      {/* Video Background - Full coverage without padding issues */}
      <video 
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          minWidth: '100%',
          minHeight: '100%',
          opacity: 0.6,
          filter: 'brightness(0.8)'
        }}
          onError={(e) => console.error('Video failed to load:', e)}
          onLoadedData={() => console.log('Video loaded successfully')}
          onLoadedMetadata={(e) => console.log('Video metadata loaded:', e.currentTarget.videoWidth, 'x', e.currentTarget.videoHeight)}
        >
        <source src="/assets/hero-video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to ensure dark background */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      
      {/* Bottom radial gradient */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
          filter: 'blur(2px)'
        }}
      />

      {/* Main Content - Adjusted for fixed header */}
      <div className="relative z-10 max-w-4xl mx-auto px-10 h-full flex flex-col justify-center pt-16">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Logo/Icon */}
          <div className="relative mb-4">
            {/* Blue glow effect */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.4) 30%, rgba(59, 130, 246, 0.2) 60%, transparent 100%)',
                width: '120px',
                height: '120px',
                left: '-20px',
                top: '-20px',
                filter: 'blur(12px)'
              }}
            />
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                width: '140px',
                height: '140px',
                left: '-30px',
                top: '-30px',
                filter: 'blur(20px)',
                animationDelay: '0.5s'
              }}
            />
            <div 
              className="relative rounded-full bg-black bg-opacity-50 backdrop-blur-sm border border-gray-700 p-5 shadow-2xl"
              style={{ width: '80px', height: '80px' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-white"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Subtext with Animated Ring */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 border border-green-400 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-gray-300 text-sm font-medium font-inter tracking-widest uppercase text-opacity-80">
              NEW GEN AI AUTOMATION PARTNER
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-6 mb-8">
            <h1 className="text-white font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
              <span 
                className="block font-inter"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
              >
                Automate Smarter.
              </span>
              <span 
                className="block font-inter"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
              >
                Grow Faster.{' '}
                <span 
                  className="italic font-light text-gray-300"
                  style={{ 
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(2.2rem, 6vw, 4rem)'
                  }}
                >
                  With AI
                </span>
              </span>
            </h1>
            
            {/* Subheadline */}
            <p 
              className="text-gray-400 max-w-lg mx-auto leading-relaxed font-inter font-light"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}
            >
              AI Automation for Modern Businesses Made Simple
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 mb-12">
            <button 
              className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-inter"
            >
              <span>Book A Free Call</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Floating Down Arrow Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 9999 }}>
          <button 
            className="text-gray-400 hover:text-white transition-all duration-300 animate-bounce hover:animate-none p-3 rounded-full hover:bg-white hover:bg-opacity-10"
            onClick={scrollToNextSection}
            type="button"
            aria-label="Scroll to next section"
            style={{ 
              position: 'relative',
              zIndex: 9999,
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;