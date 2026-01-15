import React from 'react'
import { Clock, RefreshCcw, ShieldCheck } from 'lucide-react'

const policies = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'On-Time Delivery',
    description: 'Reliable timelines with proactive order tracking.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Quality Assured',
    description: 'Premium materials and consistent branding standards.',
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />,
    title: 'Easy Support',
    description: 'Responsive service before and after every delivery.',
  },
]

const OurPolicy = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-caption text-text-tertiary">Service Promise</p>
        <h2 className="text-h2 font-semibold mt-4">Built for Premium Experiences</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <div key={policy.title} className="border border-border-light bg-white p-6">
              <div className="h-10 w-10 border border-border-light flex items-center justify-center">
                {policy.icon}
              </div>
              <h3 className="text-base font-semibold mt-4">{policy.title}</h3>
              <p className="text-sm text-text-secondary mt-2">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
