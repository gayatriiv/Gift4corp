import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'
import Accesories from './pages/Accesories'
import Lifestyle from './pages/Lifestyle'
import Stationery from './pages/stationery'
import Techgadgets from './pages/Techgadgets'
import Eventsouvenir from './pages/Eventsouvenir'
import Ecofriendly from './pages/Ecofriendly'
import Giftcombos from './pages/Giftcombos'
import Sportsfitness from './pages/Sportsfitness'
import Homedorm from './pages/Homedorm'
import Collegemerchandise from './pages/Collegemerchandise'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer />
      <Navbar />
      <Searchbar/>
        <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/collection'  element={<Collection/>} />
                 <Route path='/about' element={<About />} />
                 <Route path='/contact' element={<Contact />} />
                 <Route path='/CollegeMerchandise' element={<Collegemerchandise />} />
                 <Route path='/product/:productId' element={<Product/>} />
                  <Route path='/category/apparel' element={<Collection/>} />
                 <Route path='/category/accessories' element={<Accesories/>} />
                 <Route path='/category/lifestyle' element={<Lifestyle/>} />
                 <Route path='/category/stationery' element={<Stationery/>} />
                 <Route path='/category/accessories' element={<Accesories/>} />
                 <Route path='/category/tech-gadgets' element={<Techgadgets/>} />
                 <Route path='/category/event-souvenir' element={<Eventsouvenir/>} />
                 <Route path='/category/eco-friendly' element={<Ecofriendly/>} />
                 <Route path='/category/gift-combos' element={<Giftcombos/>} />
                 <Route path='/category/sports-fitness' element={<Sportsfitness/>} />
                 <Route path='/category/home-dorm' element={<Homedorm/>} />
                
                 <Route path='/cart' element={<Cart/>} />
                 <Route path='/Login' element={<Login/>} />
                 <Route path='/place-order' element={<PlaceOrder/>} />
                 <Route path='/Orders' element={<Orders/>} />
                 <Route  path='/verify' element={<Verify/>} />
        </Routes>
   <Footer />

    </div>
  )
}

export default App