import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function HeroSection() {
  const products = [
    {
      name: 'Acme Circles T-Shirt',
      price: '$20.00 USD',
      image: '/img1.1.png', // Replace with your image path
    },
    {
      name: 'Acme Drawstring Bag',
      price: '$12.00 USD',
      image: '/t-shirt-1.avif', // Replace with your image path
    },
    {
      name: 'Acme Cup',
      price: '$15.00 USD',
      image: '/t-shirt-1.avif', // Replace with your image path
    },
    {
      name:'t-Shirt',
      price:'$10.00 USD',
      image:'/shirt-1.jpg'
    },
    {
      name:'t-Shirt',
      price:'$10.00 USD',
      image:'/shirt-1.jpg'
    },
    {
      name:'t-Shirt',
      price:'$10.00 USD',
      image:'/shirt-1.jpg'
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-lg border-2 shadow-md p-6">
            <Image src={product.image} alt={product.name} width={48} height={48} className="w-full h-40 object-contain" />
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <span className='flex justify-between items-center mt-2'>
            <p className="text-gray-600 flex ">{product.price}</p>
            <Link href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </Link>
        </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;