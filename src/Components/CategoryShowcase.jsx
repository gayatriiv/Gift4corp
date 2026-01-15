import React from 'react'
import { Link } from 'react-router-dom'

// Category images - using high-quality stock images
const CATEGORY_DATA = [
  {
    id: 'apparel',
    title: 'Apparel Pride',
    cta: 'Shop Now',
    link: '/collection?category=Apparels',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop',
  },
  {
    id: 'campus',
    title: 'Campus Gear',
    cta: 'Browse All',
    link: '/collection?category=College%20Merchandise',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop',
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Picks',
    cta: 'View More',
    link: '/collection',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop',
  },
]

const CategoryShowcase = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-caption text-text-tertiary uppercase tracking-wider">Categories</p>
            <h2 className="text-h2 font-semibold mt-3">Explore the Edit</h2>
          </div>
          <Link
            to="/collection"
            className="text-button text-text-secondary hover:text-text-primary transition"
          >
            View All
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORY_DATA.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white italic drop-shadow-lg">
                  {category.title}
                </h3>
                <span className="mt-3 text-white text-sm font-medium border-b-2 border-white pb-1 transition-all group-hover:pb-2">
                  {category.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase
