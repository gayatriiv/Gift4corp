import React from 'react'
import { Link } from 'react-router-dom'

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      title: "Apparel Pride",
      subtitle: "Shop Now",
      link: "/collection",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
      bgPosition: "center"
    },
    {
      id: 2,
      title: "Campus Gear",
      subtitle: "Browse All",
      link: "/collegemerchandise",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
      bgPosition: "center"
    },
    {
      id: 3,
      title: "Lifestyle Picks",
      subtitle: "View More",
      link: "/lifestyle",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop",
      bgPosition: "center"
    }
  ]

  return (
    <div className='my-16 px-4 py-12 bg-section-bg rounded-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.link}
            className='group relative overflow-hidden rounded-3xl h-[400px] shadow-lg hover:shadow-2xl transition-all duration-500'
          >
            {/* Background Image */}
            <div 
              className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
              style={{ 
                backgroundImage: `url(${category.image})`,
                backgroundPosition: category.bgPosition
              }}
            >
              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
            </div>

            {/* Content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-6'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center transition-transform duration-500 group-hover:-translate-y-2'>
                {category.title}
              </h2>
              <div className='relative'>
                <p className='text-lg md:text-xl font-medium border-b-2 border-white pb-1 transition-all duration-500 group-hover:border-b-4 group-hover:tracking-wider'>
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className='absolute inset-0 border-4 border-transparent group-hover:border-white/50 rounded-3xl transition-all duration-500'></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryShowcase
