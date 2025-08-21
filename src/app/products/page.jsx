import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function page() {
    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
      const products = await productsCollection.find({}).toArray();
  return (
     <div className="w-full bg-base-100 py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Title + Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
           ALL PRODUCTS
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked furniture pieces designed to bring comfort, style,
            and elegance to your living spaces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products?.map((product,index) => (
            <div key={index} className="card bg-gray-100 shadow-xl ">
              <figure className="">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                 
                />
              </figure>
              <div className="card-body  ">
                <h3 className="card-title font-bold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className='text-sm text-[#6e0d25] font-semibold'>Price: {product.price}</p>
              <Link href="/"> 
              <button className="btn btn-outline rounded text-[#6e0d25] hover:bg-[#6e0d25] font-bold  hover:text-white">
                View Details
             </button></Link>
              </div>
            </div>
            
          ))}
          
        </div>

      </div>
    </div>
  )
}
