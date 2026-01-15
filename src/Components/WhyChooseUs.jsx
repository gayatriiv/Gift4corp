import React from 'react'
import { Award, BadgeCheck, Package, Sparkles, Truck, Users } from 'lucide-react'

const items = [
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Premium Craft',
    desc: 'Curated products with refined finishes and materials.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Dedicated Team',
    desc: 'Specialists in corporate gifting and bulk fulfillment.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Custom Branding',
    desc: 'Personalized printing, packaging, and messaging.',
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: 'End-to-End Service',
    desc: 'From sourcing to delivery, managed with precision.',
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: 'Pan-India Delivery',
    desc: 'Reliable logistics with dedicated support.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Trusted Experience',
    desc: 'Over 7 years serving premium corporate clients.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-caption text-text-tertiary">Why Gift4corp</p>
        <h2 className="text-h2 font-semibold mt-4">Designed for Corporate Gifting</h2>
        <p className="text-text-secondary mt-4 max-w-2xl">
          Premium merchandising made simple with attentive service and a curated catalog.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="border border-border-light bg-white p-6 hover-lift"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-text-primary">
                <span className="h-10 w-10 border border-border-light flex items-center justify-center">
                  {item.icon}
                </span>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-text-secondary mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
