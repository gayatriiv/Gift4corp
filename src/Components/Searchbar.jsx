import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

    const {search,setSearch,showSearch,setShowSearch,products,navigate}=useContext(ShopContext);
     const [visible,setVisible]=useState(false);
     const [results,setResults]=useState([]);
    const location=useLocation();



     useEffect(()=>{
       const path = location.pathname.toLowerCase();
       // Enable search on home, collection, and college merchandise pages
       if(path === '/' || path.includes('collection') || path.includes('college')){
          setVisible(true);
       } else {
        setVisible(false);
       }
     },[location])

     useEffect(()=>{
      const query = search.trim().toLowerCase();
      if(query.length === 0){
        setResults([]);
        return;
      }
      const filtered = products
        .filter(item => item.name?.toLowerCase().includes(query))
        .slice(0, 8);
      setResults(filtered);
     },[search, products])

     const handleSelect = (product)=>{
      navigate(`/product/${product._id}`);
      setShowSearch(false);
      setSearch('');
     }



  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center relative'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2  '>
             <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text"  placeholder='Search products'/>
               <img className='w-4 ' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer ' src={assets.cross_icon} alt="" />

        {search.trim() && (
          <div className='absolute left-1/2 -translate-x-1/2 w-[90%] sm:w-1/2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-96 overflow-y-auto z-20 mt-2 text-left'>
            {results.length > 0 ? (
              results.map(product => (
                <button
                  key={product._id}
                  onClick={() => handleSelect(product)}
                  className='w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 border-b last:border-b-0 text-left'
                >
                  {product.image?.[0] && (
                    <img src={product.image[0]} alt={product.name} className='w-12 h-12 object-cover rounded-md border' />
                  )}
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900 line-clamp-1'>{product.name}</p>
                    <p className='text-xs text-gray-600'>₹{product.price}</p>
                  </div>
                  <span className='text-xs text-gray-500'>View</span>
                </button>
              ))
            ) : (
              <p className='px-4 py-3 text-sm text-gray-500'>No products found</p>
            )}
          </div>
        )}
    </div>
  ):null
}

export default Searchbar