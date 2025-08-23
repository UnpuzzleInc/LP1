'use client';

import React from 'react';

interface Section3Props {
  className?: string;
}

const Section3: React.FC<Section3Props> = ({ className = '' }) => {
  return (
    <section 
      id="next-section"
      className={`relative w-full py-32 ${className}`}
      style={{ backgroundColor: '#04070d' }}
    >
      <div className="max-w-4xl mx-auto px-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Star Icon with Text */}
          <div className="flex items-center space-x-3">
            <svg 
              className="w-5 h-5 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-gray-400 text-sm font-medium font-inter tracking-widest uppercase">
              WE ANALYZE YOUR DATA
            </span>
          </div>

          {/* Quote Text */}
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              <span className="text-gray-500 font-inter font-light">
                We find what to{' '}
              </span>
              <span 
                className="text-gray-400 italic font-light"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                automate
              </span>
              <span className="text-gray-500 font-inter font-light">
                , who your users are & how AI can optimize your{' '}
              </span>
              <span 
                className="text-gray-400 italic font-light"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                workflow
              </span>
              <span className="text-gray-500 font-inter font-light">
                . Best part is we also build and launch{' '}
              </span>
              <span 
                className="text-gray-400 italic font-light"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                real solutions
              </span>
              <span className="text-gray-500 font-inter font-light">
                ."
              </span>
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3 pt-4">
            <div className="relative">
              <div 
                className="w-12 h-12 rounded-full overflow-hidden border border-gray-700"
              >
                {/* Using a professional headshot image from Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                  alt="Co-founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to avatar if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback avatar */}
                <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-700">
                  <svg 
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            <span className="text-gray-500 text-sm font-inter">
              Co-founder & AI Strategy Lead
            </span>
          </div>

        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(4, 7, 13, 0.5))'
        }}
      />
    </section>
  );
};

export default Section3;