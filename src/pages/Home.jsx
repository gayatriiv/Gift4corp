import React from 'react'
import Hero from '../Components/Hero'
import LastestCollection from '../Components/LastestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletteBox from '../Components/NewsletteBox'
import FeaturedSlider from '../Components/FeaturedSlider'
import WhyChooseUs from '../Components/WhyChooseUs'
import Categoryslider from '../Components/Categoryslider'
import ProductRating from '../Components/ProductRating'
import CategoryShowcase from '../Components/CategoryShowcase'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CategoryShowcase/>
      <FeaturedSlider/>
      <Categoryslider/>
      {/* <LastestCollection/> */}
      <ProductRating/>
      {/* <BestSeller/> */}
      <WhyChooseUs/>
      <OurPolicy/>
      {/* <NewsletteBox/> */}

    </div>
  )
}

export default Home