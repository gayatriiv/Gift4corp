import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import Productitem from '../Components/Productitem';
import axios from 'axios';

const Collegemerchandise = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [merchandiseList, setMerchandiseList] = useState([]);
  const [selectedMerchandise, setSelectedMerchandise] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Fetch college merchandise list
  const fetchMerchandiseList = async () => {
    try {
      const response = await axios.get(backendURL + '/api/college-merchandise/list');
      if (response.data.success) {
        setMerchandiseList(response.data.merchandises.filter(item => item.isActive));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle merchandise filter
  const toggleMerchandise = (e) => {
    const value = e.target.value;
    if (selectedMerchandise.includes(value)) {
      setSelectedMerchandise(prev => prev.filter(item => item !== value));
    } else {
      setSelectedMerchandise(prev => [...prev, value]);
    }
  };

  // Apply filters
  const applyFilter = () => {
    let productsCopy = products.slice();

    // First, filter out products with collegeMerchandise as "none" or empty
    productsCopy = productsCopy.filter(item => 
      item.collegeMerchandise && 
      item.collegeMerchandise.toLowerCase() !== 'none' && 
      item.collegeMerchandise.trim() !== ''
    );

    // Filter by search
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by selected merchandise
    if (selectedMerchandise.length > 0) {
      productsCopy = productsCopy.filter(item => 
        selectedMerchandise.includes(item.collegeMerchandise)
      );
    }

    setFilteredProducts(productsCopy);
  };

  // Sort products
  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // Fetch merchandise list on mount
  useEffect(() => {
    fetchMerchandiseList();
  }, []);

  // Apply filter when dependencies change
  useEffect(() => {
    applyFilter();
  }, [selectedMerchandise, search, showSearch, products]);

  // Sort when sort type changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Section */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* College Merchandise Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>COLLEGE MERCHANDISE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 max-h-[400px] overflow-y-auto'>
            {merchandiseList.length > 0 ? (
              merchandiseList.map((merchandise, index) => (
                <p className='flex gap-2' key={index}>
                  <input 
                    type="checkbox" 
                    className='w-3' 
                    value={merchandise.name} 
                    onChange={toggleMerchandise} 
                    checked={selectedMerchandise.includes(merchandise.name)}
                  />
                  {merchandise.name}
                </p>
              ))
            ) : (
              <p className='text-gray-400 italic'>No merchandise available</p>
            )}
          </div>
        </div>
      </div>

      {/* Right side - Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'COLLEGE'} text2={'MERCHANDISE'} />
          
          {/* Product sort */}
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            className='border-2 border-gray-300 text-sm px-2 rounded'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display product count */}
        <p className='text-sm text-gray-600 mb-4'>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Productitem 
                key={index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                Mrpprice={item.Mrpprice} 
                image={item.image} 
              />
            ))
          ) : (
            <div className='col-span-full text-center py-16'>
              <p className='text-gray-400 text-lg'>No products found</p>
              <p className='text-gray-400 text-sm mt-2'>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collegemerchandise