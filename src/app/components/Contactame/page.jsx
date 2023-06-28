'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import img from "../../../../public/image/yo-removebg-preview.png"
import { motion } from 'framer-motion';
import Footer from '../Name/footer'



export default function page() {
  const form = useRef();
  const instagram = <a className='cursor-pointer' target="_blank" href='https://www.instagram.com/sm_dev06/'>"www.instagram.com/sm_dev06/"</a>
  const linkedin =<a className='cursor-pointer' target="_blank" href='https://www.linkedin.com/in/sebastian-mayor/'>"www.linkedin.com/in/sebastian-mayor/"</a>
  const gitHub = <a className='cursor-pointer' target="_blank" href='https://github.com/sebasmayor06'>"www.github.com/sebasmayor06"</a>
  const email= <a className='cursor-pointer' target="_blank" href='mailto:smdev06@gmail.com'  >"smdev06@gmail.com"</a>
  const phone =  <a className='cursor-pointer' target="_blank" href='https://wa.me/+573105260557'  >"+573105260557"</a>
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
    <div className='flex flex-col  gap-24'>

      <h1  className='animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest m-4'> CONTACTAME <span className='text-red-600'>.</span></h1>
    <div className='flex flex-col lg:flex lg:flex-row justify-around items-center '>

  <div className='flex flex-col gap-2 sm:text-sm lg:text-xl'  >
  
  
   <span className='text-gray-400'> <span className='font-bold text-red-700'>const</span> {` Contactame = ( ) =>{`} </span>
    
   <span className='ml-9 text-gray-400'> <span className='font-bold text-red-700'>const</span>  {`redes = {`} </span>
   <span className='ml-20 text-gray-400 hover:text-red-600'> <span className='text-gray-600 font-bold'>instagram:</span>  {instagram}, </span>
   <span className='ml-20 text-gray-400 hover:text-red-600'> <span className='text-gray-600 font-bold'>linkedin:</span>  {linkedin},</span>
    <span className='ml-20 text-gray-400 hover:text-red-600'> <span className='text-gray-600 font-bold' >gitHub:</span>  {gitHub}, </span>
    <span className='ml-20 text-gray-400 hover:text-red-600'> <span className='text-gray-600 font-bold' >email:</span>  {email}, </span>
      <span className='ml-20 text-gray-400 hover:text-red-600'> <span className='text-gray-600 font-bold' > phone:</span>  {phone} </span>
      <span className='ml-9 text-gray-400'> {` };`} </span>
      <span className='ml-9 text-gray-400'> <span className='font-bold text-red-700'>return</span>  redes; </span>
      <span className='text-gray-400'> {`  }; `} </span> 
      
   

  </div>
<div className='mt-20'>

    <motion.form 
    initial={{ x: "50%", opacity:0 }}
    animate={{ x: 0, opacity:1}}
    transition={{
      duration: 1.8,
      ease: 'easeInOut',
      repeatType: 'loop'}}
    className='flex flex-col  relative bg-red-600 bg-opacity-[12%] border-2 border-solid border-gray-400 rounded-lg p-4' ref={form} onSubmit={sendEmail}>
      <label className='font-bold text-gray-400' >NOMBRE</label>
      <input required={true} className='w-[250px] p-2 bg-gray-400 font-bold rounded-lg  text-black lg:w-[600px] mb-10' type="text" name="user_name" />
      <label className='font-bold text-gray-400'>EMAIL</label>
      <input required={true} className='w-[250px] p-2 bg-gray-400 font-bold rounded-lg  text-black lg:w-[600px] mb-10' type="email" name="user_email" />
      <label className='font-bold text-gray-400 '>MENSAJE</label>
      <textarea required={true} className='w-[250px] p-2 bg-gray-400 rounded-lg font-bold text-black lg:w-[600px] mb-10' name="message" />
      <button className='text-gray-400 rounded-lg  absolute bottom-4 right-1/2 border-2 border-solid border-gray-600 w-20 bg-red-500 bg-opacity-50' type='submit'> ENVIAR </button>
    </motion.form>
</div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </div>
  )
}



