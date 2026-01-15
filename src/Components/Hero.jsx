import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const slides = [
    {
      image: assets.hero_img,
      eyebrow: 'Premium Corporate Gifting',
      title: 'Gift With Intent',
      description: 'Curated merchandise and luxury gifting experiences that elevate brand presence.',
      cta: 'Explore Collection',
    },
    {
      image: assets.hero_img2,
      eyebrow: 'Corporate Essentials',
      title: 'Modern Work Kits',
      description: 'Refined gift sets designed for teams, events, and executive moments.',
      cta: 'Shop Essentials',
    },
    {
      image: assets.hero_img3,
      eyebrow: 'Limited Drop',
      title: 'Signature Editions',
      description: 'Premium materials, minimalist detailing, and memorable unboxing.',
      cta: 'Discover Now',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const activeSlide = slides[currentIndex]

  return (
    <section className="full-bleed relative overflow-hidden bg-brand-black text-brand-white">
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover scale-105"
            />
          </div>
        ))}
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content - Centered Modern Layout */}
      <div className="relative min-h-[85vh] lg:min-h-[calc(100vh-108px)] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
          {/* Eyebrow Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {activeSlide.eyebrow}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-hero-display drop-shadow-2xl">
            {activeSlide.title}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed">
            {activeSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/collection"
              className="group bg-white text-black px-8 py-4 text-button rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {activeSlide.cta}
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-button text-white rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Premium Quality
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom Branding
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fast Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Modern pill style */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={`hero-dot-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
