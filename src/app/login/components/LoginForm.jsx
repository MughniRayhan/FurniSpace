"use client";

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import React from 'react'
import SocialLogin from "./SocialLogin";
import Link from "next/link";



export default function LoginForm() {
    const router = useRouter();

const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   try {
    const res = await signIn("credentials", { 
        email,
        password,
        callbackUrl: "/products",
        redirect: false
    });

    if(res.ok){
      router.push("/products");
      form.reset()
    }
    else{
        alert("authentication failed")
    }
   } catch (error) {
    console.log(error);
    alert("authentication failed")
   }
  };
    
  return (
    <form onSubmit={handleSubmit}  className="card-body  md:w-96 w-full  mx-auto flex justify-center items-center">
        <fieldset className="fieldset ">
          <label className="label">Email</label>
          <input type="email" className="input " placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input " placeholder="Password" name='password'/>
          <button type='submit' className="btn bg-[#6e0d25] text-white mt-4 md:w-80 w-50">Log In</button>
          <p className="font-semibold">Don't have an account? <Link href={'/register'} className="text-blue-500 underline">Sign Up</Link></p>
          <p className='text-center mt-4'>Or Sign In with</p>
          <SocialLogin/>
        </fieldset>
      </form>
  )
}
