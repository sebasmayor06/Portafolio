'use client'
import React from 'react'
import style from './Name.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Name() {

  const hover={
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition: {
        delay:0.5,
      }
    }
  }



  return (
    <div className='flex justify-center flex-col items-center h-screen gap-2 md:items-center'>
        <div>
       <h1 className=' animate-pulse font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-gray-600 md:text-9xl sm:text-7xl'>Sebastian Mayor</h1>
        </div>
        <div className= {style.border}>
       <h1 className='font-bold text-xl text-red-600 sm:text-4xl' >Full-Stack Developer</h1>
        </div>
        <div>
      <div >
       <Link href='/Henry-CV Sebastian Muñoz (1).pdf' target={'_black'}>
        <button  className="animate-wiggle-more animate-twice animate-duration-1000  animate-ease-out animate-normal animate-fill-backwards text-red-700 tracking-wider hover:text-red-600 border border-red-700 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg text-sm px-2 py-2 text-center font-bold m-4">Descargar CV</button>
       </Link>
       <Link href='mailto:smdev06@gmail.com' target={'_black'}>
        <button className="animate-wiggle-more animate-twice animate-duration-1000  animate-ease-out animate-normal animate-fill-backwards tracking-wider text-red-700 hover:text-red-600 border border-red-700 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg text-sm px-2 py-2 text-center font-bold m-4">Contactame</button>
       </Link>

      </div>
     </div>

        </div>
  )
}
