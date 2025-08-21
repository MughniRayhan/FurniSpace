import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function FeaturedProduct() {
    const productsCollection = await dbConnect("test_products");
  const products = await productsCollection.find({}).toArray();
 
  return (
     <section className="w-full bg-base-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Title + Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Collection
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked furniture pieces designed to bring comfort, style,
            and elegance to your living spaces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products?.slice(0, 6).map((product,index) => (
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
              </div>
              
            </div>
            
          ))}
          
        </div>
<Link href="/products"> <button className="btn btn-outline rounded text-[#6e0d25] hover:bg-[#6e0d25] font-bold px-8 py-6 hover:text-white mt-10">See More</button></Link>
      </div>
    </section>
  )
}
  