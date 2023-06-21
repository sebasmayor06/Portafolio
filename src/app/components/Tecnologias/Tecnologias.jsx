"use client"
import React from 'react'
import {array} from '../FotosTec/FotosTec'
import Cards from './Cards'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <div>
      <div>
      <h1 className='flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest'> TECNOLOGÍAS<span className='text-red-600'>.</span></h1>
      </div>
      
      <div>
       
<Cards obras={array} ></Cards>
      </div>
      
      </div>
  
    )
}
