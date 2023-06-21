"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Transition from '../Transition/Transition'
import { proyectos2 } from '../proyectos2/proyectos'
import Image from 'next/image'


export default function proyectos() {

  const array = ["PROYECTOS."]

  return (
    <div className='flex flex-col'>
      {/* <Transition></Transition> */}
      <div className='flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest'>

      {array[0].split('').map((e,index)=>(
        
        <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay:0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }} key={index} className={`${index % 2 !== 0 ?"hover:text-red-600":""} ${index===9?'text-red-600':''}`} >{e}</motion.h1>
        ))
      }
      </div>
      <div className='flex flex-row'>


        {proyectos2.map((e, index)=>(
      <div className='border border-solid border-gray-500 rounded-xl m-10'>
          <Image src={e.image} width={600} height={600}></Image>
          <h1 key={index} className='text-white'>{e.name}</h1>
          <a href={e.deploy}>DEPLOY</a>
          <div className='flex flex-row overflow-hidden ' >
            <h1 className='mr-5'>TECNOLOGIAS:</h1>
          {e.tecno.map((f,index)=>(
            <div>

              <Image  key={index} src={f} width={40} height={40} ></Image>
            </div>

          ))}
            </div>
      </div>
        ))}
        </div>
      
    </div>
  )
}
