'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import img from "../../../../public/image/yo-removebg-preview.png"



export default function page() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kks8ggw', 'template_ae2i8ra', form.current, 'TKnsQBbFgCumUXk7G')
      .then((result) => {
          console.log(result.text);
          console.log("mensaje enviado");
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='flex flex-col min-h-screen gap-24'>

      <h1  className='animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest m-4'> CONTACTAME <span className='text-red-600'>.</span></h1>
    <div className='flex flex-col lg:flex lg:flex-row justify-around items-center '>
<div >
 
</div>
<div>

    <form className='flex flex-col  relative border-2 border-solid border-red-600 rounded-lg p-4' ref={form} onSubmit={sendEmail}>
      <label className='font-bold text-gray-400' >NOMBRE</label>
      <input className='w-[250px] font-bold text-black lg:w-[600px] mb-10' type="text" name="user_name" />
      <label className='font-bold text-gray-400'>EMAIL</label>
      <input className='w-[250px] font-bold text-black lg:w-[600px] mb-10' type="email" name="user_email" />
      <label className='font-bold text-gray-400'>MENSAJE</label>
      <textarea className='w-[250px] font-bold text-black lg:w-[600px] mb-10' name="message" />
      <button className='text-gray-400 absolute bottom-4 right-1/2 border-2 border-solid border-gray-600 w-20 bg-red-500 bg-opacity-50' type='submit'> ENVIAR </button>
    </form>
</div>
    </div>
    </div>
  )
}
