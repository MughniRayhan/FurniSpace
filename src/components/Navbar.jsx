"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
   const {data: session, status} = useSession()
    const navMenu = <>
    <li>
        <Link href={'/'}>Home</Link>
    </li>
     <li>
        <Link href={'/products'}>Products</Link>
    </li>
    {
      status === 'authenticated' && (
        <li>
          <Link href={'/dashboard/add-product'}>Add Product</Link>
        </li>
      )  
    }
    </>
  return (
    <nav className="navbar  sm:px-10 px-4 bg-white border-b border-gray-200 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#49111c] font-semibold">
        {navMenu}
      </ul>
    </div>
    {/* logo */}
     <Link href={'/'} className='outline-0'>
     <Image
       src="/assets/logo.png"
       alt="Logo"
       width={107}
       height={86}
     />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-semibold hover:text-[#6e0d25]">
      {navMenu}
      
    </ul>
  </div>

  <div className="navbar-end space-x-4 ">
    { status === 'authenticated' ? (<>
    <button className="btn btn-outline rounded text-[#6e0d25] font-semibold hover:bg-[#6e0d25] hover:text-white"  
    onClick={()=>signOut()}>Logout
    </button>
    </>) : (
      <>
      <Link href={'/login'}>
    <button className="sm:btn sm:btn-outline rounded text-[#6e0d25] text-sm sm:text-base font-semibold hover:bg-[#6e0d25] hover:text-white">Login</button>
    </Link>
    
      </>
    )}
    
  </div>
</nav>
  )
}
