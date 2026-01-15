import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className="border-t border-border-light">
      <div className="full-bleed relative h-[50vh] min-h-[320px]">
        <img src={assets.about_img} alt="About Gift4corp" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">About Gift4corp</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-6 text-text-secondary text-sm leading-7">
        <p>
          Gift4corp is a leading provider of branded merchandise, custom uniform solutions,
          corporate gifts, and premium hampers. We partner with businesses across India to
          deliver thoughtful products that strengthen brand presence and employee engagement.
        </p>
        <p>
          Our approach blends refined curation with reliable execution. Each gifting program
          is tailored to the occasion, aligned with your brand, and delivered with attention
          to detail.
        </p>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Our Mission</p>
          <p className="mt-3">
            To create memorable gifting experiences that elevate relationships, reinforce
            brand identity, and deliver measurable impact for our clients.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Quality Assurance',
              description: 'Every product is vetted to meet premium quality standards.',
            },
            {
              title: 'Effortless Execution',
              description: 'Streamlined ordering and responsive support for every program.',
            },
            {
              title: 'Client Partnership',
              description: 'We collaborate closely to deliver meaningful gifting outcomes.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-border-light bg-white p-6">
              <p className="text-sm font-semibold text-text-primary">{item.title}</p>
              <p className="text-sm text-text-secondary mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
