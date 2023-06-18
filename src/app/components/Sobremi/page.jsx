"use client"
import React from 'react'
import Image from 'next/image'
import miFoto from '../../../../public/image/yo-removebg-preview.png'
import style from './Sobremi.module.css'
import Tecnologias from '../Tecnologias/Tecnologias'
import Educacion from '../Educacion/Educacion'
import { motion, useScroll } from 'framer-motion'
import Transition from '../Transition/Transition'
import { useRef } from 'react'
import Footer from '../Name/footer'

export default function Sobremi() {
const ref = useRef(null)
const {scrollYProgress} = useScroll(
  {
    target:ref,
    offset:["start center", "center start"]
}
)

  return (
    <>
    <Transition></Transition>
    <main className="flex min-h-screen flex-col items-center justify-between md:flex-col md:justify-around gap-10 sm:gap-20">
        <div className="flex min-h-screen flex-col items-center justify-between md:flex-row md:justify-around ">
        
        <motion.div  className=' md:relative md:bottom-20'  whileHover={{y:-10}} >
        <Image className='opacity-75' src={miFoto} alt='SebastianMayor' width={500} height={500}></Image>
       
        </motion.div>
        <div className='w-10/12 m-4 overflow-hidden rounded-3xl md:w-1/2'>
            <h1  className='animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards flex justify-center font-bold text-5xl text-gray-400 sm:text-7xl tracking-wide md:tracking-widest m-4'> <span className=' pr-10 hover:text-red-600 '>SOBRE</span> MI <span className='text-red-600'>.</span></h1>
            <h2  className='animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards flex justify-center font-bold text-xl text-gray-400 sm:text-3xl'>Soy Sebastian Mayor</h2>
            <p className='animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards p-4 text-gray-400 text-2xl'>Full Stack Developer con background en Ingeniería Electrónica y Telecomunicaciones carrera que me ayudo a desarrollar mis habilidades blandas, tengo conocimientos en tecnologías ágiles, GIT, estructura de datos, algoritmos y frameworks CSS.</p>
            <p className='animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards p-4 text-gray-400 text-2xl'>He participado en proyectos de creacion de aplicaciones web tanto inviduales como grupales, obteniendo muy buena experiencia en TEGNOLOGÍAS de desarrollo. </p>
        </div>
        </div>

<div className='  sm:mb-10'>
          <Educacion></Educacion>
</div>
        <div className='  sm:mt-10'>

          <Tecnologias ref={ref} scrollYProgress={scrollYProgress}></Tecnologias>
        </div>

       
<Footer></Footer>
    </main>
    </>
  )
}