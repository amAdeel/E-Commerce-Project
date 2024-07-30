"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";  

const Navbar = () => {  
  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearchChange = (e:any) => {  
    setSearchTerm(e.target.value);  
  };  

  const handleSearchSubmit = (e:any) => {  
    e.preventDefault();  
    console.log('Searching for:', searchTerm);  
  };  

  return (  
    <nav className="flex items-center p-4 bg-[#FAFAFA]">  
      {/* Left section */}  
      <div className="text-[#2A2A2A] flex gap-3 items-center">  
        <Link href="#"><h1 className='text-xl font-bold text-black'>ADrock Store</h1></Link>
        <Link href="/allitems">All</Link>  
        <Link href="/shirts">Shirts</Link>  
        <Link href="/caps">Caps</Link>
        <Link href="/watches">Watches</Link>  
  
      </div>  

      {/* Centered search bar */}  
      <div className="flex-grow flex justify-center">  
        <form onSubmit={handleSearchSubmit} className="flex items-center">  
          <input  
            type="text"  
            value={searchTerm}  
            onChange={handleSearchChange}  
            placeholder="Search..."  
            className="p-2 rounded-l-md border border-gray-300"  
          />  
          <button  
            type="submit"  
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 font-medium "  
          >  
            Search  
          </button>  
        </form>  
      </div>  
    
      {/* Right section with icon */}  
      <div className='flex items-center'>  
        {/* Replace this with your actual icon */}  
        <span className="material-icons"><AiOutlineShoppingCart /></span>   
      </div>  
    </nav>  
  );  
};  

export default Navbar;