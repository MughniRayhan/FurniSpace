"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/components/SocialLogin';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function RegisterForm() {
  const router = useRouter();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser({name,email,password});
    router.push('/');
  };

  return (
    <form  onSubmit={handleSubmit} className="card-body  md:w-96 w-full  mx-auto flex justify-center items-center">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password'/>
          <button type='submit' className="btn bg-[#6e0d25] text-white mt-4 md:w-80 w-50">Sign Up</button>
          <p className="font-semibold">Already have an account? <Link href={'/login'} className="text-blue-500 underline">Log In</Link></p>
          <p className='text-center mt-4'>Or Sign Up with</p>
          <SocialLogin/>
        </fieldset>
      </form>
  )
}
