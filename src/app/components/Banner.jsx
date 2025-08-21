"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full bg-gray-100  ">
      <div className=" max-w-7xl mx-auto md:max-w-full  px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        
        {/* Left: Text */}
        <div className="text-center md:text-left order-2 md:order-1 md:px-12">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            Elevate Your Home with Modern Furniture
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Discover timeless furniture pieces designed to bring comfort, 
            elegance, and style to your living spaces. Perfect for every corner of your home.
          </p>
          <button className="mt-6 px-6 py-3 rounded-lg bg-[#6e0d25] text-white font-semibold hover:bg-[#49111c] transition">
            Shop Now
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 md:bg-gray-200 md:hover:bg-gray-300 transition-all duration-200 md:px-12 md:rounded-l-full">
          <Image
            src="/assets/banner.png" 
            alt="Modern Chair"
            width={700}
            height={400}
          
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
