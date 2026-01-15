import React from 'react'
import Hero from '../Components/Hero'
import OurPolicy from '../Components/OurPolicy'
import FeaturedSlider from '../Components/FeaturedSlider'
import WhyChooseUs from '../Components/WhyChooseUs'
import ProductRating from '../Components/ProductRating'
import CategoryShowcase from '../Components/CategoryShowcase'
import BrandMarquee from '../Components/BrandMarquee'
import ReleaseBanner from '../Components/ReleaseBanner'

const Home = () => {
  return (
    <div>
      <Hero />
      <ReleaseBanner />
      <CategoryShowcase />
      <FeaturedSlider />
      <BrandMarquee />
      <WhyChooseUs />
      <ProductRating />
      <OurPolicy />

    </div>
  )
}

export default Home
