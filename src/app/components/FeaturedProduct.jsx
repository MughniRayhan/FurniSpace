import Image from 'next/image'
import React from 'react'

export default async function FeaturedProduct() {
    const products = [
  {
    "title": "Modern Wooden Chair",
    "slug": "modern-wooden-chair",
    "price": 65,
    "category": "Chairs",
    "image": "/assets/img1.png",
    "description": "Ergonomic wooden chair with a minimalist design, perfect for dining or study rooms.",
    "tags": ["chair", "wood", "minimal"],
    "featured": true
  },
  {
    "title": "Classic Leather Sofa",
    "slug": "classic-leather-sofa",
    "price": 450,
    "category": "Sofas",
    "image": "/assets/img2.jpg",
    "description": "Comfortable 3-seater leather sofa with timeless design, available in dark brown.",
    "tags": ["sofa", "leather", "living-room"],
    "featured": true
  },
  {
    "title": "Glass Coffee Table",
    "slug": "glass-coffee-table",
    "price": 120,
    "category": "Tables",
    "image": "/assets/img3.jpg",
    "description": "Elegant glass-top coffee table with steel legs, suitable for modern interiors.",
    "tags": ["table", "coffee", "glass"],
    "featured": false
  },
  {
    "title": "Minimalist Study Desk",
    "slug": "minimalist-study-desk",
    "price": 180,
    "category": "Desks",
    "image": "/assets/img4.jpg",
    "description": "Spacious wooden study desk with cable management and storage drawers.",
    "tags": ["desk", "study", "workspace"],
    "featured": true
  },
  {
    "title": "King Size Bed Frame",
    "slug": "king-size-bed-frame",
    "price": 600,
    "category": "Beds",
    "image": "/assets/img5.jpg",
    "description": "Solid oak king size bed frame with a modern headboard design.",
    "tags": ["bed", "oak", "bedroom"],
    "featured": true
  },
  {
    "title": "Bookshelf with 5 Tiers",
    "slug": "bookshelf-5-tiers",
    "price": 95,
    "category": "Storage",
    "image": "/assets/img6.jpg",
    "description": "Tall bookshelf with 5 open shelves, perfect for books and decor items.",
    "tags": ["bookshelf", "storage", "wood"],
    "featured": false
  },
  {
    "title": "Dining Table Set (4 Chairs)",
    "slug": "dining-table-set-4-chairs",
    "price": 350,
    "category": "Dining",
    "image": "/assets/img7.jpg",
    "description": "Compact dining table with 4 matching chairs, made from solid wood.",
    "tags": ["dining", "table", "set"],
    "featured": false
  },
  {
    "title": "Recliner Armchair",
    "slug": "recliner-armchair",
    "price": 220,
    "category": "Chairs",
    "image": "/products/recliner.jpg",
    "description": "Comfortable recliner armchair with adjustable backrest and footrest.",
    "tags": ["chair", "recliner", "comfort"],
    "featured": true
  }
]
    
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
 <button className="btn btn-outline rounded text-[#6e0d25] hover:bg-[#6e0d25] font-bold px-8 py-6 hover:text-white mt-10">See More</button>
      </div>
    </section>
  )
}
  