'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Testimonial() {
  const [profileImage, setProfileImage] = useState('')

  useEffect(() => {
    // Using a specific Unsplash photo of a professional person
    // Using the Unsplash source API for a consistent professional headshot
    setProfileImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces')
  }, [])

  return (
    <section id="testimonial-section" className="relative py-24 overflow-hidden">
      {/* Background with layered gradients matching Landio */}
      <div className="absolute inset-0 bg-[#04070d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(213,219,230,0.7) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(213,219,230,0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/[0.05]">
            <svg className="w-3 h-3 mr-1.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-white text-[10px] uppercase tracking-[0.15em] font-medium">
              WE ANALYZE YOUR DATA
            </span>
          </span>
        </div>
        
        <div className="text-center">
          <p className="text-[26px] lg:text-[32px] text-gray-500 leading-relaxed font-light mb-8">
            We find what to{' '}
            <span className="italic text-white font-serif">automate</span>
            , who your users are & how<br className="hidden sm:block" />
            AI can optimize your{' '}
            <span className="italic text-white font-serif">workflow</span>
            . Best part is we also<br className="hidden sm:block" />
            build and launch{' '}
            <span className="italic text-white font-serif">real solutions</span>
            .
          </p>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-700">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Co-founder & AI Strategy Lead"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700" />
              )}
            </div>
            <p className="text-white text-sm">
              Co-founder & AI Strategy Lead
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}