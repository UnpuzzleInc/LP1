'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  quote: string
  emphasis: string[]
  name: string
  title: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Their AI automation reduced our manual data processing by 85%, giving our team back 20 hours every week to focus on strategic initiatives.",
    emphasis: ["AI automation", "85%", "20 hours"],
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 2,
    quote: "The workflow optimization transformed how we handle client projects. What used to take days now happens in hours with their intelligent systems.",
    emphasis: ["workflow optimization", "days", "hours"],
    name: "Marcus Thompson",
    title: "Product Director",
    company: "Innovate Labs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 3,
    quote: "They didn't just implement AI, they reimagined our entire process. The real-time analytics dashboard alone saves us $50K monthly.",
    emphasis: ["implement AI", "reimagined", "$50K monthly"],
    name: "Elena Rodriguez",
    title: "CEO & Founder",
    company: "DataScale Pro",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
  }
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Function to highlight emphasis words
  const renderQuote = (quote: string, emphasis: string[]) => {
    let result = quote
    emphasis.forEach(word => {
      result = result.replace(
        word,
        `<span class="italic text-white font-serif">${word}</span>`
      )
    })
    return { __html: result }
  }

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.05] hover:bg-white/[0.03] transition-colors duration-300">
        <blockquote className="space-y-6">
          <p 
            className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed"
            dangerouslySetInnerHTML={renderQuote(testimonial.quote, testimonial.emphasis)}
          />
          
          <footer className="flex items-center gap-4 pt-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-white font-medium">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default function TestimonialGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with layered gradients matching Landio */}
      <div className="absolute inset-0 bg-[#04070d]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <span className="text-gray-400 text-xs uppercase tracking-[0.2em] flex items-center">
            <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            TESTIMONIALS
          </span>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}