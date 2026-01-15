import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Abhijeet',
    role: 'Corporate Marketing',
    rating: 5,
    comment:
      'Wide range of products across budgets and a smooth, professional process end to end.',
  },
  {
    id: 2,
    name: 'Ankita Maslekar',
    role: 'HR Lead',
    rating: 5,
    comment:
      'Reliable support with consistent quality. Every interaction feels thoughtful and on time.',
  },
  {
    id: 3,
    name: 'Deepa Kiran',
    role: 'Operations',
    rating: 5,
    comment:
      'Great for multi-city deliveries. The team handled coordination with ease.',
  },
  {
    id: 4,
    name: 'Roopa Jain',
    role: 'Events',
    rating: 5,
    comment:
      'Personalized merchandise delivered exactly to brief. Excellent craftsmanship.',
  },
]

const ProductRating = () => {
  const [index, setIndex] = useState(0)
  const visible = reviews.slice(index, index + 2)
  const canPrev = index > 0
  const canNext = index < reviews.length - 2

  return (
    <section className="py-16 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-caption text-white/60">Testimonials</p>
            <h2 className="text-h2 font-semibold mt-4">What Corporate Teams Say</h2>
            <p className="text-white/70 mt-4">
              Premium gifting experiences crafted for modern businesses.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
              disabled={!canPrev}
              className="h-10 w-10 border border-white/40 flex items-center justify-center disabled:opacity-40"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.min(prev + 1, reviews.length - 2))}
              disabled={!canNext}
              className="h-10 w-10 border border-white/40 flex items-center justify-center disabled:opacity-40"
              aria-label="Next testimonials"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((review) => (
            <div key={review.id} className="border border-white/10 p-6 bg-white/5">
              <div className="flex items-center gap-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={`${review.id}-star-${i}`} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">"{review.comment}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductRating
