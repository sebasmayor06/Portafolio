'use client'
import React, { useState } from 'react'
import sombrero from '../../../../public/image/sombrero-removebg-preview.png'
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Educacion() {
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)

  const handleClick = () =>{
    if (!click){
      setClick(true)
    }else{
      setClick(false)
    }
  }

  const handleClick2 = () =>{
    if (!click2){
      setClick2(true)
    }else{
      setClick2(false)
    }
  }
  return (
    <div className='flex flex-col'>
    <div >
      <h1 className='flex justify-center font-bold mb-8 text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest'> EDUCACIÓN<span className='text-red-600'>.</span></h1>
      </div>
      <div className='flex flex-col items-center sm:justify-between gap-14 sm:flex sm:flex-row md:border-red-600 border-black relative z-0 w-[100%] border-t-2 border-solid sm:border-red-600 font-medium text-lg text-gray-500'>
        
        <div className='flex flex-col items-center gap-5 w-40' >

            <button className='' onClick={handleClick2}>
        <Image className='sm:absolute sm:z-50' src={sombrero} width={60} height={60} style={{ top: '-20px', left: '10%', transform: 'translateX(-50%)' }}></Image>
            </button>
            {click2===true
            ? <div className='w-60 border p-2 rounded-xl overflow-hidden '>
            <h1 className='font-bold'>Bootcamp Henry</h1>
            <h4 className='font-light'>Feb 2023 - Jun 2023</h4>
                <a className='font-bold'>Full Stack Developer</a>
            </div>
            :""
            }
   
        </div>

        <div className='flex flex-col gap-5 w-40 items-center' >

            <button onClick={handleClick}>
        <Image className='sm:absolute sm:z-50 ' src={sombrero} width={60} height={60} style={{ top: '-20px', left:'90%', transform: 'translateX(-50%)' }}></Image>
            </button>
            {click===true
            ?<div className='border w-60 p-2 rounded-xl overflow-hidden'>
            <h1 className='font-bold'>Universidad Autónoma de Occidente</h1>
            <h4 className='font-light'>Jun 2012 - Feb 2021</h4>
                <a className='font-bold'>Ingenieria Electronica y Telecomunicaciones</a>
        
            </div>
            :""
            }
    
        </div>
       
      </div>
    </div>
  )
}
