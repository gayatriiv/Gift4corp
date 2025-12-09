import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import Productitem from '../Components/Productitem';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Collegemerchandise = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [searchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [merchandiseList, setMerchandiseList] = useState([]);
  const [selectedMerchandise, setSelectedMerchandise] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Fetch college merchandise list
  const fetchMerchandiseList = async () => {
    try {
      const response = await axios.get(backendURL + '/api/college-merchandise/list');
      if (response.data.success) {
        // Filter out inactive items and those with empty/None names
        const filteredList = response.data.merchandises.filter(item => 
          item.isActive && 
          item.name && 
          item.name.trim() !== '' && 
          item.name.toLowerCase() !== 'none'
        );
        setMerchandiseList(filteredList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Check URL parameter on mount and update selected merchandise
  useEffect(() => {
    const merchandiseParam = searchParams.get('merchandise');
    if (merchandiseParam) {
      setSelectedMerchandise([merchandiseParam]);
    }
  }, [searchParams]);

  // Toggle merchandise filter
  const toggleMerchandise = (e) => {
    const value = e.target.value;
    if (selectedMerchandise.includes(value)) {
      setSelectedMerchandise(prev => prev.filter(item => item !== value));
    } else {
      setSelectedMerchandise(prev => [...prev, value]);
    }
  };

  // Toggle color filter
  const toggleColor = (e) => {
    const value = e.target.value;
    if (selectedColors.includes(value)) {
      setSelectedColors(prev => prev.filter(item => item !== value));
    } else {
      setSelectedColors(prev => [...prev, value]);
    }
  };

  // Extract colors from product names
  const extractColors = () => {
    const colorMap = {
      'Black': '#000000',
      'White': '#FFFFFF',
      'Red': '#FF0000',
      'Blue': '#0000FF',
      'Green': '#008000',
      'Yellow': '#FFFF00',
      'Orange': '#FFA500',
      'Purple': '#800080',
      'Pink': '#FFC0CB',
      'Grey': '#808080',
      'Gray': '#808080',
      'Brown': '#A52A2A',
      'Navy': '#000080',
      'Maroon': '#800000',
      'Beige': '#F5F5DC',
      'Cream': '#FFFDD0',
      'Gold': '#FFD700',
      'Silver': '#C0C0C0',
      'Olive': '#808000',
      'Teal': '#008080',
      'Cyan': '#00FFFF',
      'Magenta': '#FF00FF',
      'Violet': '#EE82EE',
      'Indigo': '#4B0082'
    };

    const colorsFound = [];

    Object.keys(colorMap).forEach(colorName => {
      const hasColor = products.some(product => {
        if (product.collegeMerchandise && 
            product.collegeMerchandise.toLowerCase() !== 'none' && 
            product.collegeMerchandise.trim() !== '') {
          return product.name.toLowerCase().includes(colorName.toLowerCase());
        }
        return false;
      });

      if (hasColor) {
        colorsFound.push({ name: colorName, hex: colorMap[colorName] });
      }
    });

    setAvailableColors(colorsFound);
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

    // Filter by selected colors
    if (selectedColors.length > 0) {
      productsCopy = productsCopy.filter(item => {
        const productName = item.name.toLowerCase();
        return selectedColors.some(color => 
          productName.includes(color.toLowerCase())
        );
      });
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

  // Extract colors when products change
  useEffect(() => {
    if (products.length > 0) {
      extractColors();
    }
  }, [products]);

  // Apply filter when dependencies change
  useEffect(() => {
    applyFilter();
  }, [selectedMerchandise, selectedColors, search, showSearch, products]);

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

        {/* Color Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>COLORS</p>
          <div className='grid grid-cols-4 gap-3 pr-5'>
            {availableColors.length > 0 ? (
              availableColors.map((colorObj, index) => (
                <div key={index} className='flex flex-col items-center gap-1'>
                  <button
                    onClick={() => {
                      const event = { target: { value: colorObj.name } };
                      toggleColor(event);
                    }}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                      selectedColors.includes(colorObj.name) 
                        ? 'border-black ring-2 ring-offset-2 ring-black' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ 
                      backgroundColor: colorObj.hex,
                      boxShadow: colorObj.name === 'White' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
                    }}
                    title={colorObj.name}
                  >
                    {selectedColors.includes(colorObj.name) && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mx-auto" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke={colorObj.name === 'White' || colorObj.name === 'Yellow' || colorObj.name === 'Cream' || colorObj.name === 'Beige' ? 'black' : 'white'}
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className='text-[10px] text-center text-gray-600 leading-tight'>
                    {colorObj.name}
                  </span>
                </div>
              ))
            ) : (
              <p className='text-gray-400 italic col-span-4 text-sm'>No colors found</p>
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
                quantity={item.quantity} 
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