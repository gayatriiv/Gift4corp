import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title'
import Productitem from '../Components/Productitem'
import ComingSoonComponent from '../Components/ComingSoonComponent'

const Giftcombos = () => {
  const { products } = useContext(ShopContext);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(product => product.category === 'Gift Sets & Combos');
      setCategoryProducts(filtered);
    }
  }, [products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  const sortProducts = () => {
    let productsCopy = categoryProducts.slice();

    switch (sortType) {
      case 'low-high':
        setCategoryProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setCategoryProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        if (products.length > 0) {
          const filtered = products.filter(product => product.category === 'Gift Sets & Combos');
          setCategoryProducts(filtered);
        }
        break;
    }
  };

  if (categoryProducts.length === 0) {
    return <ComingSoonComponent />;
  }

  return (
    <div className='border-t pt-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'GIFT SETS &'} text2={'COMBOS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Curated gift sets and combo packages for every occasion.
        </p>
      </div>

      <div className='flex justify-between items-center mb-6 px-4'>
        <p className='text-base sm:text-xl font-medium'>
          {categoryProducts.length} Products
        </p>
        <select 
          onChange={(e) => setSortType(e.target.value)} 
          className='border-2 border-gray-300 text-sm px-4 py-2 rounded'
        >
          <option value="relavent">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-4'>
        {categoryProducts.map((item, index) => (
          <Productitem 
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price} 
            Mrpprice={item.Mrpprice}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default Giftcombos